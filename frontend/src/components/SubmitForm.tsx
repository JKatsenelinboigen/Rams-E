import React, { useState } from 'react';
import { Button, Container, TextField,  } from '@mui/material';
import { isEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

interface SubmitProps {
    ingredients: Array<string>,
    setWrittenRecipe: Function,
    setImage: Function,
    setIsRecipeLoading: Function,
    setIsImageLoading: Function,
};


export async function requestGeneratedRecipe(ingredientsList: Array<string>){

    var URL = "http://localhost:8000/getRecipe?"

    ingredientsList.forEach(element => {
        URL += `&i=${element}`
    });
    
    console.log(URL)

    let res = await axios.get(URL)
    .then(res => {
        return res
    })

    return res.data
}

export async function requestGeneratedImage(prompt: string){
    var URL = "http://localhost:8000/getImage?prompt=\"" + prompt + "\""
    // console.log(URL)

    let res = await axios.get(URL)
    .then(async (link) => {
        
        return link.data
    })
    
    return res
}
    



function SubmitForm(props: SubmitProps){

    function onSubmit(props: SubmitProps){
        
        props.setIsImageLoading(true);
        props.setIsRecipeLoading(true);
        requestGeneratedRecipe(props.ingredients).then(res => (
            props.setWrittenRecipe(res.choices[0].text),
            props.setIsRecipeLoading(false),
            console.log(res),

            

            requestGeneratedImage(res.choices[0].text.replace(/\s/g, " ")).then(img => (
                props.setImage(img),
                props.setIsImageLoading(false)
            ))

        ));


    }

    return (
        <Button style={styles.submitButton} variant="contained" onClick={() => onSubmit(props)}>SUBMIT</Button>
    )
}   

const styles = ({
    submitButton:{
        width:"100%", 
        fontFamily:"Calibri",
        fontSize:"25px",
        paddingTop:"1%",
        backgroundColor:"#69625F",
        borderRadius:"25px",
        marginBottom:"5%"
        
    }
})

export default SubmitForm;