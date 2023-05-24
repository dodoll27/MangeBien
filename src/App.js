import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtectedPage";
import RecipePage from "./pages/RecipePage";
import { ForYou } from "./components/ForYou";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}
