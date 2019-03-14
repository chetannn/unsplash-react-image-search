import React from 'react';

const PhotoDetail = ({ photo }) => (
  <React.Fragment>
    {photo ? (
      <div>
        <h2>Photo Detail</h2>
        <div className="card">
          <img
            className="card-img-top"
            height="600"
            width="100"
            alt={photo.description}
            src={photo.urls.small}
          />
          <div className="card-body">
            <p className="card-text">{photo.description}</p>
          </div>
        </div>
      </div>
    ) : null}
  </React.Fragment>
);

export default PhotoDetail;
