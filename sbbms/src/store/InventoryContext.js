import React, { createContext, useState, useEffect } from 'react';
import { fetchInventory } from '../services/inventoryService';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [bloodStock, setBloodStock] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInventory = async () => {
      const data = await fetchInventory();
      setBloodStock(data);
      setLoading(false);
    };
    loadInventory();
  }, []);

  const updateStock = (bloodGroup, amount) => {
    setBloodStock((prev) => ({
      ...prev,
      [bloodGroup]: (prev[bloodGroup] || 0) + amount,
    }));
  };

  return (
    <InventoryContext.Provider value={{ bloodStock, updateStock, loading }}>
      {children}
    </InventoryContext.Provider>
  );
};
