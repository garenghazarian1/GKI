import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const ReservedCars = () => {
  const { userReservedCars } = useContext(UserContext);

  return (
    <>
      {userReservedCars.length > 0 ? (
        <>
          <h2 className="text-white text-start">Your reservations</h2>
          <div className="flex gap-4 justify-center items-center w-full border border-white rounded-md p-4">
            {userReservedCars.map((car, carIndex) => (
              <NavLink to="/vehicles" key={carIndex}>
                <div className="bg-white/75 p-4 shadow-lg rounded-lg max-w-[600px]">
                  <h1 className="m-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    this car is reserved for you
                  </h1>
                  <img
                    src={car.images[1]}
                    alt={car.name}
                    className="w-full h-auto object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{car.name}</h3>
                  <span className="text-blue-600 font-semibold">{car.price}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReservedCars;
