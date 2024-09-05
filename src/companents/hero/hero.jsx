import React, { memo } from "react";

const Hero = () => {
  return (
    <div className=" container mx-auto object-contain m-auto w-full border mt-10">
      <img
        src="https://i0.wp.com/blogpascher.com/wp-content/uploads/2023/01/utiliser-des-images-sur-votre-blog-5.png?resize=874%2C560&ssl=1"
        alt=""
      />
    </div>
  );
};

export default memo(Hero);
