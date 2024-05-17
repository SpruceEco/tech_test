import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/index";
import { Main } from "./main";

const root = createRoot(document.getElementById("root")!);
root.render(<Main />);
