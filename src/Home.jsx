import useFoodAppContext from "./FoodAppContext";

export default function Home() {
  const {
    selectedCouisine,
    cuisine,
    getDetailsOfRestaurant
  } = useFoodAppContext();

  return (
    <div>
      <h1>Food Ordering App</h1>
      <h4>Select your cuisine:</h4>
      <div className="buttons-container">
        <button onClick={() => selectedCouisine(1)} className="cuisine-button">
          Italian
        </button>
        <button onClick={() => selectedCouisine(2)} className="cuisine-button">
          Mexican
        </button>
        <button onClick={() => selectedCouisine(3)} className="cuisine-button">
          Chinese
        </button>
        <button onClick={() => selectedCouisine(4)} className="cuisine-button">
          Indian
        </button>
      </div>

      <div>
        {cuisine?.res?.map((item, index) => {
          return (
            <div className="card-container" key={index}>
              <h3>Dishes by {item?.name}</h3>
              {item?.menu?.map((pro) => {
                const { name, imgSrc, price, qty } = pro;
                return (
                  <div
                    className="card"
                    key={name}
                    onClick={() => getDetailsOfRestaurant(`${item?.name}`)}
                  >
                    <img src={imgSrc} alt={name} />
                    <div className="card-info">
                      <h3>{name}</h3>
                      <p>
                        Rs. {price} for {qty}
                      </p>
                      <p>{item?.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
