import { Observable, of } from "rxjs";
import { SampleData } from "../constants/SampleData";

const MockService = {
  getAll: () => {
    return of([SampleData]);
  },

  getById: (id = 0) => {
    return of([SampleData[id]]);
  },
};

export default MockService;
