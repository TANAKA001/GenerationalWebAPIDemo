// components/ProfilePicture/ProfilePicture.tsx

import React, { FC } from "react";
import "./ProfilePicture.style.scss";
import Icon from "../Icon";

export interface ProfilePictureProps {
  size?: "thumb" | "sm" | "md" | "lg" | "xl";
  image?: string;
}

const defaultProps: ProfilePictureProps = {
  size: "md",
};

const ProfilePicture: FC<ProfilePictureProps> = (props: ProfilePictureProps) => {
  props = { ...defaultProps, ...props };

  const profileStyle = props.image ? { backgroundImage: `url(${props.image})` } : {};

  return (
    <div className={`profile-picture ${props.size}`} data-testid={"ProfilePicture"} style={profileStyle}>
      <div className={"inner-circle"}>{!props.image && <Icon icon={"user"} theme={"default"} size={"lg"} />}</div>
    </div>
  );
};

export default ProfilePicture;
