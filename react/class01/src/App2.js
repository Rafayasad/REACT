import { useState , useEffect } from 'react'; //import state library from react.
import './App.css';
import Posts from './components/Posts';

function App2 () {

    const [posts,setPosts] = useState ([]);
    const [getindex,setGetIndex] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setPosts(res))
      }, [])

    const delArray = (getindex) =>{
        const tempPost = [...posts];
        tempPost.splice(getindex,1);
        setPosts(tempPost);
        console.log('index===>>',getindex);
    }

    return (
        <div className='App'>
             <div>
            {posts.map((v,i)=>{
                return <Posts titleText={v.title} bodyText={v.body} id={v.id} getindex={i} post={posts} deleteArray={delArray}/>
             })}
            </div>
        </div>
        );
}

export default App2;