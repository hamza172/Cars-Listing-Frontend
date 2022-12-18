import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authSerivce';


export default function Login (){
    const navigate = useNavigate();
    const [username, setUsername]= useState('');
    const [note, setNote]= useState('');
    const [password, setPassword]= useState('');
    const [validated, setValidated] = useState(false);

    const submitHandler = async(e)=>{
        console.log("start")
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
              e.stopPropagation();
              setValidated(true);  
        }
        else{
            let response = await login(username,password)
            if (response){
                navigate('/admin')
            } else {
                setNote('Incorrect Password')
            }
        }   
    }
    return (<>
        <div className='container'>
            <div className='pageCon'>
            <div className="page-title">All Cars</div>
                <div className='login-form p-5'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <p>{note}</p>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </>)
}