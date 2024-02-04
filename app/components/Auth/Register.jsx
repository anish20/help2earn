import React from 'react'
import styles from './Auth.module.css'
import { Grid, Typography } from '@mui/material';
import { Button, Input } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <Grid className={styles.Wrapper}>
    <Container>
      <Grid className={styles.BoxContainer}>
        <Grid className={styles.TopLogo}>
          <Image src={"/images/logo.png"} width={80} height={80}  />
        </Grid>
        <Grid className={styles.ItemsBox}>
          <Grid className={styles.Item}>
           <Typography variant='h2'>create your account</Typography>
            <Grid className={styles.FormContainwr}>
                <Row className={styles.SpaceColumn1}>
                    <Col sm={12} md={12} lg={12} xl={12} style={{width:"100%"}}>
                        <Input  autoComplete={"off"} className={styles.Input} placeholder='Mobile No.' />
                    </Col>
                  
                </Row>
            </Grid>
           <Grid className={styles.ButtonContainer}>
              <Button>Proceed</Button>
              <Typography><Link href={"/auth/forgot"}>Forgot Password</Link></Typography>
           </Grid>
          
          </Grid>
         
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
