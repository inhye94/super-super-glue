import React from "react";
import { UserInfoType } from "../../model/auth";
import { PROFILE_DEFAULT_IMAGE } from "../../shared/utils/constants/profile";

const Profile: React.FC<UserInfoType> = ({ userInfo }) => {
  return (
    <img
      src={userInfo?.photoURL || PROFILE_DEFAULT_IMAGE}
      alt={`${userInfo?.displayName}님의 프로필`}
      className="object-cover"
    />
  );
};

export default Profile;
