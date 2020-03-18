import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lightblue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = (props) => {
  
  return(
    console.log(props.location.pathname),
    <div className="navbar" >

    <NavLink to='/feed'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    ><span role="img">☖</span></NavLink> | 

      <NavLink to='/posts/new' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span role="img">⊕</span></NavLink> |

      <NavLink to='/home' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span role="img">👤</span></NavLink> | 

      <NavLink to='/users/edit' exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >✎</NavLink> | 

      <NavLink to='/logout'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >◉</NavLink> | 
    </div>
  ) 
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.currentUser
  }
}
export default connect(mapStateToProps)(NavBar);