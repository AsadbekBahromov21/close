import Model from "../../pages/model/model";
import { Button, Form, Input, message } from "antd";
import axios from "../../api/index";
import { AiOutlineClose } from "react-icons/ai";
const Regester = ({ show, setShow }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = (values) => {
    axios
      .post("/sign-up", values)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((res) => {
        messageApi.error(res.response.data.msg);
        console.log(res.response.data.msg);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {contextHolder}
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
              Register
            </h2>
            <Button
              onClick={() => setShow(false)}
              className="border-none absolute top-0 right-0 "
            >
              <AiOutlineClose />
            </Button>
            <Form.Item
              label="First name"
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
            <Form.Item label="Last name" name="lname">
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
            <Form.Item
              label="Username"
              name="username"
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
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
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

export default Regester;
