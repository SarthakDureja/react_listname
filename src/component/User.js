import React from 'react';

const User = (props) =>{
    return(
        <div>
            <span>name:{props.children},  age={props.age}</span> 
            <input onChange={props.changeName} type="text" value={props.children }></input>
            <button onClick={props.delEvent}>Delete User</button>
        </div>
    )
}

export default User;