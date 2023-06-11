import axios, { AxiosResponse } from "axios";

const ENDPOINT = "http://localhost:3001";

interface UserStatusResponse {
  // Define the structure of the response data
  // Modify the properties as per your API response
  userExists: boolean;
  user: any;
  // Add more properties if necessary
}

const getUserStatus = async (address: string): Promise<UserStatusResponse> => {
  try {
    const response: AxiosResponse<UserStatusResponse> =
      await axios.get<UserStatusResponse>(`${ENDPOINT}/userStatus`, {
        params: {
          address: address,
        },
      });

    console.log(response.data);

    // Return the response data or perform further operations
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
    throw error;
  }
};

interface CreateUserResponse {
  $id: string;
  name: string;
  status: boolean;
  userMeta: any;
}

interface CreateUserRequest {
  address: string;
  name: string;
}

async function createUser(
  address: string,
  name: string
): Promise<AxiosResponse<CreateUserResponse>> {
  const data: CreateUserRequest = {
    address,
    name,
  };

  try {
    const response = await axios.post<CreateUserResponse>(
      `${ENDPOINT}/createUser`,
      data
    );
    return response;
  } catch (error) {
    // Handle error
    throw new Error("Failed to create user");
  }
}

async function uploadFile(file: File): Promise<AxiosResponse<any>> {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    throw new Error("File upload failed");
  }
}

type CarbonOffsetRequest = {
  userName: string;
  offsetAmount: number;
  creditType: string;
  txHash: string;
  owner: string;
};

type CarbonOffsetResponse = {
  userName: string;
  offsetAmount: number;
  creditType: string;
  txHash: string;
  owner: string;
  timestamp: string;
  month?: string;
};

const registerOffser = async (
  offsetDetails: CarbonOffsetRequest
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${ENDPOINT}/registerOffset`,
      offsetDetails
    );
    console.log("Carbon offset details sent successfully:", response.data);
    if (response.data.$id) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Failed to create offset ");
  }
};

export { getUserStatus, createUser, uploadFile, registerOffser };
