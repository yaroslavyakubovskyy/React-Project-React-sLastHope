import axios from "axios";

export const instance = axios.create({
  baseURL: "https://expense-tracker.b.goit.study/api",
  headers: {
    "Content-Type": "application/json",
  },
});
