import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field } from "formik";
import FormikRadioGroup from "./radioGroupFormik"
import FormLabel from '@material-ui/core/FormLabel';
import * as yup from "yup";
import axios from 'axios';


let SignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(30, "Name is too long.")
    .required("This field is required."),
  lastName: yup
    .string()
    .max(30, "Last name is too long.")
    .required("This field is required."),
  email: yup
    .string()
    .email('Email is invalid')
    .required("This field is required."),
  password: yup
    .string()
    .min(8, "Password is too short.")
    .required("This field is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),  
  age: yup
    .number()
    .positive()
    .integer()
    .required('This field is required.'),
  city: yup
    .string()
    .required('This field is required.'),
  gender: yup
    .string()
    .required("Please select your gender.")      
});

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));




export const Signup = () => {  
  const classes = useStyles();
  
  const apiUrl = 'http://localhost:5000/api/v1/users/signup';
  const submitForm = (values) => {
    axios
      .post("http://localhost:5000/signup", values)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            age: "",
            city: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await axios.post
            // console.log(values);
            // alert('SUCCESS!!\n\n' + JSON.stringify(values));
            setSubmitting(false);
          }}
        >
          
          {({ errors, handleChange, touched, handleSubmit, isSubmitting, values, setFieldValue }) => (
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.firstName && touched.firstName}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
                    value={values.firstName}
                    id="firstName"
                    label="First Name"
                    autoFocus
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.lastName && touched.lastName}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
                    value={values.lastName}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
                    value={values.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.password && touched.password}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.confirmPassword && touched.confirmPassword}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} 
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center" >
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  name="gender"
                  value={values.gender}
                  id="gender"
                  options={["Male", "Female", "Other"]}
                  component={FormikRadioGroup}
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.age && touched.age}
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    onChange={handleChange}
                    value={values.age}
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="age"
                    helperText={
                      errors.age && touched.age
                        ? errors.age
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.city && touched.city}
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    onChange={handleChange}
                    value={values.city}
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                    helperText={
                      errors.city && touched.city
                        ? errors.city
                        : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
