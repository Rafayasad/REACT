import './App.css';
// import './index.css'
import FBPost from './FBPost';
import FbImageLibrary from 'react-fb-image-grid';
import { useState } from 'react';

function App_FBImagePost () {
    const image = [
    'https://sm.ign.com/ign_me/news/r/red-dead-r/red-dead-redemption-2-on-pc-gets-a-brand-new-photo-mode_ndbh.jpg',
    'https://i.pinimg.com/originals/bb/01/eb/bb01eb831edc008d7b0a212bd329b11e.jpg',
    'https://cdn.mos.cms.futurecdn.net/5xHNtCc8Y9zfmGcv9YmHU.jpg',
    'https://globetrender.com/wp-content/uploads/2020/07/RDR2.jpg',
    'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/fb_image_5ef0a3347d5e7__700.jpg',
    'https://i.redd.it/rur6gyvsqmz11.jpg',
    'https://i.pinimg.com/originals/6e/6f/1d/6e6f1ddfe63a7065ea407e428aeeb538.jpg'
]

const obj = {
    createdBy:"Rafay Asad",
    avatar: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/186564169_1793951054109030_6060617004117787795_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGzpqsRPqCMw1G_rt1gaVPkhLvl7-Q208SEu-Xv5DbTxHB6WXQ5h4QPZZWd0JHmaXH82jIlA7li2OoWdnxLP7V0&_nc_ohc=lk9Nt-2m_GkAX-t81fo&_nc_ht=scontent.fkhi1-1.fna&oh=9130014a8470f66c75ea437fdd6f5495&oe=60E25ADE',
    description: "Redemption! The era of cinematic ",
    images: [<FbImageLibrary images={image} padding='0%'/>],
    createdAt : new Date(),
}

    return (
        <div className="App">
            <div>
                <FBPost data={obj}/>
            </div>



        </div>
    )
}

export default App_FBImagePost;