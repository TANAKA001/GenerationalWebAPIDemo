// components/Dialogue/Dialogue.tsx

import React, { FC } from "react";
import "./Dialogue.style.scss";
import { dialogueService } from "./Dialogue.service";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";

export interface DialogueProps {
  id?: string;
  type?: "alert" | "confirm";
  heading?: string;
  body?: string;
  agreeFn?: () => void;
  confirmFn?: () => void;
  cancelFn?: () => void;
}

const defaultProps: DialogueProps = {
  type: "alert",
};

const Dialogue: FC<DialogueProps> = (props: DialogueProps) => {
  props = { ...defaultProps, ...props };

  const dismissDialogue = () => {
    dialogueService.dismiss();
  };

  const onAgree = () => {
    props.agreeFn && props.agreeFn();
    dialogueService.agree();
  };

  const onConfirm = () => {
    props.confirmFn && props.confirmFn();
    dialogueService.confirm();
  };

  const onCancel = () => {
    props.cancelFn && props.cancelFn();
    dialogueService.cancel();
  };

  return (
    <div className={"dialogue"} data-testid={"Dialogue"}>
      <div className={"gobo"} onClick={() => dismissDialogue()}></div>
      <div className={"dialogue-window"}>
        {props.heading && <h2>{props.heading}</h2>}
        {props.body && <p className={"message"}>{props.body}</p>}
        <ButtonGroup align={"center"}>
          {props.type === "alert" && (
            <Button theme={"primary"} onClick={() => onAgree()}>
              agree
            </Button>
          )}
          {props.type === "confirm" && (
            <>
              <Button theme={"default"} onClick={() => onConfirm()}>
                confirm
              </Button>
              <Button theme={"danger"} onClick={() => onCancel()}>
                cancel
              </Button>
            </>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Dialogue;
