import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import NarrativeHome from "../pages/NarrativeHome";
import CategoryPage from "../pages/CategoryPage";
import OfferingPage from "../pages/OfferingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/:narrativeId",
    Component: NarrativeHome,
  },
  {
    path: "/:narrativeId/:categoryId",
    Component: CategoryPage,
  },
  {
    path: "/:narrativeId/:categoryId/:offeringId",
    Component: OfferingPage,
  },
]);
