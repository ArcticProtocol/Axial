import axios, { AxiosResponse } from "axios";
import { formatTimestamp, formatTimestampMonth } from "../util";
import { v4 as uuidv4 } from "uuid";

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

const registerOffset = async (
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

type CarbonOffset = {
  userName: string;
  offsetAmount: number;
  creditType: string;
  txHash: string;
  owner: string;
  timestamp: string;
  month?: string;
};

const gertUserOffsets = async (address: string): Promise<CarbonOffset[]> => {
  try {
    const response = await axios.get(`${ENDPOINT}/userOffsets`, {
      params: {
        address,
      },
    });

    const offsets: CarbonOffset[] = [];
    response.data.forEach((e: CarbonOffset) => {
      let m = formatTimestampMonth(e.timestamp);
      let t = formatTimestamp(e.timestamp);
      e.month = m;
      e.timestamp = t;
      offsets.push(e);
    });

    return offsets;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to get registry ");
  }
};

const getGlobalOffsetRegistry = async (): Promise<CarbonOffset[]> => {
  try {
    const response = await axios.get(`${ENDPOINT}/registry`, {});

    const offsets: CarbonOffset[] = [];
    response.data.forEach((e: CarbonOffset) => {
      let m = formatTimestampMonth(e.timestamp);
      let t = formatTimestamp(e.timestamp);
      e.month = m;
      e.timestamp = t;
      offsets.push(e);
    });

    return offsets;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to get registry ");
  }
};

type Project = {
  projectId: string;
  projectName: string;
  teamMembers: string;
  impactGoal: string;
  country: string;
  creditType: string;
  year: string;
  coverImageUrl?: string;
  sdgGoals: string[];
  city: string;
  owner: string;
  projectStory: string;
};

type ProjectRequest = {
  projectId: string;
  projectName: string;
  teamMembers: string[];
  impactGoal: string;
  country: string;
  creditType: string;
  year: string;
  coverImageUrl?: string;
  sdgGoals: string[];
  city: string;
  owner: string;
  projectStory: string;
};

const registerProject = async (
  projectRequest: ProjectRequest
): Promise<boolean> => {
  try {
    const response = await axios.post(`${ENDPOINT}/createProject`, {
      ...projectRequest,
    });

    if (response.data.$id) {
      return true;
    }
    return false;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to register project ");
  }
};

const getUserProjects = async (address: string): Promise<Project[]> => {
  try {
    console.log({ address });
    const response = await axios.get(`${ENDPOINT}/userProjects`, {
      params: {
        address: address,
      },
    });

    const userProjects: Project[] = [];
    response.data.forEach((e: Project) => {
      userProjects.push(e);
    });

    return userProjects;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to get user projects ");
  }
};

const getProject = async (projectId: string): Promise<Project> => {
  try {
    console.log({ projectId });
    const response = await axios.get(`${ENDPOINT}/projectDetails`, {
      params: {
        projectId,
      },
    });

    const project: Project = response.data;
    console.log({project})

    return project;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to get user projects ");
  }
};

const getGlobalProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${ENDPOINT}/projects`, {});

    const userProjects: Project[] = [];
    response.data.forEach((e: Project) => {
      userProjects.push(e);
    });

    return userProjects;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to get projects ");
  }
};

export {
  getUserStatus,
  createUser,
  uploadFile,
  registerOffset,
  gertUserOffsets,
  getGlobalOffsetRegistry,
  getUserProjects,
  getGlobalProjects,
  registerProject,
  getProject,
};

export type { CarbonOffset, Project };
