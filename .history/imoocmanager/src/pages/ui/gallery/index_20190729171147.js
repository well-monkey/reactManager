import React from "react";
import { Card, Row, Col } from "antd";
import "./../ui.less";

export default class Tab extends React.Component {
  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"]
    ];
    const imgList = imgs.map(list =>
      list.map(item => (
        <Card
          title="tab页签"
          cover={<img alt="example" src={"/gallery/" + item} />}
          className="card-wrap"
        >
          <Card.Meta title="React Admin" description="icon" />
        </Card>
      ))
    );
    return (
      <div>
        <Card title="tab页签" className="card-wrap">
          <Row>
            <Col md={5}>{imgList[0]}</Col>
            <Col md={5}>{imgList[1]}</Col>
            <Col md={5}>{imgList[2]}</Col>
            <Col md={5}>{imgList[3]}</Col>
            <Col md={5}>{imgList[4]}</Col>
            <Col md={5}>{imgList[5]}</Col>
          </Row>
        </Card>
      </div>
    );
  }
}
