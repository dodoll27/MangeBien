import { useState } from "react";
import { Profile } from "../components/Profile";
import { DisplayPost } from "../components/DisplayPost";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [filterType, setFilterType] = useState(null);

  const navigate = useNavigate();
  return (
    <div className="container">
      <aside>
        <Profile />
        {/* <div className="green-button">
          <button className="button green">Follow</button>
          <button className="button green">Message</button>
        </div> */}
        <button className="back" onClick={() => navigate("/foryou")}>
          &#x21e6; ForYou
        </button>
        {/* <button className="back" onClick={() => navigate("/protected")}>
          &#x21e6; Auth
        </button> */}
      </aside>
      <main className="profile-main">
        <Navbar onUserClick={(type) => setFilterType(type)} />
        <DisplayPost filterType={filterType} />
      </main>
    </div>
  );
}

export default HomePage;
