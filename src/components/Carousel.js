const Carousel = ({ images }) => {
  return (
    <div className="line hide-scrollbar">
      {images.map((imageSrc, imgIndex) => {
        return <img src={imageSrc} alt={imageSrc} key={imgIndex} />;
      })}
    </div>
  );
};

export default Carousel;
