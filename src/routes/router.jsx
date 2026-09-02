import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-center text-red-500 font-bold mt-5 text-6xl">Hello World</div>,
  },
]);