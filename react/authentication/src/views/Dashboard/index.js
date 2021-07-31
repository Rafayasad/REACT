// import { useEffect , useState } from 'react';
// import {getAllUsers} from '../../config/firebase';
// function Dashboard () {
//     const [user,setUsers] = useState([]);
//     useEffect(async()=>{
//         const usersData = await getAllUsers()
//         const tempData = [];
//         usersData.forEach(doc=>{
//             const obj = {...doc.data(), id:doc.id}
//             tempData.push(obj)
//         })
//         setUsers(tempData);
//     },[])
    
//     return (
//         <div>
//             {/* {console.log(user)} */}
//             <h1>Welcome to Dashboard !</h1>
//             <table style={{border:'1px solid'}}>
//                 {user.map(item=>{
//                 const {id , email} = item
//                     return(
//                         <tr>
//                         <td>ID:{id}</td>
//                         <td>EMAIL:{email}</td>
//                         </tr>    
//                             ) 
//                 })}
//             </table>
//         </div>
//     )
// }
// export default Dashboard;

import { useEffect, useState } from 'react';
import { getAllUsers } from '../../config/firebase';
import { useSelector } from 'react-redux';
function Dashboard (){

    // useEffect(async()=>{
    //     const getUsers = await getAllUsers();
    //     const tempUsers = []
    //     getUsers.forEach(doc=>{
    //         const obj = {...doc.data() , id:doc.id}
    //         tempUsers.push(obj);
    //     })
    //     setUsers(tempUsers);
    // },[])

        const [users,setUsers] = useState([])
        const myUser = useSelector(state=>state.user)
        console.log("user from redux to component",myUser);

        
        useEffect(async()=>{
            getAllUsers(data=>{
                setUsers(data)
            })
        },[])

    return (
        <div>
            <h1>Welcome to Dashboard Screen</h1>
            <table style={{border:'1px solid' , display:'inline-block'}}>
                {users.map(item=>{
                   return <tr>
                        <td>ID : {item.id} <br /></td>
                        <td>NAME : {item.name} <br /></td>
                        <td>EMAIL : {item.email}</td>
                    </tr>
                })}
            </table>
        </div>

    )
}

export default Dashboard;




