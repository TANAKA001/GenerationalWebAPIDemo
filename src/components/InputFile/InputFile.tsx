// components/InputFile/InputFile.tsx

import React, { FC } from "react";
import "./InputFile.style.scss";
import ProgressBar from "../ProgressBar";
import { randomString } from "../../functions";
import environment from "../../environments/environment";
import InputWrapper from "../InputWrapper";

type MIMETypes = "image" | "text" | "audio" | "video" | "application" | "font" | "model";

export interface InputFileProps {
  id?: string;
  label?: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  multipleUpload?: boolean;
  allowedMIME?: MIMETypes[];
  maxUploadSize?: number;
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<InputFileProps["value"]>>;
}

const defaultProps: InputFileProps = {
  id: randomString(),
  multipleUpload: false,
  allowedMIME: ["image"],
  maxUploadSize: environment.files.maxUploadSize,
  value: "",
  onValueChange: (v) => v,
};

const InputFile: FC<InputFileProps> = (props: InputFileProps) => {
  props = { ...defaultProps, ...props };

  const files: File[] = [];
  const progress = 0;
  const uploading = false;

  const handleChange = (e) => {
    const value = e.target.value;
    props.onValueChange(value);
  };

  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      srOnlyLabel={props.srOnlyLabel}
      required={props.required}
      moreInfo={props.moreInfo}
      footnote={props.footnote}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
    >
      <div className={`input-file ${props.invalid ? "is-invalid" : ""}`} data-testid={"InputFile"}>
        <img className={"image-preview"} src={``} width='90' />

        {!!files.length &&
          files.map((file, index) => (
            <div key={index}>
              <ProgressBar progress={progress} showPercent={true} label={file.name} />
            </div>
          ))}

        <div className={`file-dropzone ${uploading ? "uploading" : ""}`}>
          <input
            id={props.id}
            type='file'
            multiple={props.multipleUpload}
            disabled={uploading}
            onChange={handleChange}
          />
          <label htmlFor={props.id}>
            Drag and drop files here or <span className='color-blue'>select file</span>.
          </label>
        </div>
      </div>
    </InputWrapper>
  );
};

export default InputFile;
