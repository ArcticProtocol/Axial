import { createContext } from "react";
interface UserMeta {
  userId: string;
  name: string;
  pubcliKey: string;
}

interface UserAppCtx {
  userMeta: UserMeta;
  updateUserMeta: (user: any) => void;
}

const UserAppContext = createContext<UserAppCtx>({
  userMeta: {
    userId: "",
    name: "",
    pubcliKey: "",
  },
  updateUserMeta: () => {},
});
export default UserAppContext;

export type { UserAppCtx };
