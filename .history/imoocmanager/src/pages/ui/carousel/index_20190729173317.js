import React from "react";
import {
    Card,
    Row,
    Col,
    Modal
} from "antd";
import "./../ui.less";

export default class Tab extends React.Component {
    state = {
        visible: false
    };
    openGallery = imgSrc => {
        this.setState({
            visible: true,
            currentImg: "/gallery/" + imgSrc
        });
    };
    render() {
        const imgs = [
            ["1.png", "2.png", "3.png", "4.png", "5.png"],
            ["6.png", "7.png", "8.png", "9.png", "10.png"],
            ["11.png", "12.png", "13.png", "14.png", "15.png"],
            ["16.png", "17.png", "18.png", "19.png", "20.png"],
            ["21.png", "22.png", "23.png", "24.png", "25.png"]
        ];

        const imgList = imgs.map(list =>
            list.map((item, ind) => ( <
                Card key = {
                    ind
                }
                style = {
                    {
                        marginBottom: 10
                    }
                }
                title = "tab页签"
                cover = {
                    <
                    img
                    alt = "example"
                    src = {
                        "/gallery/" + item
                    }
                    onClick = {
                        () => {
                            this.openGallery(item);
                        }
                    }
                    />
                }
                className = "card-wrap" >
                <
                Card.Meta title = "React Admin"
                description = "i love react" / >
                <
                /Card>
            ))
        );
        return ( <
            div >

            <
            /div >
        );
    }
}