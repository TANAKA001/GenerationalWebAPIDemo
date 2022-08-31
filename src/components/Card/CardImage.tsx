import React from "react";
import "./CardImage.style.scss";

export type CardImageProps = {
  image: string;
  size?: number;
};

const defaultProps: CardImageProps = {
  image: "/images/fpo/steve-zassou.jpg",
  size: 100,
};

const CardImage: React.FC<CardImageProps> = (props: CardImageProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`card-image`} style={{ backgroundImage: `url(${props.image})`, height: `${props.size}px` }}></div>
  );
};

export default CardImage;
