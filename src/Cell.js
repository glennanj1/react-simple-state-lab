import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    eventHandler = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div onClick={this.eventHandler} className='cell' style={{backgroundColor: this.state.color}}></div>
        )
    }
}

export default Cell