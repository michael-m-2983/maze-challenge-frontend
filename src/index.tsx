import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@mantine/core/styles.css";
import {
  MantineProvider,
  createTheme,
  MantineColorsTuple
} from "@mantine/core";

import "@mantine/spotlight/styles.css";

const skyColors: MantineColorsTuple = [
  "#e0fbff",
  "#cbf2ff",
  "#9ae2ff",
  "#64d2ff",
  "#3cc5fe",
  "#23bcfe",
  "#09b8ff",
  "#00a1e4",
  "#0090cd",
  "#007cb5"
];

const theme = createTheme({
  colors: {
    skyColors
  }
});

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
