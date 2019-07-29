import React from "react";
import {
	Card,
	Carousel
} from "antd";
import "./../ui.less";

export default class Tab extends React.Component {
	state = {
		visible: false
	};

	render() {
		return ( <
			div >
			<
			Card title = "图片背景轮播" >
			<
			Carousel autoplay effect = "fade" >
			<
			div > < h3 > ant1 < /h3></div >
			<
			div > < h3 > ant2 < /h3></div >
			<
			div > < h3 > ant3 < /h3></div >
			<
			/Carousel> < /
			Card > <
			/div >
		);
	}
}