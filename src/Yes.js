import React from "react";

export default class Yes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "변경 전",
        };
    }

    render() {
        return( 
        <div>
            <h1>{this.state.text}</h1>
            <button onClick={this.changeText}>텍스트변경버튼</button>
        </div>
        );
    }

    changeText = () => {

        if(this.state.text == "변경 전") {
        this.setState({
            text: "변경 후",            
        });
        }

        if(this.state.text == "변경 후") {
            this.setState({
                text: "변경 전",
            });
        }

    };


}