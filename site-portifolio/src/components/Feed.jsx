import React, { useState } from "react";
import { Sidebar } from ".";

const Feed = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Novos");

  return (
    <div className="feed-text">
      <Sidebar
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
      />
    </div>
  );
};

export default Feed;
