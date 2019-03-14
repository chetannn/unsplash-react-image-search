import React from 'react';

const PhotoItem = ({ photo, onSelected, selectedPhoto }) => (
  <li
    className={
      selectedPhoto && selectedPhoto.id === photo.id
        ? 'list-group-item active'
        : 'list-group-item'
    }
    onClick={() => onSelected(photo)}
  >
    <img
      src={photo.urls.thumb}
      height="100"
      width="100"
      alt={photo.description}
    />
    <div>{photo.description}</div>
  </li>
);

export default PhotoItem;
