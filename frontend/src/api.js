// src/api.js
import axios from "axios";

const BASE_URL = "https://indore-metro.onrender.com/api";

// 1. Getting Stations
export const getStations = async () => {
  const response = await fetch(`${BASE_URL}/stations`); // <-- ADD /stations HERE
  return response.json();
};

// 2. Creating a Station
export const createStation = async (name) => {
  const response = await fetch(`${BASE_URL}/stations`, { // <-- ADD /stations HERE
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

// 3. Connecting Stations
export const connectStations = async (data) => {
  const response = await fetch(`${BASE_URL}/stations/connect`, { // <-- CHECK THIS PATH matches your backend
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

// 4. Getting Shortest Path
export const getShortestPath = async (startId, endId) => {
  const response = await fetch(`${BASE_URL}/shortest-path`, { // <-- ADD /shortest-path HERE
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ startNode: startId, endNode: endId }),
  });
  return response.json();
};