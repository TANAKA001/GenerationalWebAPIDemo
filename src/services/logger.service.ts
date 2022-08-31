// services/logger.service.ts

import { Observable, of } from "rxjs";
import env from "../environments/environment";

export const Logger = {
  log(msg: string): Observable<boolean> {
    if (env.debug && !env.production) {
      console.log(new Date() + ": " + JSON.stringify(msg));
    }
    return of(true);
  },

  warn(msg: string): Observable<boolean> {
    if (env.debug || !env.production) {
      console.warn(msg);
    }
    return of(true);
  },

  error(msg: string): Observable<boolean> {
    if (env.debug || !env.production) {
      console.error(msg);
    }
    return of(true);
  },

  clear(): Observable<boolean> {
    console.clear();
    return of(true);
  },

  logToLocalStorage() {
    // TODO: create a Local Storage Log
  },

  logToAPI() {
    // TODO: create a Server Log
  },
};
