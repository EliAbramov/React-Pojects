import React, { Component } from 'react'

export default class AddPerson extends Component {

    constructor(props) {
        super(props)

        this.state={
            name: '',
            bgColorName: 'white'
        }

    }



    validName = (event) => {
        // console.log("work")
        // console.log(event.target.value);
        
        // The input field value
        let input = event.target.value;
        this.setState({name: event.target.value})

        if(input.length === 0){
            this.setState({bgColorName: "white"})
        } 
        else if(input.length >= 4){
            this.setState({bgColorName: "limegreen"})
        } 
        else {
            this.setState({bgColorName: "pink"})
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <input 
                    style={{backgroundColor: this.state.bgColorName}}
                    onChange={this.validName}
                    placeholder="Name"
                />
                <button>Add</button>
            </div>
        )
    }
}
