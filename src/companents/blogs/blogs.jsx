import { Button } from "antd";

import React, { useEffect, useState } from "react";
import { Close } from "../close/close";
import { useFetch } from "../hooks/useFetch";
import axios from "../../api/index";

const Blogs = ({ data }) => {
  const [blogs, setBlogs] = useState(null);
  const [blog, setBlog] = useState(false);
  useEffect(() => {
    setBlogs(data);
  }, [data]);
  const [show, setShow] = useState(false);
  const handlDelete = (id) => {
    axios.delete(`/blogs/${id}`).then((res) => {
      setBlog((p) => !p);
    });
  };
  let items = blogs?.map((blog) => (
    <div key={blog._id} className="w-[200px] border p-4">
      <h3 className="text-[18px] font-[500] text-[#0009]">{blog.title}</h3>
      <p className="text-[14px] text-[#0005]">{blog.desc}</p>
      <Button onClick={() => handlDelete(blog._id)}>delete</Button>
    </div>
  ));
  const handleCreate = (values) => {
    let blog = {
      title: values.title,
      desc: values.desc,
    };
    axios
      .post("/blogs", blog)

      .then((res) => {
        setBlogs([...blogs, res.data.payload]);
      });
  };
  return (
    <div className="container mx-auto mt-8 mb-10">
      <Button onClick={() => setShow(true)} className="mb-6">
        close
      </Button>
      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {items}
      </div>
      <Close show={show} setShow={setShow} handleCreate={handleCreate} />
    </div>
  );
};

export default Blogs;
