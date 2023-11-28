import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const ReservedCars = () => {
  const { userReservedCars } = useContext(UserContext);

  return (
    <div>
      {userReservedCars.map((car, carIndex) => (
        <NavLink to="/vehicles" key={carIndex}>
          {" "}
          <div
            className="bg-white/75 p-4 shadow-lg rounded-lg max-w-[600px]"
            key={carIndex}
          >
            <h1 className="m-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Rent it NOW
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
  );
};

export default ReservedCars;
