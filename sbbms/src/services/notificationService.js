import notificationsData from '../mock/notifications.json';
import { DEMO_MODE } from '../config';

export const fetchNotifications = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_MODE ? notificationsData : []);
    }, 500);
  });
};
