import { useFetch } from "../../companents/hooks/useFetch";
import Blogs from "../../companents/blogs/blogs";
import { useDispatch } from "react-redux";
import { memo, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const { data } = useFetch("/blogs", {}, []);

  return (
    <div>
      <Blogs data={data?.payload} />
    </div>
  );
};

export default memo(Home);
