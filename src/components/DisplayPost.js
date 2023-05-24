import { useNavigate } from "react-router-dom";
import { posts } from "../utils/config";

export const DisplayPost = ({ filterType }) => {
  const navigate = useNavigate();

  const newPosts = filterType
    ? posts.filter((post) => post.type === filterType)
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
