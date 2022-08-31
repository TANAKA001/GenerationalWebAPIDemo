import { Resource } from "./Resource.model";

export class Image extends Resource {
  fileName?: string;
  path?: string;
  url?: string;
  encoding?: string;
  mimeType?: string;

  title?: string;
  alt?: string;
  description?: string;
  size?: string;
  dimensions?: {
    height?: number;
    width?: number;
  };

  _linked?: boolean;
}
