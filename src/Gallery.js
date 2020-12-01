import React from "react";

function Gallery(props) {
  const gallery = props.images.map((img, i) => {
    return <img key={`gallery-item-${i}`} src={img.image} alt={img.alt} />;
  });
  return <article className="gallery">{gallery}</article>;
}
export default Gallery;
