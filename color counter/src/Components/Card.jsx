import React from 'react'
import { useState } from 'react';
import { Button, Grid,Segment } from 'semantic-ui-react';
const Card = () => {
  const green = {
    "color" : "green"
  }
  const blue = {
    color : "blue"
  }
  const red = {
    color : "red"
  }
    const [count, setCount] = useState(0)
    // const [color, setColor] = useState(green);
    
      
    // const Increment = () =>{
    //   setCount(count+1);
    //   if(count >= 4 && count<= 8){
    //     setColor(blue)
    //   }
    //   else if(count > 9){
    //     setColor(red)
    //   }
    // }
    // const Decrement = () =>{
    //   setCount(count-1);
    //   if(count >= 4 && count<= 8){
    //     setColor(blue)
    //   }
    //   else if(count > 9){
    //     setColor(red)
    //   }
  return (
    <>
    <Segment raised>
    <Grid>
      <Grid.Row centered>
      <h2>Count</h2>
      </Grid.Row>
    
      {count>=0 && count<=4 && <Grid.Row centered>
          <h1 style={green}>{count}</h1>
      </Grid.Row>}
      {count>=5 && count <= 9 &&<Grid.Row centered>
          <h1 style={blue}>{count}</h1>
      </Grid.Row>}
      {count === 10 &&<Grid.Row centered>
          <h1 style={red}>{count}</h1>
      </Grid.Row>}

    <Grid.Row columns='equal'>
      <Grid.Column centered>
        <Button positive onClick={()=> setCount(count+1)} disabled={count === 10} >Increment</Button>
      </Grid.Column>
      <Grid.Column centered>
      <Button negative onClick={()=>setCount(count-1)} disabled={!count}>Decrement</Button>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </Segment>
    </>
  )
}


export default Card