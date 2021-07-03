import { useState , useEffect } from 'react'; //import state library from react.
import './App.css';
import Posts from './components/Posts';

function App_API () {

    const [posts,setPosts] = useState ([]);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setPosts(res))
      }, [])

    const delArray = (index) =>{
        const tempPost = [...posts];
        tempPost.splice(index,1);
        setPosts(tempPost);
        console.log('index===>>',index);
    }

    return (
        <div className='App'>
             <div>
            {posts.map((v,i)=>{
                return <Posts title={v.title} body={v.body} id={v.id} index={i} post={posts} deleteArr={delArray}/>
             })}
            </div>
        </div>
        );
}

export default App_API;