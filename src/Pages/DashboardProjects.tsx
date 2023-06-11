import React, { useState } from "react";
import OnboardingForm from "../Components/Project/OnbardingForm";
import { Project } from "../Repostitory/Repository";
import ProjectListTile from "../Components/Project/PorjectListTile";
import { createSearchParams, useNavigate } from "react-router-dom";

type DashboardProjectsParam = {
  projects: Project[];
};

const DashboardProjects: React.FC<DashboardProjectsParam> = ({ projects }) => {
  const [showOnboardingForm, changeOnboardingFormState] = useState(false);

  if (projects && projects.length > 0) {
    return <DashboardProjectsView data={projects} />;
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      {!showOnboardingForm && (
        <section className="w-5/6 h-3/4 flex justify-center items-center ">
          <div className="bg-bg-project-banner bg-cover bg-center bg-opacity-40 w-4/5 h-2/3 flex flex-col justify-center items-center rounded-xl">
            <h1 className="text-4xl font-bold text-white">
              Bring your carbon projects on-chain
            </h1>
            <h1 className="text-6xl font-bold text-white">
              Get funded to increase your green efforts
            </h1>
          </div>
        </section>
      )}

      {!showOnboardingForm && (
        <section className="w-4/5 flex justify-center items-center mt-4">
          <button
            onClick={() => {
              changeOnboardingFormState(true);
            }}
            className="bg-gradient-to-r from-green-950 to-green-300 py-6 px-16 rounded-full"
          >
            <h2 className="text-white text-xl font-bold">Apply Now</h2>
          </button>
        </section>
      )}

      {showOnboardingForm && (
        <section>
          <OnboardingForm />
        </section>
      )}
    </div>
  );
};

type DashboardProjectsViewParams = {
  data: Project[];
};

const DashboardProjectsView: React.FC<DashboardProjectsViewParams> = ({
  data,
}) => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col flex-wrap w-full mt-10">
      {data.map((e) => (
        <ProjectListTile
          key={e.projectId}
          coverImage={e.coverImageUrl!}
          title={e.projectName}
          balance={e.year}
          creditType={e.creditType}
          onClick={() => {
            navigation({
              pathname: "/projectDetail",
              search: createSearchParams({
                projectId: e.projectId,
              }).toString(),
            });
          }}
        />
      ))}
    </div>
  );
};

export default DashboardProjects;
