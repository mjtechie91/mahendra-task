import React from "react";
import CatItem from "./CatItem";
import useCatApi from "../hooks/useCatApi";
import ShimmerLoader from "./Shimmer";
import Error from "../components/Error";

const CatList = () => {
  const { catItems, error, loading, message, voteCat, favoriteCat, deleteCat } =
    useCatApi();
  if (error) {
    console.log(error);
    return <Error error />;
  }
  return (
    <>
      {!loading ? (
        <>
          {message ? <div className="message-box">{message}</div> : ""}
          <div className="cat-list">
            {catItems.map((cat) => (
              <CatItem
                key={cat.id}
                item={cat}
                onVote={(value) => voteCat(cat.id, value)}
                onFavorite={(favoriteId) => favoriteCat(cat.id, favoriteId)}
                onDelete={() => deleteCat(cat.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <ShimmerLoader />
      )}
    </>
  );
};

export default CatList;
