export const Profile = ({ image, name, status, size, showUserInfo = true }) => {
  return (
    <div className={`profile-box ${size}`}>
      <div className="out">
        <div className="in">
          <div className="picture">
            <img src={image} alt="photo" />
          </div>
        </div>
      </div>

      {showUserInfo && (
        <>
          <div className="description">
            <h1>{name}</h1>
            <h2>{status}</h2>
          </div>
          <div className="green-button">
            <button className="button green">Follow</button>
            <button className="button green">Message</button>
          </div>
          <div className="description">
            <p>
              "Hi my name is Teo, I am currently trying to pick-up healthier
              habits. Therefore I want to start a no sugar diet."
            </p>
          </div>
        </>
      )}
    </div>
  );
};
