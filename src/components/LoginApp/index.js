import { Component } from 'react'
import './index.css'

class LoginApp extends Component{

    state={isLoggedIn:false}

         isLogIn=()=>{
            this.setState({isLoggedIn:true})
        }

        isLogOut=()=>{
            this.setState({isLoggedIn:false})
        }

    render(){

        const { isLoggedIn }=this.state

        return(
            <div className="bg-container">
                
                    {isLoggedIn?
                    (
                        <div className="card-container">
                            <h1 className="heading">Welcome User</h1>
                            <button onClick={this.isLogOut} className="btn">Logout</button>
                            </div>
                    ):
                    (<div className="card-container">
                        <h1 className="heading">Please Login</h1>
                        <button onClick={this.isLogIn} className="btn">Login</button>
                        </div>)}

            </div>

        )
    }
}

export default LoginApp