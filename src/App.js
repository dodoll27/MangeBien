import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import { ForYou } from "./pages/ForYou";
import { Register } from "./pages/Register";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}
