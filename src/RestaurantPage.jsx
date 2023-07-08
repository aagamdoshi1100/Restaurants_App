import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { restaurantsData } from "./Data";

import useFoodAppContext from "./FoodAppContext";
import { useEffect } from "react";
export default function RestaurantPage() {
  const { resId } = useParams();
  const { navigate, addReview, cuisine, setCuisine } = useFoodAppContext();
  const filteredRes = restaurantsData.filter(({ name }) => name === resId);

  const Add = () => {
    setCuisine({
      ...cuisine,
      reviewFlag: !cuisine.reviewFlag,
      excomments: [
        ...cuisine.excomments,
        {
          rating: cuisine.ratSelected,
          comment: cuisine.commentgiven,
          revName: cuisine.revName
        }
      ]
    });
  };

  useEffect(() => {
    setCuisine({ ...cuisine, excomments: filteredRes[0].ratings });
  }, []);

  return (
    <div className="main">
      <div className="container-res">
        <BiArrowBack size="2em" onClick={() => navigate("/")} />
        <h3>{resId}</h3>

        <div className="qq">
          {filteredRes[0].menu.map((item) => (
            <p>{item.name},</p>
          ))}
        </div>
        <p>{filteredRes[0].address}</p>

        <button
          className="cuisine-button"
          onClick={() => addReview(cuisine.reviewFlag)}
        >
          Add Review
        </button>
      </div>
      <div className="container-review">
        {cuisine.reviewFlag ? (
          <div className="review-box">
            <p>Name</p>
            <input
              type="text"
              onChange={(e) =>
                setCuisine({ ...cuisine, revName: e.target.value })
              }
            />
            <p>Rating</p>
            <select
              onChange={(e) =>
                setCuisine({ ...cuisine, ratSelected: e.target.value })
              }
              className="custom-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p>comment</p>
            <input
              type="text"
              onChange={(e) =>
                setCuisine({ ...cuisine, commentgiven: e.target.value })
              }
            />
            <button onClick={Add}>Add</button>
          </div>
        ) : null}
      </div>

      <div className="comments">
        {cuisine?.excomments?.map((ratingComment) => {
          const { pp, comment, rating, revName } = ratingComment;
          return (
            <div key={comment}>
              <h3>{revName}</h3>
              <h5>Rating:{rating} star</h5>
              <p>{comment}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
