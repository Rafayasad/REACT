import { useEffect, useState } from "react";

function Posts (props) {
    return (
        <div style={{padding:'5px',border:'2px solid'}}>
            <h1>{props.id}</h1>
            <h2>TITLE<br /></h2><p>{props.titleText}</p>
            <h2>BODY<br /></h2><p>{props.bodyText}</p><br />
            <button onClick={()=>props.deleteArray(props.getindex)}>Delete</button>
        </div>
    )
} 

export default Posts;