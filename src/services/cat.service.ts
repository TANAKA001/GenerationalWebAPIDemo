// services/cat.service.ts

import { catchError, mergeMap, Observable, of, skipWhile, takeUntil, tap, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { Logger } from "./logger.service";
import { Responce } from "../models/Responce.model";
import env from "../environments/environment";
import { Headers } from "../constants/Headers";

export interface Fact {
  fact: string;
  length: number;
}

export interface Breed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

const baseUrl = "https://catfact.ninja";

const endpoint = "/facts";

const CatService = {
  /**
   *  Gets all Cat Facts
   */
  getAll: (options?: { maxLength: number; limit: number }): Observable<Responce> => {
    const url = baseUrl + endpoint;
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

  /**
   * Returns a single random fact
   */
  getRandom: (options?: { maxLength: number }): Observable<Fact> => {
    return new Observable((observer) => {
      fetch(`${baseUrl}/fact`, { method: "GET", headers: Headers })
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((e) => {
          observer.error(e);
        });
    });
  },

  /**
   * Returns a list of cat breads
   */
  getBreeds: (options?: { limit: number }): Observable<Breed[]> => {
    return new Observable((observer) => {
      fetch(`${baseUrl}/breeds`, { method: "GET", headers: Headers })
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((e) => {
          observer.error(e);
        });
    });
  },
};

export default CatService;
