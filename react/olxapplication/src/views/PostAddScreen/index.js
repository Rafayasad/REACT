import { useState } from "react";
import { register } from '../../config/firebase';
import Dashboard from "../Dashboard";

function PostAddScreen () {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState();
    const [username,setUserName] = useState('');
    const [contactNo,setContactNo] = useState('');
    const [moveToDashboard,setmoveToDashboard] = useState(false);
    const [images,setImages] = useState([])
    const [addInput,setaddInput] = useState([])

    return(
            <div>
                {moveToDashboard ? <div><Dashboard /></div> :
            <div>
            <h1>Post Adds Screen</h1>
                <fieldset>
                    <legend>Ad Details</legend>
                    <label>TITLE
                        <input type='text' required='required' placeholder='Add Title' onChange={(e)=>setTitle(e.target.value)}/><br /><br />
                    </label>
                    <label>PRICE
                        <input type='text' required='required' placeholder='Add Price' onChange={(e)=>setPrice(e.target.value)}/><br /><br />
                    </label>
                    <label>IMAGES
                    <input type='text' required='required' placeholder='Add Image url' onChange={(e)=>images.push(e.target.value)}/>
                        {
                            addInput.length < 4 ?
                            <button onClick={()=>setaddInput([...addInput,1])}>+</button>
                            :
                            <></>
                            }
                            {
                                addInput.map((item,index)=>{
                                    return <div>
                                        <input type='text' required='required' placeholder='Add Image url' onChange={(e)=>images.push(e.target.value)}/>
                                       <br />
                                    </div>
                                })
                            }
                    </label>
                </fieldset>
                <fieldset>
                    <legend>User Details</legend>
                    <label>FULL NAME
                        <input type='text' required='required' placeholder='Fullname' onChange={(e)=>setUserName(e.target.value)}/><br /><br />
                    </label>
                    <label>CONTACT NUMBER
                        <input type='text' required='required' placeholder='Contact no.' onChange={(e)=>setContactNo(e.target.value)}/><br /><br />
                    </label>
                    <button onClick={()=>register(title,price,username,contactNo,images)}>Submit</button>
                    <button onClick={()=>setmoveToDashboard(true)}>Check Dashboard</button>    
                </fieldset>
                </div>
                }
        </div>
    )
    console.log(images)
}
export default PostAddScreen;