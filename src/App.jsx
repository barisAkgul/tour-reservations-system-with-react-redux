import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import "@styles/reset.css";
import "@styles/global.css";
import "@styles/variables.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
