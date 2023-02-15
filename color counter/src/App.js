import 'semantic-ui-css/semantic.min.css';
import Card from './Components/Card';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Name from './Components/Name';

function App() {
  return (
    <>
      <Grid centered style={{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Card/>
        <Grid.Row>
        <Name/>
        </Grid.Row>
      </Grid>
      
    </>
  );
}

export default App;
