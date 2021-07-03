import './index.css';

function FBPost (props) {
    const likeImg = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/like-1614278-1368980.png';
    const commentImg = 'https://www.freeiconspng.com/thumbs/comment-png/comment-png-17.png';
    const shareImg = 'https://www.shareicon.net/data/512x512/2017/02/09/878628_send_512x512.png';
    return (
        <div className='header'>
            <div className='icon-container'>
            <img className="profileImg" src={props.data.avatar}/>
            <div className='status-circle'></div>
            </div>
            <div className='setAlignment'>
            <h4 className='profileName'>
            {props.data.createdBy}
            </h4>
            <span className='dateAndTime'><br />{props.data.createdAt.toLocaleString()}</span>
            <hr className='lineSpace'/>
            <p className='setPara'>{props.data.description}</p>
            <br />
            <div className='setImg'>
                {props.data.images}
            </div>
            <div className='setButton'>
                <div className='button'>
                    <img className='like' src={likeImg}/>
                    <p className='likes' >Like</p>
                </div>
                <div className='button'>
                <img className='comment' src={commentImg} />
                    <p className='comments' >Comment</p>
                </div>
                <div className='button'>
                <img className='share' src={shareImg} />
                    <p className='shares' >Share</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FBPost;

// {props.data.description}