import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store, persistor} from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ProductProvider } from "./context/ProductContext";
import   { Toaster } from "react-hot-toast";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProductProvider>
          <App />
          <Toaster  position='bottom-center' duration={500}/>
        </ProductProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
