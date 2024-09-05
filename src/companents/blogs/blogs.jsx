import { Button } from "antd";

import React, { memo, useEffect, useState } from "react";
import { Close } from "../close/close";
import axios from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const Blogs = ({ data }) => {
  const [blogs, setBlogs] = useState(null);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  // console.log(profile);
  useEffect(() => {
    axios.get("/admin/profile").then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.payload });
    });
  }, []);
  useEffect(() => {
    setBlogs(data);
  }, [data, reload]);

  console.log(data);

  const [show, setShow] = useState(false);
  const handlDelete = (id) => {
    setReload((p) => !p);
    axios.delete(`/blogs/${id}`).then((res) => {
      axios.get("/blogs").then((res) => {
        setBlogs(res.data.payload);
      });
    });
  };
  let items = blogs?.map((blog) => (
    <div key={blog._id} className="w-[200px] bg-[#0009] border p-4 relative">
      <h3 className="text-[18px] font-[500] text-[#fff] mt-[8px]">
        {blog.title}
      </h3>
      <p className="text-[14px] mb-3  text-[#ddd]">{blog.desc}</p>
      <p className=" text-[13px] py-[4px] px-3 bg-[#0004] text-[#fff] flex justify-center items-center mb-2 ">
        {blog.userId.fname}
      </p>
      {profile?._id === blog.userId._id && (
        <Button
          className="text-[12px]"
          type="primary"
          onClick={() => handlDelete(blog._id)}
        >
          delete
        </Button>
      )}
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
        axios.get("/blogs").then((res) => {
          setBlogs(res.data.payload);
        });
        setShow(false);
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

export default memo(Blogs);
