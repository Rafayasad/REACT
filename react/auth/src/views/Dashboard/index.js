import { useEffect, useState } from 'react';
import { getAllUsers } from '../../config/firebase';
import { useSelector } from 'react-redux';
import '../../App.css';
function Dashboard(){
    const [user,setUser] = useState([])

    const myUser = useSelector(state=>state.user)
    console.log("user=>>>>>>",myUser);


    useEffect(()=>{
        getAllUsers(data=>{
            setUser(data)
        })
    },[])


    return(
        <div className='App'>
            <h1>Welcome to Dashboard</h1>
            {user.map(item=>{
                return <div><h2>{item.name}</h2></div>
            })}
        </div>
    )
}
export default Dashboard;