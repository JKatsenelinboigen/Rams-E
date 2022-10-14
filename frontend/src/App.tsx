import React, { useState } from 'react';
import { Box, Card, CircularProgress, Container, Divider, Grid } from '@mui/material';
import IngredientsForm from './components/IngredientsForm';
import SubmitForm from './components/SubmitForm';
import Recipe from './components/Recipe';

function App() {

  const [ingredientsList, setIngredientsList] = useState<string[]>([]);
  const [writtenRecipe, setWrittenRecipe] = useState<string>("");
  const [imageSrc, setImageSrc] = useState("");

  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
      

  var output = (
    <Container sx={{ boxShadow: 10 }}>
      <Card style ={styles.headerText} > 
        <h1>RAMS-E: </h1>
        <h2>A GPT-3 based AI recipe generator.</h2>
        <h3>100% unique, original recipes at the press of a button.</h3>  
      </Card>


      <IngredientsForm parentSetArray={setIngredientsList}/>
      <SubmitForm ingredients={ingredientsList} setWrittenRecipe={setWrittenRecipe} setImage={setImageSrc} setIsRecipeLoading={setIsRecipeLoading} setIsImageLoading={setIsImageLoading}/>
      
    </Container>
  );

  
  var recipe;
    if(isRecipeLoading == true){
      recipe = (
        <Container style={styles.loadingText}>
          Loading... <CircularProgress />
        </Container>
      )
    }else{
      console.log("isloading false")
      recipe = (
        <Container >  
          <Recipe writtenRecipe={writtenRecipe} />
        </Container> 
      )
    }

  var image;
  if(isImageLoading == true){
    image = (
      <Container style={styles.loadingText}>
        Loading... <CircularProgress />
      </Container>
    )
  }
  else{
      console.log("img printing")
      image = (
        <Container style={styles.loadingText}>  
          <Box component={"img"} src={imageSrc}></Box>
        </Container> 
      )
    }
  return (
    <>
    {output},
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>{recipe}</Grid>
          <Grid item xs={6}>{image}</Grid>
        </Grid>
      </Container>

      {/* <Footer/> */}
    </>
  );

}

const styles = ({
  headerText: {
    color: "#FFF",
    padding: "2%",
    fontFamily: "Garamond",
    backgroundColor: "#a65021",
    borderWidth: "2px",
    borderColor: "#000",
    borderRadius:"16px",
    marginBottom:"5%",
    paddingTop: '3%'
  },
  loadingText:{
    fontFamily: "Garamond",
    fontSize: "32px",
    alignItems: "center"
  },
  submitButton:{
    width:"100%"
  }
})
export default App;
