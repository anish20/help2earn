
import React, { use } from 'react';
import styles from './Auth.module.css'
import { Grid, Typography } from '@mui/material';
import { Button } from 'antd';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const AuthScreen = () => {
  return (
    <Grid className={styles.Wrapper}>
        <Container>
          <Grid className={styles.BoxContainer}>
            <Grid className={styles.TopLogo}>
              <Image src={"/images/logo.png"} width={80} height={80}  />
            </Grid>
            <Grid className={styles.ItemsBox}>
              <Grid className={styles.Item}>
               <Typography variant='h2'>user account</Typography>
               <Grid className={styles.ButtonContainer}>
                  <Typography>You have an account?</Typography>
                  <Link href={"/auth/login"}><Button>Log In</Button></Link>
               </Grid>
               <Grid className={styles.ButtonContainer}>
                  <Typography>You have an account?</Typography>
                  <Button>Register</Button>
               </Grid>
              </Grid>
              <Grid className={styles.HrLine}></Grid>
              <Grid className={styles.Item}>
              <Typography variant='h2'>search registerd member</Typography>
               <Grid className={styles.ButtonContainer}>
                  <Button>Search Help2Earn</Button>
               </Grid>
               <Grid className={styles.ButtonContainer}>
                  <Button>About</Button>
               </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.BottomText}>
              <Typography>Read our <span>Terms&Conditions</span></Typography>
            </Grid>
          </Grid>
        </Container>
      
    </Grid>
  )
}

export default AuthScreen
