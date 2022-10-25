import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle,BsFacebook} from "react-icons/bs";
import { toast } from 'react-hot-toast';
import { AuthContext } from './../../context/AuthProvider/Authprovider';
import { GoogleAuthProvider,getAuth,signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const Login = () => {
    const [error,setError]=useState('')
    const {providerLogin,setUser}=useContext(AuthContext)
    const { signIN,setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation()
    const facebookProvider= new FacebookAuthProvider()
  
    const from=location.state?.from?.pathname ||'/'
  
    const handleLogin = (event) => {
     
      event.preventDefault();
      const form = event.target;
  
      const email = form.email.value;
      const password = form.password.value;
  
      signIN(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          form.reset();
          setError('')
          if(user.emailVerified){
            navigate(from, { replace: true });
          }
          else{
            toast.error('Your email is not verified yet!')
          }
        })
        .catch((error) => {
          console.error(error)
          
          setError(error.message)
        })
        .finally(()=>{
          setLoading(false)
        })
        //google sign in

       
    };
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{

        providerLogin(googleProvider)
        .then(result=>{
          const user=result.user;
          navigate(from, { replace: true });
        })
        .catch(error=>console.error(error))
       
    
    
      }
      //facebook signIn

      const handleFacebookSignIn=()=>{
        providerLogin(facebookProvider)
        
        .then(result=>{
           
            const user=result.user;
            setUser(user)
            setLoading(true)
            navigate(from, { replace: true });
            
        })
        .catch(error=>console.error(error))
        .finally(()=>{
            setLoading(false)
          })

      }
    return (
        <Form onSubmit={handleLogin} className="m-4 w-50">
        <h3>Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>

      <Form.Text className="text-danger"> {error}</Form.Text>
      </div>
      <Button onClick={handleGoogleSignIn} className='m-2 ' variant="outline-primary"><BsGoogle></BsGoogle> LogIn with Google</Button>
      <Button onClick={handleFacebookSignIn}  className='m-2 ' variant="outline-primary"><BsFacebook></BsFacebook> LogIn with Facebook</Button>
      
      <p>Do not have an account? <Link to={'/register'}>Register now?</Link></p>
    </Form>
    );
};

export default Login;