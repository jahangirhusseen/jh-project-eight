import { useNavigate } from "react-router";
import errorAppImg from "../assets/errorAppImg.png";

const AppError = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="">
          <img src={errorAppImg} alt="" className="mx-auto w-96" />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#001931] mb-4">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-lg text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="btn flex 
          mx-auto my-4 rounded  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold px-3 py-4"
          >
            Go Back Home!
          </button>
        </div>
      </>
    </>
  );
};

export default AppError;
