import React, { useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import {connect } from 'react-redux'
import { showPost } from '../../actions/posts'

function Post(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()
  function handleOnComments() {
    props.showPost(props.id)
  }
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
      <Link onClick={ e => setLike('❤️')}>{like} </Link> 
      <Link  to={`/${props.user.username}/posts/${props.id}`} onClick={handleOnComments}>💬</Link>
      {<br></br>}
      {<br></br>}
    </div>)

}

export default connect(null, {showPost})(Post)