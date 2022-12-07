import React ,{ useState } from 'react';
import { useHistory  } from 'react-router-dom';
import {auth} from './firebase';
import { Form } from 'react-bootstrap'
import './login.css'
//import './auth'
//import { facebookProvider, googleProvider, githubProvider } from './authmethod';
//import socialMediaAuth from './auth';

export default function Login() {
	const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	/*const handleOnClick=async(Provider)=>{
		const res = await socialMediaAuth(Provider);
		console.log(res);
	};*/
    const signIn = e => {
        e.preventDefault();

       auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
				if (auth) {
                history.push('/')}
            })
            .catch(error => alert(error.message))

			//firebase login shitt
    }

    const register = e => {
        e.preventDefault();

      auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // it successfully created a new user with email and password
                if (auth) {
                history.push('/')
                }
            })
            .catch(error => alert(error.message))

			//firebase register shitt
    }

	return (
<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab"  className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group_1">
					<label for="user" className="label">E-mail</label>
					<input id="user" type="text" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
				</div>
				<div className="group_1">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</div>
				<div>
				    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                    </Form.Group>
				</div>
				<div className="group_1">
					<input type="submit" className="button" onClick={signIn} value="Sign In"/>
				</div>
				<div className="login-col">
				<h4>Or Log in With:</h4>
				<div className="social-links">
  	 				<a href="https://www.facebook.com/dig.dasgupta/" target="_blank"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://www.facebook.com/dig.dasgupta/" target="_blank"><i className="fab fa-google"></i></a>
  	 				<a href="https://www.facebook.com/dig.dasgupta/" target="_blank"><i className="fab fa-github"></i></a>
  	 			</div>
				   </div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group_1">
					<label for="user" className="label">E-mail</label>
					<input id="user" type="text" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
				</div>
				<div className="group_1">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={e => setPassword(e.target.value)}/>
				</div>
				<div className="group_1">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={e => setPassword(e.target.value)}/>
				</div>
				<div className="group_1">
					<input type="submit"  className="button" onClick={register} value="Create account"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}