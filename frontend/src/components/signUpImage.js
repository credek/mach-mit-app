import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import FormLabel from '@material-ui/core/FormLabel';
import FormikRadioGroup from "./radioGroupFormik"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';





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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const responseGoogle = (response) => {
    console.log(response);
  }

const responseFacebook = (response) => {
    console.log(response);
  }

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            gender: "",
            age: "",
            city: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
            alert('SUCCESS!!\n\n' + JSON.stringify(values))
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
              <Grid item xs={12}>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
                
                  </ Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.firstName && touched.firstName}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onChange={handleChange}
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
                
                <Grid item xs={12} 
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center" >
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  name="gender"
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
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      </Grid>
    </Grid>
  );
}