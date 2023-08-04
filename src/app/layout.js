"use client";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import store from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export const metadata = {
  title: "Nostra",
  description: "Online shopping service for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
