import React from "react";
import PhotoItem from "./PhotoItem";

const PhotosList = ({ photos, onSelected, selectedPhoto }) => (
  <ul className="list-group photos">
    {photos.map((item, index) => (
      <PhotoItem
        onSelected={onSelected}
        photo={item}
        selectedPhoto={selectedPhoto}
        key={item.id}
      />
    ))}
  </ul>
);

export default PhotosList;
