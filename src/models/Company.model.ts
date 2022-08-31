import { isObject } from "../functions";

export class Company {
  entityPId?: number;
  companyName?: string;
  dbaName?: string;
  numberOfEmployees?: number | null;
  lineOfBusiness?: string;
  sales?: number | null;
  websiteUrl?: string;
  statedRevenue?: number | null;
  businessDescription?: string;
  comments?: string;
  yearStarted?: number | null;
  sicCode?: number;
  naics?: number;
  estRevenue?: number | null;
  estEBIDTA?: number | null;
  isFranchise?: boolean;
  isRealEstateConsideration?: boolean;

  // CONSTRUCTOR
  // ========================================
  constructor(c: Company) {
    if (c && isObject(c)) Object.assign(this, c);
  }
}
