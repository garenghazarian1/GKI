
import data from '../newVehicles/data';
import React, { useState } from 'react';

function Vehicles() {

  const [activeImages, setActiveImages] = useState(data.map(() => 0));

  const setActiveImage = (vehicleIndex, imageIndex) => {
    const newActiveImages = [...activeImages];
    newActiveImages[vehicleIndex] = imageIndex;
    setActiveImages(newActiveImages);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {data.map((vehicle, vehicleIndex) => (
        <div key={vehicle.id} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-2xl mb-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 p-4 border-b border-gray-200">{vehicle.name}</h3>
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
                  className={`mx-1 w-16 h-4 rounded-full ${imageIndex === activeImages[vehicleIndex] ? 'bg-blue-500' : 'bg-gray-300'}`} 
                  onClick={() => setActiveImage(vehicleIndex, imageIndex)}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-2">Brand: {vehicle.brand}</p>
            <p className="text-gray-700 mb-2">Kilometers: {vehicle.kilometers} km</p>
            <p className="text-gray-700 mb-2">Horsepower: {vehicle.horsepower} HP</p>
            <p className="text-gray-700 mb-2">Year: {vehicle.year}</p>
            <p className="text-gray-700">{vehicle.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vehicles;
