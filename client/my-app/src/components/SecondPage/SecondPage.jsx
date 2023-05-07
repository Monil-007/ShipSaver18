import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import DataDisplay from '../DataDisplay/DataDisplay';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
};



const SecondPage = () => {
    const [isLoading, SetIsLoading] = useState(false);

    async function caller(val) {
        await fetch(`http://localhost:3000/api/rk`, {
            method: "POST",
            body: JSON.stringify(val),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json()).then((dt) => { console.log(dt); SetIsLoading(false); }).catch((err) => { console.log(err); })
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    SetIsLoading(true);
                    caller(values);
                    console.log(values);

                    setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);

                }}
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Field
                            component={TextField}
                            name="firstName"
                            label="First Name"
                            fullWidth
                        />
                        <Field
                            component={TextField}
                            name="lastName"
                            label="Last Name"
                            fullWidth
                        />
                        <Field
                            component={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                        />
                        {isSubmitting && <LinearProgress />}
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>

            <DataDisplay isLoading={isLoading} />

        </>




    );

};

export default SecondPage;
