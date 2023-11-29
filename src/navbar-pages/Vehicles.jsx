import React, { useState, useContext } from "react";
import data from "../newVehicles/data";
import { UserContext } from "../context/AuthContext";

function Vehicles() {
  const { reserveCar, allUserCarData, userReservedCars, cancelReservation } =
    useContext(UserContext);
  const [activeImages, setActiveImages] = useState(data.map(() => 0));
  const [reservationStatus, setReservationStatus] = useState(
    data.map(() => false)
  );

  const setActiveImage = (vehicleIndex, imageIndex) => {
    const newActiveImages = [...activeImages];
    newActiveImages[vehicleIndex] = imageIndex;
    setActiveImages(newActiveImages);
  };

  const reserveCarHandler = (vehicle, vehicleIndex) => {
    toggleReservation(vehicleIndex);
    reserveCar(vehicle);
    console.log(vehicle);
  };

  const cancelReservationHandler = (vehicle, vehicleIndex) => {
    toggleReservation(vehicleIndex);
    cancelReservation(vehicle);
  };

  const toggleReservation = (vehicleIndex) => {
    const newReservationStatus = [...reservationStatus];
    newReservationStatus[vehicleIndex] = !reservationStatus[vehicleIndex];
    setReservationStatus(newReservationStatus);
  };

  const isCarReserved = (vehicle) => {
    const isReservedByUsers = allUserCarData.find(
      (reservedCar) => reservedCar.id === vehicle.id
    );

    return isReservedByUsers;
  };

  const isCarReservedFromCurrent = (vehicle) => {
    const isReservedByCurrent = userReservedCars.find(
      (reservedCar) => reservedCar.id === vehicle.id
    );

    return isReservedByCurrent;
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        {data.map((vehicle, vehicleIndex) => (
          <div
            key={vehicle.id}
            className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-2xl mb-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 p-4 border-b border-gray-200">
              {vehicle.name}
            </h3>
            <div className="p-4">
              <img
                src={vehicle.images[activeImages[vehicleIndex]]}
                alt={`${vehicle.name} Image ${activeImages[vehicleIndex] + 1}`}
                className="mb-3 rounded-md"
              />
              <div className="flex justify-center mb-3">
                {vehicle.images.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    className={`mx-1 w-16 h-4 rounded-full ${
                      imageIndex === activeImages[vehicleIndex]
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setActiveImage(vehicleIndex, imageIndex)}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-2">Brand: {vehicle.brand}</p>
              <p className="text-gray-700 mb-2">
                Horsepower: {vehicle.horsepower} HP
              </p>
              <p className="text-gray-700 mb-2">Year: {vehicle.year}</p>
              <p className="text-gray-700">{vehicle.description}</p>
              <p className="text-gray-700">Rent {vehicle.rent}€</p>
              <div className="flex justify-center mt-4">
                {!reservationStatus[vehicleIndex] &&
                  !isCarReserved(vehicle) && (
                    <button
                      onClick={() => reserveCarHandler(vehicle, vehicleIndex)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Reserve now
                    </button>
                  )}
                {(reservationStatus[vehicleIndex] ||
                  isCarReserved(vehicle)) && (
                  <span className="text-green-600 bg-green-200 py-2 px-4 rounded mr-2">
                    Reserved
                  </span>
                )}
                <div>
                  {isCarReservedFromCurrent(vehicle) ? (
                    <button
                      onClick={() =>
                        cancelReservationHandler(vehicle, vehicleIndex)
                      }
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Cancel Reservation
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
