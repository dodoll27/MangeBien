import { useAuth } from "../hooks/useAuth";

export const Profile = ({ size, showUserInfo = true }) => {
  const { user } = useAuth();
  return (
    <div className={`profile-box ${size}`}>
      <div className="out">
        <div className="in">
          <div className="picture">
            <img src={user.image} alt="user" />
          </div>
        </div>
      </div>

      {showUserInfo && (
        <>
          <div className="description">
            <h1>{user.name}</h1>
          </div>

          <div className="description">
            <p>{user?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
