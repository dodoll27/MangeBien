import { Profile } from "../components/Profile";

export const ForYou = ({ image, name, status, size, showUserInfo = true }) => {
  return (
    <div>
      <div className="foryou-profile">
        <Profile />
      </div>
    </div>
  );
};
