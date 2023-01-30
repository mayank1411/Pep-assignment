import React from 'react'
import { useState } from 'react';
import { Button, Grid,Segment } from 'semantic-ui-react';
const Card = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <Segment raised>
    <Grid>
      <Grid.Row centered>
      <h2>Count</h2>
      </Grid.Row>
    
      <Grid.Row centered>
          <h2>{count}</h2>
      </Grid.Row>

    <Grid.Row columns='equal'>
      <Grid.Column centered>
        <Button positive onClick={()=>setCount(count+1)}>Increment</Button>
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