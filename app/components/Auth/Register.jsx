import React, { useState } from 'react'
import styles from './Auth.module.css'
import { Grid, Typography } from '@mui/material';
import { Button, Input } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    const [currentStep,setCurrentStep]=useState(0);
    const handleProceed=()=>{
        setCurrentStep(1);
    }
    const handleVerifyOtp=()=>{
        setCurrentStep(2);
    }
    const handlePrevious=()=>{
        setCurrentStep(0);
    }
  return (
    <Grid className={styles.Wrapper}>
    <Container>
      <Grid className={styles.BoxContainer}>
        <Grid className={styles.TopLogo}>
          <Image src={"/images/logo.png"} width={80} height={80}  />
        </Grid>
        <Grid className={styles.ItemsBox} style={{width : currentStep==2?"45%":"30%"}}>
          {currentStep==0 && (
             <Grid className={styles.Item}>
             <Typography variant='h2'>create your account</Typography>
              <Grid className={styles.FormContainwr}>
                  <Row className={styles.SpaceColumn1}>
                      <Col sm={12} md={12} lg={12} xl={12} style={{width:"100%"}}>
                          <Input  
                          onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                              }
                          }}
                          autoComplete={"off"} className={styles.Input} placeholder='Mobile No.' />
                      </Col>
                    
                  </Row>
              </Grid>
             <Grid className={styles.ButtonContainer}>
                <Button onClick={handleProceed}>Proceed</Button>
                <Typography><Link href={"/auth/forgot"}>Forgot Password</Link></Typography>
             </Grid>
            
            </Grid>
          )}
          {currentStep==1 && (
             <Grid className={styles.Item}>
             <Typography variant='h2'>Verify OTP</Typography>
              <Grid className={styles.FormContainwr}>
                  <Row className={styles.SpaceColumn1}>
                      <Col sm={12} md={12} lg={12} xl={12} style={{width:"100%"}}>
                          <Input  
                          onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                              }
                          }}
                          maxLength={6}
                          autoComplete={"off"} className={styles.Input} placeholder='Enter OTP' 
                          addonAfter={"00:59"}
                          />
                      </Col>
                    
                  </Row>
              </Grid>
             <Grid className={styles.ButtonContainer}>
                <Button onClick={handleVerifyOtp}>Verify OTP</Button>
                <Typography><Link href={"#"} onClick={handlePrevious}>Previous to Edit</Link></Typography>
             </Grid>
            
            </Grid>
          )}
         {currentStep==2 && (
             <Grid className={styles.Item}>
             <Typography variant='h2'>My Profile</Typography>
              <Grid className={styles.FormContainwr}>
                  <Row className={styles.SpaceColumn1}>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='Consumer Name *' 
                          />
                      </Col>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='Email *' 
                          />
                      </Col>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='State *' 
                          />
                      </Col>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='District *' 
                          />
                      </Col>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='Password *' 
                          />
                      </Col>
                      <Col sm={12} md={6} lg={6} xl={6} >
                          <Input  
                            autoComplete={"off"} className={styles.Input} placeholder='Referal Consumer No (Optional)' 
                          />
                      </Col>
                  </Row>
              </Grid>
             <Grid className={styles.ButtonContainer}>
                <Button onClick={handleProceed}>Create Account</Button>
                {/* <Typography><Link href={"#"} onClick={handlePrevious}>Previous to Edit</Link></Typography> */}
             </Grid>
            
            </Grid>
          )}
        </Grid>
        <Grid className={styles.BottomText}>
            <Typography>You have an account? <Link href={"/auth/login"}>Login</Link></Typography>
          <Typography>Read our <span>Terms&Conditions</span></Typography>
        </Grid>
      </Grid>
    </Container>
  
</Grid>
  )
}

export default Register
