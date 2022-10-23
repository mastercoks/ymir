import { createHashRouter } from "react-router-dom";

import { Main, Player } from "../pages";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/player",
    element: <Player />,
  },
]);
