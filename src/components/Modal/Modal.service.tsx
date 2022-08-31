import React from "react";
import { createRoot } from "react-dom/client";
import Modal, { ModalProps } from "./Modal";
import { randomString } from "../../functions";

export class ModalService {
  private containerRef;
  private modals: ModalProps[] = [];

  constructor() {
    this.createModal();
  }

  /**
   * Creates the <div id="Modal"> in the dom.
   */
  private createModal = () => {
    if (!document.getElementById("Modal")) {
      const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
      const anchor = document.createElement("div") as HTMLDivElement;
      anchor.id = "Modal";
      body.insertAdjacentElement("beforeend", anchor);
      this.containerRef = createRoot(anchor);
    } else {
      const anchor = document.getElementById("Modal") as HTMLDivElement;
      this.containerRef = createRoot(anchor);
    }
  };

  /**
   * Shows one modal.
   * @param options
   */
  public show = (options: ModalProps): void => {
    const modalId = randomString();
    const modal: ModalProps = {
      id: modalId,
      ...options,
      destroy: () => this.destroy(options.id ?? modalId),
    };

    this.modals = [modal]; // [modal, ...this.modals];
    this.render();
  };

  /**
   * Removes a single Modal from the #Modal
   * @param id
   */
  public destroy = (id?: string): void => {
    if (id) {
      this.modals = this.modals.filter((modal: ModalProps) => modal.id !== id);
    } else {
      this.modals = [];
    }
    this.render();
  };

  /**
   * Renders a single Modal to the DOM, adding it ot the #Modal.
   * @private
   */
  private render = (): void => {
    const modalList = this.modals.map((modalProps: ModalProps) => <Modal key={modalProps.id} {...modalProps} />);
    this.containerRef.render(modalList, this.containerRef);
  };
}

export const modalService = new ModalService();
