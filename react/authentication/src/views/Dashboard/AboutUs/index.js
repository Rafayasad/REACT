import {useDispatch,useSelector} from 'react-redux';
import { removeUser } from '../../../store/actions';

function AboutUs (){

    const dispatch = useDispatch();
    const myUser = useSelector(state=>state.user)
    console.log('about us component ==>',myUser);

    return(
        <div>
            <h1>user details</h1>
            <p>{myUser && <h2>{myUser.user.email}</h2>}</p>
            <button onClick={()=>dispatch(removeUser())}>logout</button>
        </div>
    )
}

export default AboutUs;