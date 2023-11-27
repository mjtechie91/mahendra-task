import React from "react";
import SVGIcon from "./SVGIcon";

const CatItem = ({ item, onVote, onFavorite, onDelete }) => {
  const { id, url, original_filename, vote, favourite } = item;
  const imageName = original_filename.split(".").slice(0, -1).join(".");

  return (
    <div className="item">
      <a target="_blank" href={url} rel="noreferrer">
        <img src={url} alt={imageName} />
      </a>
      <div className="description">ID: {id}</div>
      <div className="delete-item" onClick={onDelete}>
        <SVGIcon name="delete" />
      </div>
      <div className="vote-section">
        <button
          className="vote-up"
          onClick={() => onVote(vote ? vote.value + 1 : 1)}
        >
          <SVGIcon name="upvote" />
        </button>
        <span className="vote-score">{vote ? vote.value : 0}</span>
        <button
          className="vote-down"
          onClick={() => onVote(vote ? vote.value - 1 : -1)}
        >
          <SVGIcon name="downvote" />
        </button>
      </div>
      <div className="favorite-section">
        <button
          className="favorite-btn"
          onClick={() => onFavorite(favourite ? favourite.id : null)}
        >
          <SVGIcon name={favourite ? "like" : "dislike"} />
        </button>
      </div>
    </div>
  );
};

export default CatItem;
