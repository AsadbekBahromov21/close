import { Button } from "antd";

import React, { useState } from "react";
import { Close } from "../close/close";

const Blogs = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  let items = data?.map((blog) => (
    <div key={blog._id} className="w-[200px] border p-4">
      <h3 className="text-[18px] font-[500] text-[#0009]">{blog.title}</h3>
      <p className="text-[14px] text-[#0005]">{blog.desc}</p>
    </div>
  ));
  const handleCreate = () => {
    let blog = {
      title: values,
      desc: values,
      phone: values,
    };
    axios.post("/blogs", blog);
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
