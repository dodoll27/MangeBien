import { Profile } from "./Profile";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../utils/config";
import { useEffect, useState } from "react";

export const Recipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();

  useEffect(() => {
    const post = posts.find((item) => item.id == id);
    setCurrentPost(post);
  }, [id]);

  return (
    <div>
      {currentPost && (
        <>
          <div
            className="cover"
            style={{ backgroundImage: `url(${currentPost.image_full})` }}
          ></div>

          <div className="recipe-profile">
            <Profile
              image="/images/profiles/ruxy.jpeg"
              size="profile-small"
              showUserInfo={false}
            />
            <div className="recipe-title">
              <h1>{currentPost.name}</h1>
            </div>
          </div>

          <main className="recipe-main">
            <div className="ingredients">
              <ul>
                <h2 className="recipe-ingredients">Ingredients</h2>
                {currentPost.ingredients.map((item, i) => (
                  <li key={i}>
                    <input type="checkbox" />
                    <label>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="recipe">
              <h2 className="steps">Steps</h2>
              {currentPost.steps.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <div className="nutrition">
              <div>
                <h3> kCal</h3> <span>{currentPost.nutrition.kcal}</span>
              </div>
              <div>
                <h3> Fat</h3> <span>{currentPost.nutrition.fat}</span>
              </div>
              <div>
                <h3> Carbs</h3> <span>{currentPost.nutrition.carbs}</span>
              </div>
              <div>
                <h3> Sugars</h3> <span>{currentPost.nutrition.sugars}</span>
              </div>
              <div>
                <h3> Fibre</h3> <span>{currentPost.nutrition.fibre}</span>
              </div>
              <div>
                <h3> Protein</h3> <span>{currentPost.nutrition.protein}</span>
              </div>
              <div>
                <h3> Salt</h3> <span>{currentPost.nutrition.salt}</span>
              </div>
            </div>
          </main>

          <div className="recipe-actions">
            <div className="action-button">
              <button className="like">&#x2661;</button>
              <br />
            </div>
            <div className="action-button">
              <button className="saved">&#x2714;</button>
              <br />
            </div>
            <div className="action-button">
              <button className="comment">&#xf075;</button>
              <br />
            </div>
          </div>

          <button className="back" onClick={() => navigate("/")}>
            &#x21e6; BACK
          </button>
        </>
      )}
    </div>
  );
};
