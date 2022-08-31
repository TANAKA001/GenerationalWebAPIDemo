import React from "react";
import { createRoot } from "react-dom/client";
import Toast, { ToastProps } from "./Toast";
import { randomString } from "../../functions";

interface ToastOptions {
  id?: string;
  type?: "warning" | "success" | "error" | "info";
  message: string;
  duration?: number;
}

export class ToasterService {
  private containerRef;
  private toasts: ToastProps[] = [];

  constructor() {
    this.createToaster();
  }

  /**
   * Creates the <div id="Toaster"> in the dom.
   */
  private createToaster = () => {
    if (!document.getElementById("Toaster")) {
      const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
      const toaster = document.createElement("div") as HTMLDivElement;
      toaster.id = "Toaster";
      body.insertAdjacentElement("beforeend", toaster);
      this.containerRef = createRoot(toaster);
    } else {
      const toaster = document.getElementById("Toaster") as HTMLDivElement;
      this.containerRef = createRoot(toaster);
    }
  };

  /**
   * Add a single toast to the toast array, then calls the render
   * function to add it to the Toaster
   * @param options
   */
  public show = (options: ToastOptions): void => {
    const toastId = randomString();
    const toast: ToastProps = {
      id: toastId,
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      destroy: () => this.destroy(options.id ?? toastId),
    };

    this.toasts = [toast, ...this.toasts];
    this.render();
  };

  /**
   * Removes a single Toast from the Toaster
   * @param id
   */
  public destroy = (id: string): void => {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  };

  /**
   * Renders a single toast to the DOM, adding it ot the Toaster.
   * @private
   */
  private render = (): void => {
    const toastsList = this.toasts.map((toastProps: ToastProps) => <Toast key={toastProps.id} {...toastProps} />);
    this.containerRef.render(toastsList, this.containerRef);
  };
}

export const toasterService = new ToasterService();
