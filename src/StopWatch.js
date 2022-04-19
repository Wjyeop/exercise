import React from "react";

export default class StopWatch extends React.Component {

   
    constructor(props) {
        super(props);

        this.state = {
            text: "시작",
        };
        
        let time,year,month,date;
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
            this.time = Date.now();
            this.setState({
            text: "리셋",            
        });
        //        this.startedTime = Date.now();
    
        }

        if(this.state.text == "리셋") {
            this.time = 0;
            this.setState({
                text: "시작",
            });
        }
    };


    }






