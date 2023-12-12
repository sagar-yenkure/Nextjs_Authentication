import { configureStore } from "@reduxjs/toolkit";
import root from "./Rcombiner";

export const store = configureStore({
    reducer:root
  })
  // export type AppStore = ReturnType<typeof store>
