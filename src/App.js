import React from "react";
import "./App.css";
import faker from "faker";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui-container-comments">
      <ApprovalCard>
        <Comment
          author="Ness"
          timeAgo="Today at 4pm"
          content="Bro, you got this"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Lucas"
          timeAgo="A few seconds ago"
          content="Much love"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Samus"
          timeAgo="Yesterday"
          content="More praise"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
