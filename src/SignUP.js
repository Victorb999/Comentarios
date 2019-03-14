import React,{ Component } from 'react'

class SignUp extends Component{
    state = {
        email: '',
        passwd:''
    }

    handleChange = field => event =>{
        this.setState({
          [field] : event.target.value
        })
    }
    createAccount = () =>{
        this.props.createAccount( this.state.email,this.state.passwd)
    }

    render(){
        const errorMessages={
            'auth/invalid-email': "Email inválido.",
            'auth/wrong-password' : "Senha incorreta.",
            'auth/user-not-found' : "Email incorreto.",
            'auth/email-already-in-use' : "Email já está em uso.",
            'auth/weak-password' : "Senha fraca."
          }
        return(
            <div>
                <h4>Criar conta</h4>
                <div className="form-inline">
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button className='btn btn-primary mr-1' onClick={this.createAccount}>Criar conta</button>

                    <button className='btn mr-1' onClick={()=>this.props.changeScreen('login')}>Já tenho uma conta, Entrar.</button>
                </div>
                
                { 
                    this.props.isSignUpError && 
                    <div className="card text-whit bg-danger mt-2">
                    <div className="card-header"><b>Erro ao entrar:</b></div>
                        <div className="card-body">
                        {errorMessages[this.props.signupError]}
                        </div>
                    </div>    
                }
            </div>
        )
    }
}

export default SignUp