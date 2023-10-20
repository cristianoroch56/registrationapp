"use client"
import CustomCheckBox from '@/components/customCheckbox';
import { Box, Container, Grid, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CustomButton = dynamic(() => import('@/components/customButton'), { ssr: false }); //customButton built using Mui
const CustomTextField = dynamic(() => import('@/components/customtextfield'), { ssr: false }); //customtextfield built using Mui

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
 
  const router = useRouter()

  const handleSubmit = async () => {
    // validation before calling api
    if (!name) {
      setNameError("Please provide a name!")
    } 
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError(!email ? 'Please provide an email!' : 'Please provide a valid email address!');
     
    }
     else {
        //calling api
      try { 
        const response = await fetch('api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });
                    // checking response of api
        if (response.ok) { // opertion on succes response 
          setMessage('Form submitted successfully!');
          // router.push("/dashboard")
        } else {    // opertion on failure
          const errorData = await response.json(); 
          setMessage(errorData.message);;
        }
      } catch (error) {
        setMessage('Network error. Please try again.');
      }
    }
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{
            fontSize: '35px',
            fontWeight: 700,
            lineHeight: '41px',
            textAlign: 'left',
          }}>
            Submit your details
          </Typography>
          <Box width={'65%'} mt={6}>
            <CustomTextField
              onChange={(e)=>{setName(e.target.value),setNameError("")}}
              value={name}
              label={'Name'}
              type={"text"}
              error={nameError?true:false}
              emsg={nameError}
              sx={{ mb: 2 }}
            />
            <CustomTextField
              onChange={(e)=>{setEmail(e.target.value),setEmailError("")}}
              value={email}
              label={'Email'}
              type={"email"}
              error={emailError?true:false}
              emsg={emailError}
            />
            <CustomCheckBox label={'I want to receive updates via email.'} sx={{ mt: 6 }} />
          </Box>
          {message && ( 
            <Typography color="error" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
          <CustomButton label={'Start The Course'} onClick={handleSubmit} sx={{ mt: 6 }} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Home;
