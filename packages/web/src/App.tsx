import React from "react";
import { View } from "react-native";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginScreen from "common/dist/screens/LoginScreen";
import HomeScreen from "common/dist/screens/HomeScreen";
import RegisterFirst from "common/dist/screens/RegisterFirst";
import MobileRegisterScreen from "common/dist/screens/MobileRegisterScreen";
import VerificationScreen from "common/dist/screens/VerificationScreen";
import RegisterLastScreen from "common/dist/screens/RegisterLastScreen";
import MobileLoginScreen from "common/dist/screens/MobileLoginScreen";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/registerfirst",
      element: <RegisterFirst />,
    },
    {
      path: "/mobileregister",
      element: <MobileRegisterScreen />,
    },
    {
      path: "/verification",
      element: <VerificationScreen />,
    },
    {
      path: "/registerlast",
      element: <RegisterLastScreen />,
    },
    {
      path: "/mobile-login",
      element: <MobileLoginScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
