import { useNavigate } from "react-router-dom";
import { posts } from "../utils/config";
import { useAuth } from "../hooks/useAuth";

export const DisplayPost = ({ filterType }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const newPosts = filterType
    ? posts.filter((post) => user[filterType].includes(post.id))
    : posts;

  return (
    <div className="post-block">
      {newPosts.map((item, index) => (
        <div
          key={index}
          className="small-div"
          onClick={() => navigate(`/recipe/${item.id}`)}
        >
          <div className="image-post">
            <img src={item.image} alt={item.name} />
          </div>
          <h5>{item.name}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
