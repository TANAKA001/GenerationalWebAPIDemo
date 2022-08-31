import { User } from "../models";

export const SampleData = [
  {
    "clients": {
      "entityPId": 46842,
      "number": "87",
      "name": "Client A",
      "deleted": false,
    },
    "companies": {
      "entityPId": 46842,
      "companyName": "second company 333",
      "dbaName": "test999",
      "numberOfEmployees": null,
      "lineOfBusiness": "",
      "sales": null,
      "websiteUrl": "",
      "statedRevenue": null,
      "businessDescription": "dasdasdasdasda",
      "comments": "",
      "yearStarted": null,
      "sicCode": "11111111",
      "naics": "1111111",
      "estRevenue": null,
      "estEBIDTA": null,
      "isFranchise": false,
      "isRealEstateConsideration": false,
    },
  },
  {
    "clients": {
      "entityPId": 46825,
      "number": "85",
      "name": "Client B",
      "deleted": false,
    },
    "companies": {
      "entityPId": 46825,
      "companyName": "TEST 333",
      "dbaName": "test single dba",
      "numberOfEmployees": null,
      "lineOfBusiness": "",
      "sales": null,
      "websiteUrl": "",
      "statedRevenue": null,
      "businessDescription": "",
      "comments": "",
      "yearStarted": null,
      "sicCode": "11111111",
      "naics": "1111111",
      "estRevenue": null,
      "estEBIDTA": null,
      "isFranchise": false,
      "isRealEstateConsideration": false,
    },
  },
];

export const SampleUser: User = new User({
  email: "username@email.com",
  _emailConfirmed: true,
  terms: true,
  _joined: new Date("March 22, 1856"),
  _token: "abcedfghijklmnop",
  username: "DemoUser",
  state: "TX",
  authority: 0,
});
