import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Styled components for items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#303030',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '40px',
  width: '180px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FullPageContainer = styled(Box)({
  height: '100vh',
  backgroundColor: '#202020',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const RectangleBox = styled(Box)(({ theme }) => ({
  width: '81%',
  height: '60px',
  backgroundColor: '#505050',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  marginTop: '50px',
  color: theme.palette.text.primary,
  fontSize: '40px',

}));


const CenterItem = styled(Item)({
  height: '400px',
  width: '130px',
  backgroundColor: '#505050',
});

const button = styled(Item)({
  height: '70px',
  width: '130px',
  backgroundColor: '#505050',
});

const CustomHeightItem = styled(Item)({
  height: '90px',
});

const ShiftedFrame = styled(CustomHeightItem)({
  marginLeft: '60px',
});

const ShiftedFrame13 = styled(CustomHeightItem)({
  marginRight: '60px',
  

});

const Line = styled('svg')({
  position: 'absolute',
  left: '94.5%',
  transform: 'translateY(-50%)',
});

const Line1 = styled('svg')({
  position: 'absolute',
  left: '75.35%',
  transform: 'translateY(50%)',
});

const Line2 = styled('svg')({
  position: 'absolute',
  left: '40%',
  transform: 'translateY(50%)',
});

const VerticalLine = styled('div')({
  width: '1px',
  height: '186.5px',
  backgroundColor: 'white',
  position: 'absolute',
});

const HorizontalLine = styled('div')({
  width: '1px',
  height: '186.5px', 
  backgroundColor: 'white',
  position: 'absolute',
});

const HorizontalLine2 = styled('div')({
  width: '50px', 
  height: '1px',
  backgroundColor: 'white',
  position: 'absolute',
});

const HorizontalLine3 = styled('div')({
  width: '27.5px', 
  height: '1px',
  backgroundColor: 'white',
  position: 'absolute',
});

function HorizontalLineComponent3({ leftPosition, topPosition }) {
  return (
    <HorizontalLine3
      style={{
        left: leftPosition,  
        top: topPosition,    
      }}
    />
  );
}

function HorizontalLineComponent({ leftPosition, topPosition }) {
  return (
    <HorizontalLine2
      style={{
        left: leftPosition,  
        top: topPosition,    
      }}
    />
  );
}


function VerticalLineComponent({ leftPosition, topPosition }) {
  return (
    <VerticalLine
      style={{
        left: leftPosition, 
        top: topPosition,
      }}
    />
  );
}



function FrameWithLine({ frameName, lineStartY }) {
  return (
    <CustomHeightItem>
      {frameName}
      <Line width="32" height="45">
        <line
          x1="0"
          y1={lineStartY}
          x2="50"
          y2={lineStartY}
          stroke="white"
          strokeWidth="2"
        />
      </Line>
    </CustomHeightItem>
  );
}

function FrameWithLineBottom({ frameName, lineStartY }) {
  return (
    <CustomHeightItem>
      {frameName}
      <Line1 width="32" height="45">
        <line
          x1="0"
          y1={lineStartY}
          x2="50"
          y2={lineStartY}
          stroke="white"
          strokeWidth="2"
        />
      </Line1>
    </CustomHeightItem>
  );
}

function FrameWithLineBottom2({ frameName, lineStartY }) {
  return (
    <CustomHeightItem>
      {frameName}
      <Line2 width="32" height="45">
        <line
          x1="0"
          y1={lineStartY}
          x2="50"
          y2={lineStartY}
          stroke="white"
          strokeWidth="2"
        />
      </Line2>
    </CustomHeightItem>
  );
}


function FrameWithLines({ frameName }) {
  return (
    <CustomHeightItem>
      {frameName}
      {/* First horizontal line */}
      <svg width="51.5" height="45" style={{ position: 'absolute', bottom: '334px', left: '42.15%' }}>
        <line x1="0%" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" />
      </svg>
      {/* Second horizontal line */}
      <svg width="76" height="45" style={{ position: 'absolute', bottom: '334px', left: '54.84%' }}>
        <line x1="0%" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" />
      </svg>
    </CustomHeightItem>
  );
}

export default function TournamentBracket() {
  return (
    <FullPageContainer>
      <RectangleBox>
        Tournament Title
      </RectangleBox>

      <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        <Grid container item xs={2} direction="column" spacing={8} alignItems="center" style={{ position: 'relative' }}>
          <Grid item>
            <FrameWithLine frameName="Team 1" lineStartY="45" />
          </Grid>
          <Grid item>
            <FrameWithLine frameName="Team 2" lineStartY="45" />
          </Grid>
          <Grid item>
            <FrameWithLine frameName="Team 3" lineStartY="45" />
          </Grid>
          <Grid item>
            <FrameWithLine frameName="Team 4" lineStartY="45" />
          </Grid>
        </Grid>

        <Grid container item xs={2} direction="column" spacing={8} alignItems="center">
          <Grid item>
            <CustomHeightItem>Conference Semis</CustomHeightItem>
          </Grid>
          <Grid item>
            <ShiftedFrame>Conference Finals</ShiftedFrame>
          </Grid>
          <Grid item>
            <CustomHeightItem>Conference Semis</CustomHeightItem>
          </Grid>
        </Grid>

        <Grid container item xs={2} direction="column" spacing={4} justifyContent="center" alignItems="center">
          <Grid item>
            <CenterItem>Finals</CenterItem>
          </Grid>
          <Grid item>
            <button>GENERATE</button>
          </Grid>
        </Grid>

        <Grid container item xs={2} direction="column" spacing={8} alignItems="center" >
          <Grid item>
            <FrameWithLines frameName="Conference Semis" />
          </Grid>
          <Grid item>
            <ShiftedFrame13>Conference Finals</ShiftedFrame13>
          </Grid>
          <Grid item>
            <FrameWithLines frameName="Conference Semis" />
          </Grid>
        </Grid>

        <Grid container item xs={2} direction="column" spacing={8} alignItems="center">
          <Grid item>
            <FrameWithLineBottom frameName="Team 5" />
          </Grid>
          <Grid item>
            <FrameWithLineBottom frameName="Team 6" />
          </Grid>
          <Grid item>
            <FrameWithLineBottom frameName="Team 7" />
          </Grid>
          <Grid item>
            <FrameWithLineBottom frameName="Team 8" />
          </Grid>
        </Grid>

        
      </Grid>
    {/* Vertical Lines */}
    <VerticalLineComponent leftPosition="24.83%" topPosition="280.35px" />
      <VerticalLineComponent leftPosition="24.83%" topPosition="651.9px" />
      <VerticalLineComponent leftPosition="75.35%" topPosition="280.35px" />
      <VerticalLineComponent leftPosition="75.35%" topPosition="652.99px" />

      

      {/* Horizontal Lines */}
      <HorizontalLineComponent leftPosition="24.84%" topPosition="40%" />
      <HorizontalLineComponent leftPosition="24.84%" topPosition="80%" />
      <HorizontalLineComponent3 leftPosition="73.71%" topPosition="40%" />
      <HorizontalLineComponent3 leftPosition="73.71%" topPosition="80%" />
    
    </FullPageContainer>
  );
}
