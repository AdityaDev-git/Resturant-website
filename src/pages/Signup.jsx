import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { Link,useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPwd, setRegisterPwd] = useState("");
  const navigate = useNavigate();
  
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPwd);
      navigate("/home");
      console.log(user);
    } catch (error) {
      alert("Invalid email / Password Entered.  Please Correct and Reenter.")
      console.log(error.message);
    }
  };
  const guest = async (e) => {
    e.preventDefault();
    await signInAnonymously(auth);
    navigate("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          my: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(event) => {
            setRegisterPwd(event.target.value);
          }}/>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={(e)=>register(e)}>
            Sign up
          </Button>
          <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2" onClick={(e)=>guest(e)}>
                  {"Login as Guest"}
                </Link>
              </Grid>
            <Grid item>
              <Link to='/login'>Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
