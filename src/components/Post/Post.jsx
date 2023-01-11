import { useState } from 'react';
import truncate from 'truncate';

import {LogInUser} from '../../const';
import './Post.css';


const Post =({post, user, hendleEditePost})=>{
    const [visibal, setVisibal] = useState(false);
    const [showText, setShowText] = useState(false);

      const heandleDivVisibale=()=>{
        setVisibal(!visibal);
      }
      const hendleShowText=()=>{
        setShowText(!showText);
      }

return (<div className='contener'>
<div className='titleStyle'>{post.title}</div>
<div>{user.name} {user.surname}</div>
<div className='categoryStyle'>{post.category}</div>
<div onClick={hendleShowText}>{showText? post.text :truncate(post.text, 300)}</div>

<div>created {post.createdAt}</div>
{(post.modifiedAt!==null)? <div>modified  {post.modifiedAt}</div>: <div></div>}
{(LogInUser===user.id)? <div className='editStyle'><button onClick={()=>
  hendleEditePost({id:post.id, title:post.title, text:post.text, category:post.category, modifiedAt:post.modifiedAt, userId:post.userId, comments:post.comments, createdAt:post.createdAt})}>edit</button></div> : <div></div>}
{(post.comments[0].text!==undefined)? <><div onClick={heandleDivVisibale}>coments ({post.comments.length })</div>
<div  className={visibal ? 'boxVisibil' : 'boxHiden'}>{post.comments.map((comment, index)=>{ 
  return <div className='comenntStyle' key={index}><div >{comment.id}</div>
  <div>{comment.text}</div></div>
})}</div></> : <div></div>}


</div>
)};
 export default Post;
