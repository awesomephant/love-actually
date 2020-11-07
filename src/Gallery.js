import React from "react";

function Gallery(props) {
  const gallery = props.images.map((img) => {
    return <img src={img.image} alt={img.alt} />;
  });
  return <article className="gallery">{gallery}</article>;
}
export default Gallery;
