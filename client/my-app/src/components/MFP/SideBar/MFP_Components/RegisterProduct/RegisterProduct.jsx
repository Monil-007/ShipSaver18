import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import SideBar from '../../Sidebar';
import '../RegisterProduct/RegisterProduct.css'
import { connect } from 'react-redux';
import { setFormData } from '../../../../../Actions/formAction.js';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FaInfoCircle } from 'react-icons/fa'; // Import the info circle icon

const RegisterProduct = ({ setFormData }) => {
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reqgender, setReqGender] = useState('');
    const [delcharge, setDelcharge] = useState('');
    const [accrange, setAccrange] = useState('');
    const [prodlink, setProdlink] = useState('');
    const [prodprice, setProdprice] = useState('');

    const [formData, setFormData1] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        phone: '',
        reqgender: '',
        email: '',
        prodprice: '',
        prodlink: '',
        delcharge: '',
        accrange: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + value);
        setFormData1((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setFormData(formData);
            console.log(formData);
        } else {
            setErrors(errors);
        }
    };


    const validateForm = () => {
        const errors = {};

        if (formData.firstname.trim() === '') {
            errors.firstname = 'First Name is required';
        }

        // if (formData.middlename.trim() === '') {
        //     errors.middlename = 'Middle Name is required';
        // }

        if (formData.lastname.trim() === '') {
            errors.lastname = 'Last Name is required';
        }

        if (formData.phone.trim() === '') {
            errors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = 'Phone number must contain only digits';
        }

        if (formData.email.trim() === '') {
            errors.email = 'Email ID is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        return errors;
    };

    return (
        <div className="reg_prod" style={{ "display": "flex" }}>
            <div className="sdb">
                <SideBar />
            </div>
            <div className="getDetails">
                <h1>Register Product</h1>
                <div className="form-container">
                    <div className="form-row-2">
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Enter your full name</span>
                            </div>
                            <label className='input-item-left' htmlFor="input1">Full Name :</label>
                            <div className="field-input">
                                <input className='input-item-left-field' onChange={handleChange} placeholder='Your Full Name...' type="text" id="input1" name="firstname" value={formData.firstname} />
                                {errors.firstname && <FormFeedback className='err'> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> {errors.firstname}</FormFeedback>}
                            </div>

                        </div>
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Insert your Email ID</span>
                            </div>
                            <label className='input-item-right' htmlFor="input1">Email ID :</label>
                            <div className="field-input">
                                <input className='input-item-right-field' placeholder='Your Mail ID...' onChange={handleChange} type="text" id="input1" name="email" value={formData.email} />
                                {errors.email && <FormFeedback className='err'> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> {errors.email}</FormFeedback>}
                            </div>

                        </div>

                    </div>
                    <div className="form-row-2">

                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Enter your reachable and valid phone number</span>
                            </div>
                            <label className='input-item-left' htmlFor="input2">Phone Number :</label>
                            <div className="field-input">
                                <input className='input-item-left-field' placeholder='Your Phone no...' onChange={handleChange} type="text" id="input2" name="phone" value={formData.phone} />
                                {errors.phone && <FormFeedback className="err"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> {errors.phone}</FormFeedback>}
                            </div>

                        </div>
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Provide if you have product's link</span>
                            </div>
                            <label className='input-item-right' htmlFor="input4">Product Link :</label>
                            <input className='input-item-right-field' onChange={handleChange} placeholder='Paste Link of product...' type="text" id="input4" name="prodlink" value={formData.prodlink} />
                        </div>

                    </div>
                    <div className="form-row-2">

                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Write the product price i.e. CTC (without delivery)</span>
                            </div>
                            <label className='input-item-left' htmlFor="input5">Product Price :</label>
                            <input className='input-item-left-field' onChange={handleChange} placeholder='Purchase value of product...' type="text" id="input5" name="prodprice" value={formData.prodprice} />
                        </div>
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">What is delivery charged on the offical site</span>
                            </div>
                            <label className='input-item-right' htmlFor="input6">Delivery Charge :</label>
                            <input className='input-item-right-field' onChange={handleChange} placeholder='Delivery Charge for it...' type="text" id="input6" name="delcharge" value={formData.delcharge} />
                        </div>
                    </div>
                    <div className="form-row-2">
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Select which gender match you require </span>
                            </div>
                            <label className='input-item-left' htmlFor="input1">Required gender :</label>
                            <select
                                className='input-item-left-field dd'
                                onChange={handleChange}
                                id="input1"
                                name="reqgender"
                                value={formData.reqgender}
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="any">Any</option>
                            </select>

                        </div>
                        <div className="form-item">
                            <div className="info-tooltip">
                                <FaInfoCircle className="info-icon" />
                                <span className="info-text">Select upto how much range you need a match</span>
                            </div>
                            <label className='input-item-right' htmlFor="input2">Acceptable Range (in kms) :</label>
                            <select
                                className='input-item-right-field dd'
                                onChange={handleChange}
                                id="input2"
                                name="accrange"
                                value={formData.accrange}
                            >
                                <option value="">Select</option>
                                <option value="1">1 km</option>
                                <option value="2">2 km</option>
                                <option value="3">3 km</option>
                                <option value="4">4 km</option>
                                <option value="5">5 km</option>
                                <option value="6">6 km</option>
                                <option value="7">7 km</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-row-button">
                        <div className="form-item">
                            <button className="reg_button" onClick={handleSubmit}>Register the product</button>
                        </div>


                    </div>
                </div>
            </div>

            {/* <div className="form-container">
                <h1>Register Product</h1>
                <Container className="cnt">
                    <Form onSubmit={handleSubmit} >
                        <Row className="r1">
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="name">First Name:</Label>
                                    <Input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        invalid={errors.firstname !== undefined}
                                    />
                                    {errors.firstname && <FormFeedback>{errors.firstname}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="name">Last Name:</Label>
                                    <Input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        invalid={errors.lastname !== undefined}
                                    />
                                    {errors.lastname && <FormFeedback>{errors.lastname}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} >
                                <FormGroup>
                                    <Label for="phone">Phone Number:</Label>
                                    <Input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        invalid={errors.phone !== undefined}
                                    />
                                    {errors.phone && <FormFeedback>{errors.phone}</FormFeedback>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="r1">
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="gender">Gender:</Label>
                                    <Input
                                        type="select"
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        invalid={errors.gender !== undefined}
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="email">Email ID:</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        invalid={errors.email !== undefined}
                                    />
                                    {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="r1">
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="price">Product Price:</Label>
                                    <Input
                                        type="text"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="quantity">Quantity:</Label>
                                    <Input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                  
        </Form>
                </Container >
            </div >  */}

        </div >

    );
};

export default connect(null, { setFormData })(RegisterProduct);
// export default RegisterProduct;