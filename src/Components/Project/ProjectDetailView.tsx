import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Project, getProject } from "../../Repostitory/Repository";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { AXIAL_PROJECT_TRACKER_ADDRESS, etherToWei } from "../../util";
import Loader from "../Loader/Loader";
import WidgetLoader from "../Loader/WidgetLoader";
import WithdrawModal from "./WithdrawModal";

const ProjectDetailView: React.FC<{}> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projectDetails, setProjectDetails] = useState<Project>();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [withdrawAmount, setWithdraAmount] = useState(0);

  const projectId = searchParams.get("projectId");
  const isDAOPage = searchParams.get("isDaoPage") ?? false;

  const { contract } = useContract(AXIAL_PROJECT_TRACKER_ADDRESS);
  const projectBlock = useContractRead(contract, "getProjectById", [projectId]);

  const marketContract = useContract(AXIAL_PROJECT_TRACKER_ADDRESS);
  const { mutateAsync: withdrawFunds, isLoading } = useContractWrite(
    marketContract.contract,
    "withdrawFunds"
  );

  const callWithdrawFunds = async () => {
    try {
      const _amount = etherToWei(withdrawAmount);

      const data = await withdrawFunds({ args: [projectId, _amount] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  useEffect(() => {
    const call = async () => {
      let response = await getProject(projectId!);
      setProjectDetails(response);
    };
    call();
  }, []);

  if (!projectDetails || !projectBlock.data) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <div className="w-3/5 p-8 bg-white">
          <section>
            <div className="w-1/5 h-1/5">
              <img
                className="w-full h-full object-cover"
                src={projectDetails.coverImageUrl!}
                alt="Project Image"
              />
            </div>
          </section>
          <section className="mt-8">
            <h1 className="text-3xl font-bold">{projectDetails.projectName}</h1>
            <p className="text-lg mt-4">{projectDetails.projectStory}</p>
          </section>
          <section className="mt-8">
            <div className="flex">
              <div className="mr-8">
                <h2 className="text-lg font-bold">Year</h2>
                <p>{projectDetails.year}</p>
              </div>
              <div className="mr-8">
                <h2 className="text-lg font-bold">Country</h2>
                <p>{projectDetails.country}</p>
              </div>
              <div className="mr-8">
                <h2 className="text-lg font-bold">City</h2>
                <p>{projectDetails.city}</p>
              </div>
              <div className="mr-8">
                <h2 className="text-lg font-bold">Credit Type</h2>
                <p>{projectDetails?.creditType}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">SDG Goals</h2>
                <div className="flex flex-wrap">
                  {projectDetails.sdgGoals.map((e) => (
                    <p className="border border-gray-500 rounded-lg mx-2 p-4">{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* */}
          <section>
            <div></div>
          </section>
          {/* */}
          <section>
            <div></div>
          </section>
        </div>
        <div className="w-2/5 p-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold">Balance:</h2>
            <p className="text-3xl font-bold mt-2">
              {`$MATIC ${projectBlock.data.balance}`}
            </p>

            <div className="flex justify-evenly mt-8">
              <button
                className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-2"
                onClick={() => setShowModal(true)}
              >
                {isLoading && <WidgetLoader />}
                {!isLoading && "Withdraw Balance"}
              </button>
              <button className="bg-green-500 text-white rounded-lg px-6 py-2 mt-2">
                Add Team Member
              </button>
              <button className="bg-purple-500 text-white rounded-lg px-6 py-2 mt-2">
                Create Proposal
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <WithdrawModal
          maxAmount={projectBlock.data.balance}
          onClose={setShowModal}
          onConfirmWithdraw={callWithdrawFunds}
        />
      )}
    </>
  );
};

export default ProjectDetailView;
