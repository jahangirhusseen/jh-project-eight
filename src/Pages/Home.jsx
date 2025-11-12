import { useNavigate } from "react-router";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";
import SkeletonLoader from "./SkeletonLoader";
import GooglePlayImg from "../assets/fi_16076057.png";
import AppStoreImg from "../assets/fi_5977575.png";
import HERO from "../Components/HERO.JSX";

const Home = () => {
  const data = useApps();
  const { app, loading } = data;

  const visibleApps = app.slice(0, 8);

  const navigate = useNavigate();

  return (
    <>
      <div className="py-20">
        {loading ? (
          <div className="container mx-auto px-4 py-4">
            <SkeletonLoader count={app.length} />
          </div>
        ) : (
          <>
            <div className="container mx-auto px-4 py-4">
              <div className="hero">
                <div className="hero-content text-center">
                  <div className=" px-3 w-full md:w-8/12 md:px-0">
                    <h1 className="text-2xl lg:text-5xl font-bold text-[#001931] text-center">
                      We Build
                      <br />
                      <span className="text-[#632EE3]">Productive</span> Apps
                    </h1>
                    <p className="py-6">
                      At HERO.IO , we craft innovative apps designed to make
                      everyday life simpler, smarter, and more exciting.Our goal
                      is to turn your ideas into digital experiences that truly
                      make an impact.
                    </p>
                    <div className="flex justify-center gap-x-4 my-3">
                      <button
                        onClick={() =>
                          window.open("https://play.google.com/store", "_blank")
                        }
                        className="btn rounded  text-[#001931] font-semibold px-3 py-4"
                      >
                        <img src={GooglePlayImg} alt="" />
                        Google Play
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.apple.com/app-store/",
                            "_blank"
                          )
                        }
                        className="btn rounded  text-[#001931] font-semibold px-3 py-4"
                      >
                        <img src={AppStoreImg} alt="" />
                        App Store
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HERO></HERO>
            {/* Trending Apps */}
            <div className="container mx-auto px-4 py-4">
              <div className="text-center">
                <h2 className="text-2xl lg:text-5xl font-bold text-[#001931] my-4">
                  Trending Apps
                </h2>
                <p className="text-xl text-[#627382]">
                  Explore All Trending Apps on the Market developed by us
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {visibleApps.map((visibleApps) => (
                  <AppCard
                    key={visibleApps.id}
                    visibleApps={visibleApps}
                  ></AppCard>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate("/apps")}
                  className="btn rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
                >
                  {" "}
                  Show All
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
