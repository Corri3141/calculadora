import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function App() {
  const [position,setPosition] = useState(null)
  const [time,setTime] = useState(null)
  const [speed,setSpeed] = useState(null)

  const [result,setResult] = useState(null)

  const resultCalculator = () => {
    if(!position && time && speed){
      setResult({positionVariation:eval(speed)*eval(time),time:eval(time),speed:eval(speed)})
    }else if(position && !time && speed){
      setResult({ time:eval(position)/eval(speed),positionVariation:eval(position),speed:eval(speed)})
    }else if(position && time && !speed){
      setResult({ speed:eval(position)/eval(time),positionVariation:eval(position),time:eval(time)})
    }
  }

  return (
    <div>
    <div>
      Position Variation:<input type="text" onChange={(event)=>setPosition(event.currentTarget.value)} />
      Time Variation :<input type="text" onChange={(event)=>setTime(event.currentTarget.value)}/>
      Inicial Speed :<input type="text" onChange={(event)=>setSpeed(event.currentTarget.value)}/>
      <button onClick={resultCalculator}>Calculate</button>
    </div>
    {result ? <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Position Varaition</TableCell>
            <TableCell>Time Variation</TableCell>
            <TableCell>Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{result.positionVariation}km</TableCell>
              <TableCell>{result.time} hs</TableCell>
              <TableCell>{result.speed} km/h</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer> : null }
    
    </div>
  );
}

export default App;
