import requestsData from '../mock/requests.json';
import { DEMO_MODE } from '../config';

export const fetchRequests = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_MODE ? requestsData : []);
    }, 500);
  });
};
