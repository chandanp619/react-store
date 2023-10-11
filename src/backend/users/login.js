import React, {useState} from 'react';
import { redirect, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const emailRegEx = new RegExp(/\S+@\S+\.\S/);
  const navigate = useNavigate();

  const updateEmail = (e)=>{ setEmail(e.target.value);setStatus('');}
  const updatePassword = (e)=>{ setPassword(e.target.value);setStatus('');}
  const doLogin = () => {

    if(email=='' || password == ''){
      setStatus('Please fill up the fields');
    }else if(emailRegEx.test(email) === false){
      setStatus('Invalid Email');
    }else if(password.length < 6){
      setStatus('Password needs 6 characters minimum.');
    }else{
      setStatus('');
    }
    
    if(status==''){

    }

    if(email.length > 4 && password.length > 6){
      localStorage.setItem('userLoggedIn', true);
      navigate('/admin');
      
    }

  }
  return (<div className='container'>
      <div className="row">
        <div className='col-lg-5 mr-auto ml-auto text-center mt-5 pb-1 pt-1'>
          <div className="card p-5">
              <h4>Administrator Login</h4>
              <p>&nbsp;</p>
              <p><input type="text" className='form-control' placeholder='Email' onChange={updateEmail} autoComplete='off' /></p>
              <p><input type="password" className='form-control' placeholder='Password' onChange={updatePassword} autoComplete='off' /></p>
              <p><button className='btn btn-secondary' onClick={doLogin}>Login</button></p>
              { status.length ?
              <p className="text-bold text-xs text-red">{status}</p>
                :null
              }
          </div>
        </div>
      </div>
    </div>
  )
}
