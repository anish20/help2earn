import React from 'react'
import styles from './Auth.module.css'
import { Grid, Typography } from '@mui/material';
import { Button, Input } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <Grid className={styles.Wrapper}>
    <Container>
      <Grid className={styles.BoxContainer}>
        <Grid className={styles.TopLogo}>
          <Image src={"/images/logo.png"} width={80} height={80}  />
        </Grid>
        <Grid className={styles.ItemsBox}>
          <Grid className={styles.Item}>
           <Typography variant='h2'>login to your account</Typography>
            <Grid className={styles.FormContainwr}>
                <Row className={styles.SpaceColumn}>
                    <Col sm={12} md={12} lg={12}>
                        <Input  autoComplete={"off"} className={styles.Input} placeholder='Username' />
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                        <Input.Password autoComplete={"off"} className={styles.Input} placeholder='Password' />
                    </Col>
                </Row>
            </Grid>
           <Grid className={styles.ButtonContainer}>
              <Button>Log In</Button>
              <Typography><Link href={"/auth/forgot"}>Forgot Password</Link></Typography>
           </Grid>
          
          </Grid>
         
        </Grid>
        <Grid className={styles.BottomText}>
            <Typography>You don’t have an account? <Link href={"/auth/register"}>Register</Link></Typography>
          <Typography>Read our <span>Terms&Conditions</span></Typography>
        </Grid>
      </Grid>
    </Container>
  
</Grid>
  )
}

export default Login
