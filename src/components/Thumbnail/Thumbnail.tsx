// components/Thumbnail/Thumbnail.tsx

import React, { FC } from "react";
import "./Thumbnail.style.scss";

export interface ThumbnailProps {
  image?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  height?: number;
  width?: number;
  alt?: string;
}

const defaultProps: ThumbnailProps = {
  size: "md",
};

const Thumbnail: FC<ThumbnailProps> = (props: ThumbnailProps) => {
  props = { ...defaultProps, ...props };

  const sizeOverride = {};

  if (props.width) {
    sizeOverride["width"] = props.width;
  }

  if (props.height) {
    sizeOverride["height"] = props.height;
  }

  return (
    <div className={`thumbnail ${props.size}`} style={sizeOverride} data-testid={"Thumbnail"}>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Thumbnail;
