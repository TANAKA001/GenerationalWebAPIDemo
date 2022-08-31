import { isObject, randomString } from "../functions";

export class StatusMessage {
  id?: string;
  success?: boolean;
  type?: "info" | "success" | "warning" | "danger";
  message?: string;
  status?: string;      // server status code
  code?: number;        //
  data?: any;           // any data from a API response
  error?: any;          // error message from the API
  dismissed?: boolean;

  constructor(message: StatusMessage) {
    if (message && isObject(message)) Object.assign(this, message);
    this.id = this.id || randomString(8);
    this.dismissed = false;
  }
}
