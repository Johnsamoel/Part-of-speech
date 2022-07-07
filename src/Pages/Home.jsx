import { Button, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import {useState } from 'react';


import WordContainer from '../Components/WordContainer';


const Home = () => {
    // static data for simulating back end call
    const Data = ['Tara' , 'mostafa' , 'Efficiency' , 'Efficient' , 'Stop!' , 'works' , 'working' , 'animals' , 'Well' , 'She'  ]
    const [ Words  ] = useState(Data);
    // word counter used for indexing and showing the upcoming word 
    const [WordsCounter , setWordsCounter] = useState(0);
    // used for showing the chosen answer
    const [Answer , setAnswer] = useState('');
    // used for recording student's answers
    const  [AllAnswers, setAllAnswers] = useState([])
    // answers buttons data
    const Chocies = [ {title:'noun' , id:"1"} , {title:'Adjective' , id:"2"} , {title:'verb' , id:'3'} , {title:'adverb' , id:'4'} ]
    // creating error state 
    const [ErrorMessage , setErrorMessage] = useState('');
    const Navigate = useNavigate()

    // fn used to set the student answer
    const SetAnswerHandler = (ans) => {
        setAnswer(ans)
    }

    // fn used to submit the answer and push it to answers history and change the counter
    const SubmitionHandler = () => {
        setErrorMessage('')

        
        if(Answer === '') {
           setErrorMessage('You should choose an answer')
           console.log(WordsCounter)

        } else if (WordsCounter === 9 ){
            setAllAnswers( (prevans) => [...prevans , Answer]  )
            console.log(WordsCounter)
            localStorage.setItem('answers' , AllAnswers)
            //here's a bug  once we use Navigation we don't store the final result Altough it's the last step !!! bug
            Navigate('/result')
        }
        else{
            // error here in the second push the array received in undefined for some reason ???
            setAllAnswers( (prevans) => [...prevans , Answer]  )
            setWordsCounter((counter) => counter+= 1)
            setAnswer("")
            console.log(WordsCounter)
        }

       console.log( 'All answers logging' , AllAnswers , WordsCounter)
    }

    return (
     <Box sx={{padding:'7rem'}}>
        <Stack justifyContent='space-around' alignItems='center' gap={5}>
        <WordContainer>{Words[WordsCounter]}</WordContainer>

        <Grid container gap={1} justifyContent="center" alignItems='center'>
            {/* showing  answers buttons */}
        {Chocies.map( choice  =>    { return (
          
        <Grid key={choice.id}  item lg={2} md={4} sm={4} xs={6}  onClick = { () => { SetAnswerHandler.call(this, choice.title) } } > 
        <Button variant="contained" sx={{width:'100%' }}>{choice.title}</Button>
        </Grid>  )})}
        
        </Grid>

        
        <Box> the answer is <strong>{Answer}</strong> </Box>

        <Button  variant="contained" onClick={SubmitionHandler}>Submit</Button>

       { ErrorMessage && <Typography sx={{fontWeight:'900px' , color:'#f50057'}}>{ErrorMessage}</Typography>}
        </Stack>
     </Box>
    );
};

export default Home;