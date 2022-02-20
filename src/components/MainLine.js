import Carousel from "./Carousel";

const MainLine = ({ mainCategory }) => {
  return (
    <div>
      <h2>{mainCategory.category}</h2>
      <Carousel images={mainCategory.images} />
    </div>
  );
};

export default MainLine;
