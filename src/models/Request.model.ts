// models/Request.model.ts

import env from "../environments/environment";

export interface Request {
  url: string;
  method?: typeof env.api.allowedMethods;
  headers: Headers | string[][] | Record<string, string> | undefined;
  body?:
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;
}
