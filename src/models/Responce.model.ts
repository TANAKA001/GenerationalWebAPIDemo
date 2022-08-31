// models/Responce.model.ts

export interface Responce {
  count?: number;
  total?: number;
  current_page?: number;
  data?: [];
  from?: number;
  lastPage_url?: string;
  last_page?: number;
  links?: [];
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  error?: boolean;
  message?: string;
}
