import { isObject } from "../functions";

export class Client {
  entityPId?: number;
  number?: string;
  name?: string;
  deleted?: boolean;

  // CONSTRUCTOR
  // ========================================
  constructor(c: Client) {
    if (c && isObject(c)) Object.assign(this, c);
  }
}
