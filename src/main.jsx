import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Home } from "@pages";
import { Provider } from "react-redux";
import { store } from "./app/store";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
