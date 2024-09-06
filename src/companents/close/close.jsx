import axios from "../../api/index";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Form, Input } from "antd";
import Model from "../../pages/model/model";
import { memo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const Close = ({ show, setShow, handleCreate }) => {
  const [reload, setReload] = useState(false);
  const {} = useFetch("/blogs", { limit: 10 }, [reload]);
  const handleLogin = (values) => {
    axios
      .post("/sign-up", {
        title: values.title1,
        desc: values.desc1,
      })
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
            name="dd"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={handleCreate}
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
              name="title1"
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
              name="desc1"
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
export default memo(Close);
