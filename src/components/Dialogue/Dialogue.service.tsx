import React from "react";
import { createRoot } from "react-dom/client";
import Dialogue, { DialogueProps } from "./Dialogue";
import { randomString } from "../../functions";

export class DialogueService {
  private containerRef;
  private theDialogue: DialogueProps | null = null;

  constructor() {
    this.createDialogue();
  }

  /**
   * Creates the <div id="Dialogue"> in the dom.
   */
  private createDialogue = () => {
    if (!document.getElementById("Dialogue")) {
      const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
      const anchor = document.createElement("div") as HTMLDivElement;
      anchor.id = "Dialogue";
      body.insertAdjacentElement("beforeend", anchor);
      this.containerRef = createRoot(anchor);
    } else {
      const anchor = document.getElementById("Dialogue") as HTMLDivElement;
      this.containerRef = createRoot(anchor);
    }
  };

  /**
   * Show the dialogue
   */
  public show = (options: DialogueProps) => {
    const dialogueId = randomString();
    this.theDialogue = {
      id: dialogueId,
      ...options,
    };
    this.render();
  };

  /**
   * Calls the agree function then dismisses the dialogue
   */
  public agree = () => {
    // console.log("agree");

    this.dismiss();
  };

  /**
   * Calls the confirm function then dismisses the dialogue
   */
  public confirm = () => {
    // console.log("confirm");

    this.dismiss();
  };

  /**
   * Calls the cancel function then dismissed the dialogue
   */
  public cancel = () => {
    // console.log("cancel");

    this.dismiss();
  };

  /**
   * Dismisses the dialogue without calling the agree, confirm, or cancel function.
   */
  public dismiss = () => {
    // console.log("dismiss");
    this.theDialogue = null;
    this.render();
  };

  /**
   * Renders a single dialogue to the DOM, adding it to the #Dialogue
   */
  private render = () => {
    // console.log("render");
    const dialogue = this.theDialogue && <Dialogue {...this.theDialogue} />;
    this.containerRef.render(dialogue, this.containerRef);
  };
}

export const dialogueService = new DialogueService();
