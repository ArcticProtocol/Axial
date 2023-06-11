import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React, { useContext, useState } from "react";
import { useController, useForm } from "react-hook-form";
import Select from "react-select";
import { AXIAL_PROJECT_TRACKER_ADDRESS } from "../../util";
import { v4 as uuidv4 } from "uuid";
import UserAppContext from "../../Context/usermtecontext";
import { registerProject } from "../../Repostitory/Repository";
import WidgetLoader from "../Loader/WidgetLoader";

function OnboardingForm() {
  const { register, handleSubmit, formState, watch, control } = useForm();

  const { contract } = useContract(AXIAL_PROJECT_TRACKER_ADDRESS);
  const { mutateAsync: addProject, isLoading } = useContractWrite(
    contract,
    "addProject"
  );
  const { userMeta } = useContext(UserAppContext)!;
  const impactGoal = watch("impactGoal");
  const country: string = watch("country");

  const call = async (
    id: string,
    name: string,
    funding: number,
    rating: number,
    teamMembers: string[]
  ) => {
    try {
      const data = await addProject({
        args: [id, name, funding, impactGoal, rating, teamMembers],
      });
      console.info("contract call successs", data);
      return data.receipt.transactionHash;
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const onSubmit = async (formData: any) => {
    console.log({ formData });
    let uuid = uuidv4();
    let _sdgGoals: string[] = [];

    const {
      city,
      country,
      creditType,
      impactGoal,
      projectName,
      sdgGoals,
      teamMembers,
      projectStory,
      year,
      funding,
    } = formData;

    sdgGoals.forEach((e: any) => {
      _sdgGoals.push(e.value);
    });

    let result = await call(uuid, projectName, funding, 0, [
      userMeta.pubcliKey,
    ]);
    if (result) {
      const request = {
        projectId: uuid,
        projectName: projectName,
        teamMembers: [userMeta.pubcliKey],
        impactGoal: impactGoal,
        country: country,
        creditType: creditType,
        year: year,
        sdgGoals: _sdgGoals,
        city: city,
        owner: userMeta.pubcliKey,
        projectStory: projectStory,
      };

      let result = await registerProject(request);
      if (result) {
        console.log("success");
      }
    }
  };

  const countries = ["India", "USA", "UK"];

  type CityData = {
    [key: string]: string[];
  };

  const cities: CityData = {
    USA: [
      "New York City",
      "Los Angeles",
      "Chicago",
      "Houston",
      "San Francisco",
      "Miami",
      "Washington, D.C.",
      "Boston",
      "Seattle",
      "Las Vegas",
    ],

    UK: [
      "London",
      "Manchester",
      "Birmingham",
      "Edinburgh",
      "Glasgow",
      "Liverpool",
      "Bristol",
      "Leeds",
      "Newcastle",
      "Oxford",
    ],

    India: [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
    ],
  };

  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: "sdgGoals",
    control,
    defaultValue: [], // Provide initial selected options
  });

  const options = [
    { value: "No Poverty", label: "No Poverty" },
    { value: "Zero Hunger", label: "Zero Hunger" },
    {
      value: "Good Health and Well-being",
      label: "Good Health and Well-being",
    },
    { value: "Quality Education", label: "Quality Education" },
    { value: "Gender Equality", label: "Gender Equality" },
    {
      value: "Clean Water and Sanitation",
      label: "Clean Water and Sanitation",
    },
    {
      value: "Affordable and Clean Energy",
      label: "Affordable and Clean Energy",
    },
    {
      value: "Decent Work and Economic Growth",
      label: "Decent Work and Economic Growth",
    },
    {
      value: "Industry, Innovation, and Infrastructure",
      label: "Industry, Innovation, and Infrastructure",
    },
    { value: "Reduced Inequalities", label: "Reduced Inequalities" },
    {
      value: "Sustainable Cities and Communities",
      label: "Sustainable Cities and Communities",
    },
    {
      value: "Responsible Consumption and Production",
      label: "Responsible Consumption and Production",
    },
    { value: "Climate Action", label: "Climate Action" },
    { value: "Life Below Water", label: "Life Below Water" },
    { value: "Life on Land", label: "Life on Land" },
    {
      value: "Peace, Justice, and Strong Institutions",
      label: "Peace, Justice, and Strong Institutions",
    },
    {
      value: "Partnerships for the Goals",
      label: "Partnerships for the Goals",
    },
  ];

  const years = ["2018", "2019", "2020", "2021", "2022", "2023"];

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

              <label htmlFor="projectStory" className="font-bold mb-2">
                Project Story
              </label>
              <input
                type="text"
                id="projectStory"
                className="p-2 border border-gray-300 rounded px-10"
                {...register("projectStory", { required: true })}
              />

              <label htmlFor="coverImageUrl">Cover Image</label>
              <input
                type="file"
                id="coverImageUrl"
                accept="image/*"
                {...register("coverImageUrl")}
              />

              <div className="flex flex-col">
                <label htmlFor="teamMembers" className="font-bold mb-2 px-6">
                  Team Members
                </label>
                <input
                  type="text"
                  id="teamMembers"
                  className="p-2 border border-gray-300 rounded"
                  {...register("teamMembers")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="impact" className="font-bold mb-2 mt-4">
                  Impact: {impactGoal} (tCO2)
                </label>
                <input
                  type="range"
                  id="impact"
                  min="50"
                  max="1000"
                  className="w-full bg-green-700"
                  {...register("impactGoal", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="sdgGoals" className="font-bold mb-2">
                  SDG Goals
                </label>

                <Select
                  isMulti
                  options={options}
                  placeholder="Select Goals"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
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
                  {countries.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
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
                  {cities[country]?.map((e: any) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="creditType" className="font-bold mb-2">
                  Credit Type
                </label>
                <select
                  id="creditType"
                  className="p-2 border border-gray-300 rounded"
                  {...register("creditType", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option value="Clean Energy">Clean Energy</option>
                  <option value="Ocean">Ocean</option>
                  <option value="Plastic Removal">Plastic Removal</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="year" className="font-bold mb-2">
                  Select Year
                </label>
                <select
                  id="year"
                  className="p-2 border border-gray-300 rounded"
                  {...register("year", { required: true })}
                >
                  <option value="">Select Year</option>
                  {years.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="funding" className="font-bold mb-2">
                  Previous Funding
                </label>
                <input
                  type="number"
                  id="funding"
                  className="p-2 border border-gray-300 rounded px-10"
                  {...register("funding", { required: true })}
                />
              </div>
            </div>
          </div>

          <div className="py-8">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-xl self-center "
              disabled={formState.isSubmitting}
            >
              {isLoading && <WidgetLoader />}

              {!isLoading && <div> Submit </div>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OnboardingForm;
