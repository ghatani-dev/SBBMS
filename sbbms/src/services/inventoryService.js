import bloodInventoryData from '../mock/blood_inventory.json';
import { DEMO_MODE } from '../config';

export const fetchInventory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_MODE ? bloodInventoryData.inventory : {});
    }, 500);
  });
};
