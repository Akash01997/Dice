
import styled from "styled-components";

const RollDice = ({
    roleDice, currentDice
})=>{
    
    return(
        <DiceContainer>
            <div className="dice"
            onClick={roleDice}> 
                <img src={`/public/images/${currentDice}.png`}/>
            </div>
            <p>Click On Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top :48px;
    cursor: pointer;

    p{
        font-size: 24px;
    }
`