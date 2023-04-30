import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)
        })
        .catch(error => console.error(error))
    }
  return (
    <Container className="mx-auto w-25">
      <h2 className="text-center text-success mb-3">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
   
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-2">
       Login
        </Button>
        <br />
      
       <div className="text-center">
       Don't Have an Account?<Link to="/register"> Please Register.
               </Link>
       </div>
     
        <Form.Text className="text-success">
         
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
