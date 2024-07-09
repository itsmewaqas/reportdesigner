import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginMethod } from '../redux/reducer/loginDetail';
import validateInfo from '../utilities/validation';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
import CryptoJS from 'crypto-js';

function Login() {

  const dispatch = useDispatch();

  const loginDetail = useSelector((state) => state);
  console.log(loginDetail);

  const initalState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});

  const handleChnage = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validateInfo({ values }));
    if (values.email != '' &&
      values.password != '') {
      const encryptedPassword = CryptoAES.encrypt(values.password, 'your-secret-key').toString();
      dispatch(loginMethod({ ...values, password: encryptedPassword, }));
      if (values) {
        setValues({
          email: '',
          password: '',
        })
      }
    }
  }

  useEffect(() => {
  }, [])

  if (loginDetail.loading) {
    return (<Spinner animation="border" role="status" variant="primary" size="md">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
  }

  return (
    <div>
      <h1 className='px-5'>Login</h1>
      <Row>
        <Col md={4}>
          <form onSubmit={handleLogin}>
            <div className='mt-4 my-5 px-5'>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" name="email" value={values.email} placeholder="name@example.com" onChange={handleChnage} />
                {errors.email && <p className='error'>{errors.email}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={values.password} placeholder="***********" onChange={handleChnage} />
                {errors.password && <p className='error'>{errors.password}</p>}
              </Form.Group>
              <Button type='submit' variant="primary" className='mt-1'>Login</Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
