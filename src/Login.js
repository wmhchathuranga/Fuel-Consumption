import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function BasicExample() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const email_ref = useRef();

    useEffect(
        () => {
            email_ref.current.focus()
        }, []
    )

    return (
        <Form onSubmit={handleSubmit}>
            <div className="row mb-4">
                <div className="col">
                    <h1 className='text-center'>Login</h1>
                </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email_ref} required value={email} onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} pattern=".{8,20}"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Form.Group className="mb-3 text-end" controlId="formBasicCheckbox">
                <Form.Text >
                    Don't have an Account? <Link to="/register">Create account</Link>
                </Form.Text>
            </Form.Group>
            <div className="row">
                <div className="col text-center">
                    <Button variant="primary" type="submit" className='w-50'>
                        Submit
                    </Button>
                </div>
            </div>
        </Form>
    );

    function handleSubmit() {
        alert(email + ":" + password);
    }
}


export default BasicExample;