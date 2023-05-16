import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import SideBar from '../../Sidebar';
import '../RegisterProduct/RegisterProduct.css'


const RegisterProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        email: '',
        price: '',
        quantity: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form submission logic here
            console.log('Form submitted:', formData);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (formData.name.trim() === '') {
            errors.name = 'Name is required';
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

            <div className="form-container">
                <h1>Register Product</h1>
                <Container className="cnt">
                    <Form onSubmit={handleSubmit} className="cnt">
                        <Row className="r1">
                            <Col sm={6}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        invalid={errors.name !== undefined}
                                    />
                                    {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
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
                        {/* <Button type="submit" color="primary">
                        Submit
                    </Button> */}
                    </Form>
                </Container>
            </div>

        </div>

    );
};

export default RegisterProduct;

