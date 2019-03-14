import React from 'react'

const User = ( props ) =>{
    return(
        <div className="card col-md-6 mb-3">
            <div className="card-body ">
            Logado como : {props.email}
            <button className='ml-5 btn' onClick={props.logout}> Sair</button>
            </div>
        </div>
    )
}

export default User