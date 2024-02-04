import { Grid } from "@mui/material";
import styles from './loading.module.css'
import Image from "next/image";
export default function Loading() {
    <Grid className={styles.LoadingWraper}>
         <Image src={"/images/logo.png"} width={100} height={100}  />
    </Grid>
  }