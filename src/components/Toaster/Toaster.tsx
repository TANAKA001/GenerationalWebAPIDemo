// components/Toaster/Toaster.tsx

import React, { FC } from "react";
import "./Toaster.style.scss";

export interface ToasterProps {
  id?: string;
}

const defaultProps: ToasterProps = {};

const Toaster: FC<ToasterProps> = (props: ToasterProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div id={"Toaster"} className={"toaster"} data-testid={"Toaster"}>
      Toaster Works!
    </div>
  );
};

export default Toaster;
