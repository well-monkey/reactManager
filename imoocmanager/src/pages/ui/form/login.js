import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";

const FormItem = Form.Item;

class FormLogin extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              {
                (getFieldDecorator("username"),
                {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })
              }
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form>
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);
