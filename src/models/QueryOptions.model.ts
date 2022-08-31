import { isObject } from "../functions";

export enum SortOrder {
  ascending = "ASC",
  descending = "DESC",
}

export class QueryOptions {
  limit?: number;
  page?: number;
  orderBy?: string | null;
  sortOrder?: null | SortOrder;
  searchTerm?: string | null;
  verbose?: boolean;
  filters?: any[];
  includeImages?: boolean;
  includeDeleted?: boolean;

  // CONSTRUCTOR
  // ========================================
  constructor(i: QueryOptions) {
    if (i && isObject(i)) Object.assign(this, i);
    if (this.limit && this.limit <= 0) this.limit = 1;
  }
}
