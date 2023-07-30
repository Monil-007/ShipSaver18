import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import SideBar from '../../Sidebar';
import './RegisterProduct.css'
import { connect } from 'react-redux';
import { setFormData } from '../../../../../Actions/formAction.js';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FaInfoCircle } from 'react-icons/fa'; // Import the info circle icon
import dummyImage from '../../../../../assets/icons/dummyImage.png'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const RegisterProduct = ({ user }) => {
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
    const dispatch = useDispatch();
    const formData18 = useSelector(state => state.formData);
    useEffect(() => {
        if (formData18.user && formData18.user.id) {
            console.log(typeof (formData18.user.id));
            const userData = {
                userID: `${formData18.user.id}`
            } // Log the updated formData
            fetch('http://localhost:3000/DeliverySaverApi/rkGetYourOrders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(resp => resp.json())
                .then((dt1) => { console.log(dt1); })
                .catch(err => console.log(err));
        }

    }, [formData18]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + value);
        setFormData1((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("inside submit hare hare");
        console.log(uuidv4());
        console.log(formData18.user.id);
        const dt = {
            userID: `${formData18.user.id}`,
            id18: uuidv4(),
            firstName: `${formData.firstname}`,
            lastName: `${formData.lastname}`,
            email: `${formData.email}`,
            price: `${formData.prodprice}`,
            phone: `${formData.phone}`
        }
        dispatch(setFormData(dt));
        //console.log(formData);

        await fetch(`http://localhost:3000/DeliverySaverApi/rkRegister`, {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); }).catch((err) => { console.log(err); })
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            //setFormData(formData);

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

                <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
                    <div className="relative w-full max-w-lg">
                        <div className="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute top-20 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                        <h1>Register Product</h1>
                        {user && (
                            <div className="profile-info">
                                <img src={dummyImage} alt="Profile" className="profile-pic" />
                                <p className="username">Hello, {user.displayName}</p>
                            </div>)}
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
                </div>
            </div>
        </div >

    );
};

const mapStateToProps = (state) => {
    return {
        formData: state.formData.formData,
        user: state.formData.user,
    };
};

export default connect(mapStateToProps)(RegisterProduct);
// export default RegisterProduct;