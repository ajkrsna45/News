import React,{useState} from "react"
import Icons from "./Icons"
// Tostify importing
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// bootstrap importing
import { Button,Container,Card,CardBody,Row,Col } from 'reactstrap';
import './bootstrap.css';

import "./App.css"

const tiktacArray=new Array(9).fill("")
const App=()=>{
    let [isCross,setIsCross]=useState(true)
    let [winMessage,setWinMessage]=useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")

    }
    const findWinner=()=>{
        if(tiktacArray[0]==tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
            setWinMessage(tiktacArray[0]+ " has Won")
        }
        else if(tiktacArray[3]==tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
            setWinMessage(tiktacArray[3]+ " has Won")
        }
        else if(tiktacArray[6]==tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
            setWinMessage(tiktacArray[6]+ " has Won")
        }
        else if(tiktacArray[0]==tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]!=""){
            setWinMessage(tiktacArray[0]+ " has Won")
        }
        else if(tiktacArray[1]==tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]!=""){
            setWinMessage(tiktacArray[1]+ " has Won")
        }
        else if(tiktacArray[2]==tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]!=""){
            setWinMessage(tiktacArray[2]+ " has Won")
        }
        else if(tiktacArray[0]==tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]!=""){
            setWinMessage(tiktacArray[0]+ " has Won")
        }
        // else{
        //     setWinMessage("Play Again")

        // }

    }
    const changeItem=(index)=>{
        if(winMessage){
            return toast("Game is already got over",{type:"success"})
            
        }
        if(tiktacArray[index]==""){
            tiktacArray[index]=isCross? "cross":"circle"
            setIsCross(!isCross)
        }
        else{
            return toast("This is already occupy",{type:"error"})
        }
        findWinner()
    }
    
    return(
        // <div>
        //     <Icons choice="circle"/>
        // </div>
        <Container className="p-5">
            <Row className="row">
                <Col md={6} className="offset-md-3">
                    {
                        winMessage?(
                            <div>
                                 <h1 className="text-center">
                                {winMessage}
                            </h1>
                            <Button onClick={playAgain}>Play Again</Button>
                            </div>
                         ):(
                            <h1>
                                {isCross?"cross's turn":"Circle's Turn"}
                            </h1>
                         )
                        // to display the winner______________for mapping the index and value both_map() function use
                    }
                    <div className="grid">
                        {tiktacArray.map((value,index)=>(
                            <Card onClick={()=>changeItem(index)}>
                                <CardBody className="box">
                                    <Icons choice={tiktacArray[index]}></Icons>

                                </CardBody>
                            </Card>
                        ))}
                        
                    </div>
                </Col>

            </Row>

        </Container>
    )
}
export default App
