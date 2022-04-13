import React from "react";

export default class StopWatch extends React.Component {

   
    constructor(props) {
        super(props);

        this.state = {
            text: "시작",
        };

        this.time = 0;
        var startedTime = 0;
    }


    
    render() {
        return( 
        <div>
            <div>{this.time}</div>
            <button onClick={this.btn1}>{this.state.text}</button>
        </div>
        );
    }

    
    
    btn1 = () => {

        if(this.state.text == "시작") {
        this.setState({
            text: "리셋",            
        });
        //        this.startedTime = Date.now();
    
        }

        if(this.state.text == "리셋") {
            this.setState({
                text: "시작",
            });




        }

    };


    }






