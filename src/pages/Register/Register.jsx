import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false)

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then(result =>{
               const createdUser = result.user;
               console.log(createdUser)
        })
        .catch(error => console.error(error))
    }
    const handleAccepted = event =>{
       setAccepted(event.target.checked)
    }
    return (
        <Container className="mx-auto w-25">
        <h2 className="text-center text-success mb-3">Please Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" name="name" required />
     
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Photo Url" name="photo" />
     
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
     
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
            onClick={handleAccepted}
            name='accept'
            type="checkbox" 
            label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
          </Form.Group>
          <Button  variant="primary" type="submit" disabled={!accepted} className="w-100 ">
            Register
          </Button>
          <br />
       
         <div className="text-center">
        Already Register?<Link to="/login"> Please Login.
                 </Link>
         </div>
          
          <Form.Text className="text-success">
           
            </Form.Text>
        </Form>
      </Container>
    );
};

export default Register;