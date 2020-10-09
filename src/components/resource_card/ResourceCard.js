import React from "react";
import "./reviewcard.scss";
import "./resource-card.scss";

const ResourceCard = ({ colLength, post }) => {
  post = post.node;

  const category = post.categories[0].name.split(" ").join("-");

  if(!post.featured_media.localFile) {
    console.log(post.title)
  }
  
  return (
    <div className={"card " + colLength + " " + category.toLowerCase()}>
      <div className="top-img">
        <img src={post.featured_media.localFile.url} alt="feat img thumbnail" />
      </div>
      <div className="card-text">
        <a href={"/" + post.slug}>
          <h3>{post.title}</h3>
        </a>
        <div className="excerpt">
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
