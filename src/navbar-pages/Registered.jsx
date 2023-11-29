import { Link } from "react-router-dom";

const Registered = () => {
  return (
    <>
      <div className="max-w-sm mx-auto mt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
          <h2 className="block text-gray-700 text-lg font-bold mb-4">
            You are successfully registered!
          </h2>
          <p className="text-center">
            Click{" "}
            <Link className="text-red-500 hover:underline" to={"/dashboard"}>
              here
            </Link>{" "}
            to continue!
          </p>
        </div>
      </div>
    </>
  );
};

export default Registered;
