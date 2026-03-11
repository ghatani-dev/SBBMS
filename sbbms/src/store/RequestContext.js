import React, { createContext, useState, useEffect } from 'react';
import { fetchRequests } from '../services/requestService';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [globalNotifications, setGlobalNotifications] = useState([]);

  useEffect(() => {
    const loadRequests = async () => {
      const data = await fetchRequests();
      setRequests(data);
    };
    loadRequests();
  }, []);

  const createRequest = (newRequest) => {
    const requestItem = { ...newRequest, id: Date.now().toString(), status: 'Pending' };
    setRequests((prev) => [requestItem, ...prev]);

    // Demo Simulation Feature: Emergency Alert Simulation
    if (newRequest.isEmergency) {
      setTimeout(() => {
        setGlobalNotifications((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            message: `URGENT: ${newRequest.bloodGroup} needed at ${newRequest.hospital}`,
            type: 'error'
          }
        ]);
        
        // Auto remove for demo purposes
        setTimeout(() => {
            setGlobalNotifications((prev) => prev.slice(1));
        }, 15000);

      }, 5000); // 5 seconds latency mapped out in Demo Simulation
    }
  };

  const updateRequestStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <RequestContext.Provider value={{ requests, createRequest, updateRequestStatus, globalNotifications }}>
      {children}
    </RequestContext.Provider>
  );
};
