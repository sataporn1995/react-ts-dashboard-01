import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { dataSlice } from "./slice";

type Props = {
  children: JSX.Element;
}

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

const StateProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
}

export default StateProvider;
