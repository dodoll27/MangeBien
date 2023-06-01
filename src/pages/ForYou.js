import { Profile } from "../components/Profile";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { DisplayFeed } from "../components/DisplayFeed";

export const ForYou = ({ image, name, status, size, showUserInfo = true }) => {
  const navigate = useNavigate();

  return (
    <div>
      <aside className="foryou-profile">
        <Profile />
      </aside>
      <main className="foryou-main">
        <DisplayFeed />
      </main>
    </div>
  );
};
