import { useNavigate } from "react-router";
import errorImg from "../assets/error.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="">
          <img src={errorImg} alt="" className="mx-auto w-96" />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#001931] mb-4">
              Oops, page not found!
            </h2>
            <p className="text-lg text-[#627382]">
              The page you are looking for is not available.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="btn flex 
          mx-auto my-4 rounded  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
          >
            Go Back!
          </button>
        </div>
      </>
    </>
  );
};

// return (
//   <>
//     <div>{error.message}This is Error page</div>

//     <div className="">
//       <img src={errorImg} alt="" className="mx-auto w-96" />
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-[#001931] mb-4">
//           Your Installed Apps
//         </h2>
//         <p className="text-lg text-[#627382]">
//           Explore All Trending Apps on the Market developed by us
//         </p>
//       </div>

//       <button
//         onClick={() => navaigate("/")}
//         className="btn flex
//       mx-auto my-4 rounded  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
//       >
//         Go Back!
//       </button>
//     </div>
//   </>
// );

export default ErrorPage;
