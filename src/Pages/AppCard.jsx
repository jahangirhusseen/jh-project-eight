import React from "react";
import { ArrowDownToLine, Star } from "lucide-react";
import { useNavigate } from "react-router";

const AppCard = ({ visibleApps }) => {
  const { id, image, title, downloads, ratingAvg } = visibleApps;
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/apps/${id}`)}
        className="card bg-[#ffffff] shadow-sm p-4 transition-transform duration-300 
             hover:scale-105 hover:shadow-md cursor-pointer"
      >
        <figure className="h-70 shadow-sm ">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body px-0 py-4">
          <h2 className="card-title mb-2">{title}</h2>
          <div className="flex justify-between">
            <div className="flex justify-between items-center gap-2 px-2 py-1 bg-[#F1F5E8] text-[#00D390] rounded-sm ">
              <span>
                <ArrowDownToLine size={16} />
              </span>
              <p>{(downloads / 1000000).toFixed(1)}M</p>
            </div>
            <div className="flex justify-between items-center gap-2 px-2 py-1 bg-[#F1F5E8] text-[#FF8811] rounded-sm">
              <span>
                <Star size={16} />
              </span>
              <p> {ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
