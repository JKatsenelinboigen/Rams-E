import React, { useState } from 'react';
import {Card } from '@mui/material';

interface RecipeProps{
    writtenRecipe: string
}


function Recipe(props: RecipeProps){

    return(
        <Card style={styles.writtenRecipe}> {props.writtenRecipe.trim()} </Card>
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