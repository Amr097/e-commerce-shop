"use client";
import "./styles/globals.scss";
// import { Provider } from "react-redux";
// import store from "../../store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";
//let persistor = persistStore(store);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <SessionProvider>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
