"use client";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import store from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
