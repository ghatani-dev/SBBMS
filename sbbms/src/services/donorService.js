import donorsData from '../mock/donors.json';
import { DEMO_MODE } from '../config';

export const fetchDonors = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_MODE ? donorsData : []);
    }, 500);
  });
};
