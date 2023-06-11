import React, { useEffect, useState } from "react";
import {
  CarbonOffset,
  getGlobalOffsetRegistry,
} from "../Repostitory/Repository";
import RegistryListView from "../Components/Carbon/Registry";

const Registry = () => {
  const [userOffsetRegistry, setUserRegistry] = useState<CarbonOffset[] | null>(
    null
  );

  useEffect(() => {
    const call = async () => {
      let response = await getGlobalOffsetRegistry();
      setUserRegistry(response);
    };

    call();
  }, []);

  return (
    <div className= "h-screen bg-gray-50">
      {userOffsetRegistry && (
        <section>
          <div className="flex flex-col items-center mt-8 mb-8 m-6 ">
            <h1 className="text-black font-semibold text-3xl mb-10 mt-4">
              Global Offset Registry
            </h1>
            <RegistryListView data={userOffsetRegistry} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Registry;
