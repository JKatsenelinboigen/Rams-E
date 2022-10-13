import React, { useState } from 'react';
import { Box, Card, CircularProgress, Container, Divider, Grid } from '@mui/material';

function Footer(){

    return(

        <Container>
            <Card style={styles.headerText}>
                <div>Written and design by Joseph Katsenelinboigen </div>
                <div>GitHub: https://github.com/jkatsenelinboigen </div>
                
                <div>Language model provided by https://openai.com/api/ </div>
                <div>Image generation and diffusion by https://replicate.com/stability-ai/stable-diffusion </div>
               
            </Card>
        </Container>
    )
}

const styles = ({
    headerText: {
        color: "#FFF",
        padding: "2%",
        fontFamily: "Calibri",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a65021",
        borderWidth: "2px",
        borderColor: "#000",
        borderRadius:"16px",
        marginBottom:"5%"
      },
})

export default Footer;