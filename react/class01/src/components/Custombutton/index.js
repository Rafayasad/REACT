// import React = require("react");

function Custombutton (props) {
    return (
        <button style={{backgroundColor:'black' ,color:'white',height:'60px',width:'120px'}} onClick={()=>{props.screenModeSwitch(props.title)}}>
        {props.title}
        </button>
        )
}

export default Custombutton