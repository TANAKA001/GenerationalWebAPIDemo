// services/cat.service.ts

import { catchError, mergeMap, Observable, of, skipWhile, takeUntil, tap, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { Logger } from "./logger.service";
import { Responce } from "../models/Responce.model";
import env from "../environments/environment";
import { Headers } from "../constants/Headers";
import { number } from "prop-types";

//CS text...
const endpoint = "/clients";

const ClientService = {
  /**
   *  Gets all Clients
   */
  getAll: (options?: { maxLength: number; limit: number}): Observable<Responce> => {
    
    const url = env.api.url + endpoint + "?limit=10";
    return fromFetch(url, {
      method: "GET",
      headers: Headers,
    }).pipe(
      skipWhile((res) => !res),
      mergeMap((res) => res.json()),
      tap(
        (res) =>
          env.api.log && Logger.log(`Fetched all ${endpoint}.  Count: ${res.data.length}, Total count: ${res.total}`),
      ),
      takeUntil(timer(env.api.timeout)),
      catchError((err) => {
        Logger.error(err);
        return of({ error: true, message: err.message });
      }),
    );
  },
};

export default ClientService;
