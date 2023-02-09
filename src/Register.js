import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function BasicExample() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const fname_ref = useRef();

    useEffect(
        () => {
            fname_ref.current.focus()
        }, []
    )
    useEffect(
        () => MatchPasswords(), [cpassword, password]
    )


    return (
        <Form onSubmit={handleSubmit}>
            <div className="row mb-4">
                <div className="col">
                    <h1 className='text-center'>Registration</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md">
                    <Form.Group className="mb-3" controlId="formBasicFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Your First Name" ref={fname_ref} required onChange={(e) => setFname(e.target.value)} />
                    </Form.Group>

                </div>
                <div className="col-12 col-mb">
                    <Form.Group className="mb-3" controlId="formBasicLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Last Name" required onChange={(e) => setLname(e.target.value)} />
                    </Form.Group>

                </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted ms-2">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required onChange={(e) => setCpassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                <Form.Text >
                    Already have an Account? <Link to="/login">Login</Link>
                </Form.Text>
            </Form.Group>
            <div className="row">
                <div className="col text-center">
                    <Button variant="primary" type="submit" className='w-md-50 w-100'>
                        Create Account
                    </Button>
                </div>
            </div>
        </Form>
    );

    function handleSubmit() {
        // alert(1);
    }

    function MatchPasswords() {
        const matched = password === cpassword;
        // alert(matched);
    }
}

export default BasicExample;