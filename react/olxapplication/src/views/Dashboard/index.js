import { useEffect, useState } from 'react';
import {getAllUsersData} from '../../config/firebase';
import './index.css';
import Carousel from 'react-elastic-carousel';

function Dashboard (){
    const [users,setUsers] = useState([])
    const [post,setPost] = useState(false);
    
    useEffect(async()=>{
        const getUsersData = await getAllUsersData()
        setPost(false);
        const tempUsers = [];
        getUsersData.forEach(doc=>{
            setPost(true);
            const obj = {...doc.data()}
            tempUsers.push(obj)
        })
        setUsers(tempUsers);
    },[])
    return(
        <div className="App">
<>
        {
            !post ? <h1>no post</h1>
                :
                <>
            <h1>Welcome to Dashboard Screen</h1>
            <table style={{border:'1px solid', display:'inline-block'}}>
                {users.map(item=>{
                    const {images,title,price,username,contactNo} = item;
                    return <tr>
                    <td>
                    <Carousel style={{width:'350px'}}>
                    {images.map(items=>{
                        return <img src={items} style={{width:'200px',height:'200px'}}/>
                    })}
                    </Carousel>
                    </td>
                    <td>{title}</td>     
                    <td>{price}</td>
                    <td>{username}</td>
                    <td>{contactNo}</td>
                </tr>
                })}
            </table>
            </>
        }
</>

</div>
        
    )
}
export default Dashboard;

