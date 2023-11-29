import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-2 border-white-500 rounded-md"
      >
        Sign out
      </button>
    </>
  );
};

export default SignOut;
