import React from "react";
import { useForm } from "react-hook-form";

function OnboardingForm() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-auto rounded-xl shadow-2xl p-10 my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row justify-around">
            <div className="flex-1 flex flex-col space-y-4 px-28">
              <div className="flex flex-col">
                <label htmlFor="projectName" className="font-bold mb-2">
                  Name of Project
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="p-2 border border-gray-300 rounded px-10"
                  {...register("projectName", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="coverImage" className="font-bold mb-2 px-6">
                  Cover Image
                </label>
                <input
                  type="text"
                  id="coverImage"
                  className="p-2 border border-gray-300 rounded"
                  {...register("coverImage", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="teamMembers" className="font-bold mb-2 px-6">
                  Team Members
                </label>
                <input
                  type="text"
                  id="teamMembers"
                  className="p-2 border border-gray-300 rounded"
                  {...register("teamMembers", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="impact" className="font-bold mb-2 mt-4">
                  Impact (tCO2)
                </label>
                <input
                  type="range"
                  id="impact"
                  className="w-full"
                  {...register("impact", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="yearCommissioned" className="font-bold mb-2">
                  Year Started
                </label>
                <select
                  id="yearCommissioned"
                  className="p-2 border border-gray-300 rounded"
                  {...register("yearCommissioned", { required: true })}
                >
                  <option value="">Select Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="flex-1 flex flex-col space-y-4 mt-8 px-28">
              <div className="flex flex-col">
                <label htmlFor="country" className="font-bold mb-2">
                  Country
                </label>
                <select
                  id="country"
                  className="p-2 border border-gray-300 rounded"
                  {...register("country", { required: true })}
                >
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="font-bold mb-2">
                  City
                </label>
                <select
                  id="city"
                  className="p-2 border border-gray-300 rounded"
                  {...register("city", { required: true })}
                >
                  <option value="">Select City</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Toronto">Toronto</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="type" className="font-bold mb-2">
                  Type
                </label>
                <select
                  id="type"
                  className="p-2 border border-gray-300 rounded"
                  {...register("type", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option value="Clean Energy">Clean Energy</option>
                  <option value="Ocean">Ocean</option>
                  <option value="Nature">Nature</option>
                  <option value="Waste">Waste</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="sdgGoals" className="font-bold mb-2">
                  SDG Goals
                </label>
                <select
                  id="sdgGoals"
                  className="p-2 border border-gray-300 rounded"
                  {...register("sdgGoals", { required: true })}
                >
                  <option value="">Select SDG Goals</option>
                  <option value="Goal 1">Goal 1</option>
                  <option value="Goal 2">Goal 2</option>
                  <option value="Goal 3">Goal 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>

          <div className="py-8">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded self-center"
              disabled={formState.isSubmitting}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OnboardingForm;
