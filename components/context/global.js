import { createContext, useContext } from "react";

const ColumnContext = createContext();

export const ColumnProvider = ColumnContext.Provider;

export const useColumns = () => useContext(ColumnContext);
