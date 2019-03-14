import React,{ Component } from 'react'

class Login extends Component{
    state = {
        email: '',
        passwd:''
    }

    handleChange = field => event =>{
        this.setState({
          [field] : event.target.value
        })
    }
    login = () =>{
        this.props.login( this.state.email,this.state.passwd)
    }

    render(){
        const errorMessages={
            'auth/invalid-email': "Email inválido.",
            'auth/wrong-password' : "Senha incorreta.",
            'auth/user-not-found' : "Email incorreto."
          }
        return(
            <div>
                <h4>Entre pra comentar</h4>
                <div className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button className='btn btn-primary mr-1' onClick={this.login}>Enviar</button>                    
                    <button className='btn' onClick={()=>this.props.changeScreen('signup')}>Criar conta</button>
                </div>
                { 
                    this.props.isAuthError && 
                    <div className="card text-whit bg-danger mt-2">
                        <div className="card-header"><b>Erro ao entrar:</b></div>
                        <div className="card-body">
                            {errorMessages[this.props.authError]}
                        </div>  
                    </div>
                }
            </div>
        )
    }
}

export default Login