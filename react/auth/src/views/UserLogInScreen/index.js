import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {storeUser , removeUser} from '../../store/actions';
import App from '../../App';

function UserLogInScreen(){

    const [pageChange,setPageChange] = useState(false);
    const dispatch = useDispatch();
    const myUser = useSelector(state=>state.user);

    return(
        <div>
            {
                !pageChange ?
                <>
                <h2>Welcome To User Screen</h2>
                <button onClick={()=>(dispatch(removeUser(setPageChange(true))))}>logout</button><br /><br />
                <div>{myUser && <p style={{display:'inline-block'}}>EMAIL: {myUser.user.email}</p>}</div>
                <div>{myUser && <p style={{display:'inline-block'}}>ID: {myUser.user.uid}</p>}</div>
                </>
            :
                <App />
            }
        </div>
    )
}
export default UserLogInScreen;