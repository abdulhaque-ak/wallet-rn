import React from "react";
import Route from "./Route";
import FlashMessage from "react-native-flash-message";
import { Provider } from "./src/context/ItemProvider";

export default function App() {
  return (
    <>
      <Provider>
        <Route />
        <FlashMessage position="top" />
      </Provider>
    </>
  )
}