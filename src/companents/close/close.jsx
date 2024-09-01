import React from "react";
import axios from "../../api/index";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Form, Input } from "antd";
import Model from "../../pages/model/model";
import { useState } from "react";
export const Close = ({ show, setShow }) => {
  const handleLogin = (values) => {
    axios
      .post("/sign-up", values)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {show && (
        <Model close={() => setShow(false)}>
          <Form
            className=""
            name="register"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={handleLogin}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2 className="text-[20px] font-[600] text-zinc-700 text-center">
              Ma'lumot qo'shish!
            </h2>
            <Button
              onClick={() => setShow(false)}
              className="border-none absolute top-0 right-0 "
            >
              <AiOutlineClose />
            </Button>
            <Form.Item
              label="Title"
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Ism kiriting!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Desc"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Ism kiriting!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Ism kiriting!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Sin up
              </Button>
            </Form.Item>
          </Form>
        </Model>
      )}
    </div>
  );
};
