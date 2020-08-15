import React from "react";

const Comment = props => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
          {/* ^^^ this is using the faker npm to generate a fake avatar image for my app */}
          {/* referred to heirarchy on the github to see that avatar falls under image - image.avater */}
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
        </div>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">"{props.content}"</div>
      </div>
    </div>
  );
};

export default Comment;
