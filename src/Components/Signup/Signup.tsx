import { Dispatch, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../../Repostitory/Repository";
import UserAppContext, { UserAppCtx } from "../../Context/usermtecontext";

interface SingupInput {
  address: string;
  setRegistered: Dispatch<React.SetStateAction<boolean>>;
}

const SignupDialog = ({ address, setRegistered }: SingupInput) => {
  const { register, handleSubmit, formState } = useForm();

  const { updateUserMeta } = useContext<UserAppCtx>(UserAppContext)!;

  const onSubmit = async (data: any) => {
    let response = await createUser(address, data.name);
    let user = response.data.userMeta;
    if (user.userID) {
      setRegistered(true);

      updateUserMeta({
        userId: user.userID,
        publicKey: user.publicKey,
        name: user.name,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white  p-16 rounded-2xl">
        <p className="text-2xl mb-4">Please Signup by Entering your name.</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            id="name"
            className="p-2 border border-gray-300 rounded px-16 self-center"
            {...register("name", { required: true })}
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl self-center mt-8"
            disabled={formState.isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupDialog;
