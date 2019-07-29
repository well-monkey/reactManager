import React from "react";
import { Card, Carousel } from "antd";
import "./../ui.less";

export default class Tab extends React.Component {
  state = {
    visible: false
  };

  render() {
    return (
      <div>
        <Card title="文字背景轮播">
          <Carousel autoplay effect="fade">
            <div>
              <h3> ant1 </h3>
            </div>
            <div>
              <h3> ant2 </h3>
            </div>
            <div>
              <h3> ant3 </h3>
            </div>
          </Carousel>
        </Card>
        <Card title="图片背景轮播">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>
            <div>
              {" "}
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>{" "}
          </Carousel>{" "}
        </Card>{" "}
      </div>
    );
  }
}
