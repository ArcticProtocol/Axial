import React, { useState } from "react";

function CarbonCalculator() {
  const [parameters, setParameters] = useState({
    distance: "",
    duration: "",
    energyConsumption: "",
    offsetType: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setParameters((prevParameters) => ({ ...prevParameters, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform calculations or submit the form
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Carbon Footprint Calculator</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="distance" className="text-sm font-medium">
              Distance (km)
            </label>
            <input
              type="number"
              id="distance"
              name="distance"
              value={parameters.distance}
              onChange={handleInputChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="text-sm font-medium">
              Duration (hours)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={parameters.duration}
              onChange={handleInputChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="energyConsumption" className="text-sm font-medium">
              Energy Consumption (kWh)
            </label>
            <input
              type="number"
              id="energyConsumption"
              name="energyConsumption"
              value={parameters.energyConsumption}
              onChange={handleInputChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="offsetType" className="text-sm font-medium">
              Offset Token Type
            </label>
            <select
              id="offsetType"
              name="offsetType"
              value={parameters.offsetType}
              onChange={handleInputChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              required
            >
              <option value="" disabled>
                Select an Offset Type
              </option>
              <option value="ocean">Ocean</option>
              <option value="natural">Natural</option>
              <option value="plastic">Plastic</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Calculate Offset
          </button>
        </form>
      </div>
    </div>
  );
}

export default CarbonCalculator;
