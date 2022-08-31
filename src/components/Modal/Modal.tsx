// components/Modal/Modal.tsx

import React, { FC } from "react";
import "./Modal.style.scss";
import Close from "../Close";
import { modalService } from "./Modal.service";

export interface ModalProps {
  id?: string;
  modalHeading?: string;
  modalBody?: React.ReactNode;
  modalFooter?: React.ReactNode;
  destroy?;
}

const defaultProps: ModalProps = {};

const Modal: FC<ModalProps> = (props: ModalProps) => {
  props = { ...defaultProps, ...props };

  const closeModal = () => {
    props.id && modalService.destroy(props.id);
  };

  return (
    <div className={"modal"} data-testid={"Modal"}>
      <div className={"gobo"} onClick={() => closeModal()}></div>
      <div id={props.id} className={"modal-dialogue"}>
        <div className={"modal-header"}>
          <div className={"title"}>{props.modalHeading}</div>
          <Close onClick={() => closeModal()} />
        </div>

        <div className={"modal-body"}>{props.modalBody}</div>

        {props.modalFooter && <div className={"modal-gutter"}>{props.modalFooter}</div>}
      </div>
    </div>
  );
};

export default Modal;
