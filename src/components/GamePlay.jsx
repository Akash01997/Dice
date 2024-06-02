import NumberSelecter from "./NumberSelecter";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";



const GamePlay = ()=>{
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] =  useState(1);

    const[error, setError] = useState("");

    const[showRule, setShowRule] = useState(false)
    const GenerateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }
    const roleDice = ()=>{

        if(!selectedNumber) {
            setError("You have not Selected any Number")
            return
        }
        const randomNumber = GenerateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);
        

        if(selectedNumber ===randomNumber){
            setScore(prev => prev + randomNumber);
        }else{
            setScore(prev => prev -2)
        }

        setSelectedNumber(undefined)
    }
    const resetScore = ()=>{
        setScore(0)
    }

    
    return(
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}/>
                <NumberSelecter 
                error={error}
                setError = {setError}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}/>
                
            </div>
            <RollDice
            currentDice={currentDice}
            roleDice={roleDice}/>

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button
                onClick={()=> setShowRule(prev =>!prev)}
                >{
                    showRule ? "Hide" : "Show"
                    }
                    Show Rules</Button>
            </div>

        {showRule && <Rules />}
        </MainContainer>   
    )
}

export default GamePlay;

const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding-top: 17px;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap : 10px;
        align-items: center;
    }
`