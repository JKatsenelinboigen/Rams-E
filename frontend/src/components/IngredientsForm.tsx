import React, { useState } from 'react';
import { Button, Card, Container, Grid, TextField,  } from '@mui/material';
import { isEditable } from '@testing-library/user-event/dist/utils';


interface IngredientsFormFunction{
    parentSetArray: Function
}

function IngredientsForm(props: IngredientsFormFunction){

    const [ingredientsList, setIngredientsList] = useState<string[]>([]);
    const [newIngredient, setNewIngredient] = useState(""); 


    function handleAddIngredient(ingredient: string){

        var csv = ingredient.split(",")

        console.log("ings" + ingredientsList);
        if(newIngredient.length > 0){

            var newList = [...ingredientsList, ...csv]
            setIngredientsList(newList);
            props.parentSetArray(newList);

            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(event: React.MouseEvent<HTMLButtonElement> ){

        var index = parseInt(event.currentTarget.id);
        var newList = [...ingredientsList]
        newList.splice(index, 1);
        setIngredientsList(newList);

    }

    var i = -1;
    var output = (
        <Container key={"" + ingredientsList} style={{marginBottom: "5%"}}>
            
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TextField id="newIngredient" style={{width:"100%"}} value= {newIngredient} helperText={"Enter ingredients one at a time or comma separated. Eg: \"Bacon, eggs, cheese\" "} onChange={(e) =>
                        setNewIngredient(e.currentTarget.value)
                    }/>
                </Grid>
                <Grid item xs={2}>
                    <Button style={styles.addButton} id="addIngredient" variant="contained" onClick={() => {
                        handleAddIngredient(newIngredient);
                    }}> + </Button>
                </Grid>

            </Grid>
            
            <Grid direction="row" container spacing={2} style={styles.grid}>
                {ingredientsList.map(function(ingredient) {
                    i++;
                    console.log(ingredientsList)
                    return (
                        <Grid item key={ingredient} xs={3}>
                            <Card style={styles.inputIngredient} id={"" + i}>
                                {ingredient}
                                <Button id={"" + i} variant="contained" onClick={(e) => {
                                    handleRemoveIngredient(e);
                                }}>x</Button>
                            </Card>
                            

                        </Grid>
                    )
                })}
            </Grid>

        </Container>   
    )

    return output
}

const styles = ({
    addButton:{
        backgroundColor: "#a65021",
        width: "100%",
        height: "70%",
    },
    inputIngredient:{
        fontFamily: "Garamond",
        width:"90%",
        fontSize: "24px",
        display: 'flex',        
        justifyContent: "space-between",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"2%",
        paddingBottom:"2%"
    },
    grid:{
       
    }
})


export default IngredientsForm;