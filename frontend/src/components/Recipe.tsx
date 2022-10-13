import React, { useState } from 'react';
import { Button, Container, Paper, TextField,  } from '@mui/material';
import { isEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

interface RecipeProps{
    writtenRecipe: string
}



function Recipe(props: RecipeProps){

    return(
        <Paper style = {styles.writtenRecipe}> {props.writtenRecipe.trim()} </Paper>
    );
}

const styles = ({
    writtenRecipe: {
        backgroundColor: "#FFF",
        whiteSpace: 'pre-line',
        fontFamily: 'garamond',
        fontSize: "24px",
        padding:"2%",
        borderRadius:"5%"
        
    } as React.CSSProperties
})


export default Recipe;