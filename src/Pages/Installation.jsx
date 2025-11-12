import { ArrowDownToLine, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const navigate = useNavigate();
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("appList"));
    if (saveList) {
      setInstallList(saveList);
    }
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "sort-asc") {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "sort-dsc") {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installList;
    }
  })();

  const handleUninstallApp = (data) => {
    const existAppList = JSON.parse(localStorage.getItem("appList"));
    const updatedAppList = existAppList.filter((app) => app.id !== data.id);
    setInstallList(updatedAppList);
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
    toast.info(`${data.title} has been successfully uninstalled.`);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 py-4">
        {/* Install-app-card */}
        {sortedItem.length === 0 ? (
          <>
            <h2 className="text-5xl font-bold text-[#001931] my-4 text-center">
              No apps installed yet.
            </h2>
            <button
              onClick={() => navigate("/apps")}
              className="btn flex 
          mx-auto my-4 rounded  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
            >
              Show All Apps!
            </button>
          </>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#001931] my-4">
                Your Installed Apps
              </h2>
              <p className="text-xl text-[#627382]">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            <div className="flex justify-between items-center my-10">
              <h2>({sortedItem.length}) Apps Found</h2>
              <div className="">
                <select
                  onChange={(e) => setSortOrder(e.target.value)}
                  value={sortOrder}
                  className="select outline-0 focus-within:border-[#001931]"
                >
                  <option value="none" disabled={true}>
                    Short By Size
                  </option>
                  <option value="sort-asc">Low - High</option>
                  <option value="sort-dsc">High- Low</option>
                </select>
              </div>
            </div>
            {sortedItem.map((data) => (
              <div
                key={data.id}
                className="card card-side bg-base-100 shadow-sm items-center gap-x-4 px-4 my-4"
              >
                <figure className="h-20 w-20 shadow-sm rounded-sm ">
                  <img
                    className="w-full object-cover"
                    src={data.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body px-0 py-4">
                  <h2 className="card-title mb-2">{data.title}</h2>

                  <div className="flex gap-x-4">
                    <div className="flex justify-between items-center gap-2 px-2 py-1 bg-[#F1F5E8] text-[#00D390] rounded-sm ">
                      <span>
                        <ArrowDownToLine size={16} />
                      </span>
                      <p>{(data.downloads / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-2 py-1 bg-[#F1F5E8] text-[#FF8811] rounded-sm">
                      <span>
                        <Star size={16} />
                      </span>
                      <p> {data.ratingAvg}M</p>
                    </div>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    onClick={() => handleUninstallApp(data)}
                    className="btn bg-[#00d390] text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Installation;
