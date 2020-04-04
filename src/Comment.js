import React from "react";

const Comment = ({ comments }) => {
  return comments.map(item => {
    return (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <h6>{item.body}</h6>
      </div>
    );
  });
};

export default Comment;
