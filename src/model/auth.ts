import { User } from "firebase/auth";

export interface AuthType extends User {
  isAdmin: boolean;
}

export interface UserInfoType {
  userInfo: AuthType | null;
}
