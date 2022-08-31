// components/InputSearch/InputSearch.tsx

import React, { FC } from "react";
import "./InputSearch.style.scss";

export interface InputSearchProps {
  id?: string;
}

const defaultProps: InputSearchProps = {};

const InputSearch: FC<InputSearchProps> = (props: InputSearchProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"InputSearch"} data-testid={"InputSearch"}>
      InputSearch Works!
    </div>
  );
};

export default InputSearch;
