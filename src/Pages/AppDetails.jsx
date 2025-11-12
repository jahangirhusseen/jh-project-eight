import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

import { ArrowDownToLine, Star, ThumbsUp } from "lucide-react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AppError from "./AppError";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { app, loading } = useApps();
  const [isInstall, setIsInstall] = useState(false);

  const findApp = app.find((data) => data.id === parseInt(id));

  useEffect(() => {
    if (!findApp) return;
    const existAppList = JSON.parse(localStorage.getItem("appList"));
    const alreadyInstalled = existAppList.some(
      (data) => data.id === findApp.id
    );
    if (alreadyInstalled) {
      setIsInstall(true);
    }
  }, [findApp]);

  if (loading) return <p>Data is Loading ...</p>;

  if (!findApp) {
    return (
      <>
        <AppError></AppError>
      </>
    );
  }

  const {
    title,
    companyName,
    reviews,
    ratingAvg,
    ratings,
    image,
    downloads,
    description,
  } = findApp || {};

  const handleInstallApp = () => {
    const existAppList = JSON.parse(localStorage.getItem("appList"));
    let updatedAppList = [];

    if (existAppList) {
      updatedAppList = [...existAppList, findApp];
    } else {
      updatedAppList.push(findApp);
    }
    setIsInstall(true);
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
    toast.success("App installed successfully!");
  };

  const sortedVAlue = [...ratings].sort((a, b) => b.count - a.count);

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="card bg-[#ffffff] p-4">
          <div className="card lg:card-side">
            <figure className="h-80  shadow">
              <img className="w-full object-cover" src={image} alt="Album" />
            </figure>

            <div className="card-body pb-0">
              <h2 className="card-title text-3xl">{title}</h2>
              <p className="">
                Developed by{" "}
                <span className="text-[#632EE3]">{companyName}</span>
              </p>

              <div className="flex space-x-12 mt-6 pt-6 border-t border-t-[#00193120]">
                <div className="px-2 py-1">
                  <span className="text-[#00D390]">
                    <ArrowDownToLine size={40} />
                  </span>
                  <p className="my-3">Downloads</p>
                  <h4 className="text-4xl font-extrabold text-[#001931]">
                    {(downloads / 1000000).toFixed(1)}M
                  </h4>
                </div>
                <div className=" px-2 py-1  ">
                  <span className=" text-[#FF8811]">
                    <Star size={40} />
                  </span>
                  <p className="my-3">Average Ratings</p>
                  <h4 className="text-4xl font-extrabold text-[#001931]">
                    {ratingAvg}M
                  </h4>
                </div>
                <div className=" px-2 py-1  ">
                  <span className="text-[#632EE3] ">
                    <ThumbsUp size={40} />
                  </span>
                  <p className="my-3">Total Reviews</p>
                  <h4 className="text-4xl font-extrabold text-[#001931]">
                    {(reviews / 1000).toFixed(1)}k
                  </h4>
                </div>
              </div>
              <div className="card-actions">
                <button
                  onClick={handleInstallApp}
                  className="btn bg-[#00d390] text-white disabled:bg-[#00d39090] disabled:cursor-not-allowed"
                  disabled={isInstall}
                >
                  {isInstall ? "Installed" : "Install Now (291 MB)"}
                </button>
              </div>
            </div>
          </div>
          {/* Chart area */}

          <div className="border-t border-b border-[#00193120] py-10 my-10">
            <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
            <div className="w-full h-70">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="focus:outline-none"
              >
                <BarChart layout="vertical" data={sortedVAlue}>
                  <XAxis type="number" axisLine={false} />
                  <YAxis type="category" dataKey="name" axisLine={false} />

                  <Bar
                    dataKey="count"
                    fill="#ff8c00"
                    barSize={30}
                    radius={[4, 4, 4, 4]}
                    animationDuration={1200}
                    animationBegin={200}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Description */}
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-[#627382] text-xl">{description}</p>
            <br />
            <p className="text-[#627382] text-xl">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
