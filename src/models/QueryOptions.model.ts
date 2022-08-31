import { isObject } from "../functions";

export enum SortOrder {
  ascending = "ASC",
  descending = "DESC",
}

export interface Filter {
  key: string;
  value: string | number | boolean;
  operator?: "and" | "or";
  exact?: boolean;
}

export class QueryOptions {
  limit?: number;
  page?: number;
  orderBy?: string | null;
  sortOrder?: null | SortOrder;
  searchTerm?: string | null;
  verbose?: boolean;
  filters?: Filter[];
  includeImages?: boolean;
  includeDeleted?: boolean;

  // CONSTRUCTOR
  // ========================================
  constructor(i: QueryOptions) {
    if (i && isObject(i)) Object.assign(this, i);
    if (this.limit && this.limit <= 0) this.limit = 1;
    if (this.page && this.page < 0) this.page = 0;
  }
}
