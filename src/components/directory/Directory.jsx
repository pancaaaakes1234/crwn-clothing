import React from "react";
import "./Directory.styles.scss";
import DirectoryItem from "../directory-item/DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
