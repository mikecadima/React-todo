import React, { useState } from 'react'

class SuperComponent extends React.Component {
    constructor(props){
        super(props)

const [isVisable, setIsVisable] = useState(false)
const [clickedTimes, setClickedTimes] = useState(0)
const title = 'This title does not change'

    //     this.state = {
    //         title: 'This title does not change',
    //         isVisable:false,
    //         clickedTimes: 0
    //     }
    // }

    const updatedClicks = ()=> {
        setClickedTimes(clickedTimes+1)
    // this.setState({clickedTimes:this.state.clickedTimes+1})
    }

render(){ 
    let {isVisable,clickedTimes,title} = this.state;
    let{age,car} = this.props;

    let clickedText = `You have clicked ${clickedTimes}`
    return (
        <div>
            <div>{title}</div>
            <div>My age is {age}</div>
            <div>my car is a {car}</div>
        {isVisable &&
        <>
        <div>{clickedText}</div>
        <button onClick={updatedClicks}>
            <{clickedTimes}..Go ahead Click{clickedTimes ====0?'.'} />
        </button>
        <>
        }
        </div>
    )
}
}

export default SuperComponent
