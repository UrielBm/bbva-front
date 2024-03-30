import { Navigate, createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import GeneralWrapperChat from "../components/Chat/GeneralWrapperChat";

export const menuRoutes = [
  {
    to: "",
    title: "Asistente IA",
    description: "Asistente BBVA",
    component: <GeneralWrapperChat />,
  },
  {
    to: "/acerca-de",
    title: "Acerca de:",
    description: "Acerca del proyecto.",
    component: <AboutUs />,
  },
];
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
