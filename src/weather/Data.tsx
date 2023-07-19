import React, { ChangeEvent, useState } from "react";
import Axios from "axios";
import { Button, ButtonGroup, Card, CardGroup,Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { styled } from "styled-components";
import axios from "axios";


const Tag=styled(Card)`
background-color:skyblue;
width:50%;
height:50%;
text-align:center;
box-shadow: 1px 1px 10px 1px grey;
margin-top:10%;
margin-left:25%;
position:center;
/* &:hover {
    background-color: red;
  } */
`
const Tag1=styled(Card)`
background-color:lightgreen;
width:50%;
height:50%;
text-align:center;
box-shadow: 1px 1px 10px 1px grey;
margin-top:10%;
margin-left:25%;
position:center;
    
`





const Cont=styled.div`
box-shadow:black;
width:100%;
height:50%;



`
const Field=styled.input`
    width:100%;
border: none;
`
const Fd= styled(Form)`
width:50%;
margin-left:25%;
`
const Line = styled.div`
width:50%;
    margin-left:25%;
    
    
`




const Data=()=>
{
    const [input, setInput]=useState('')
    const [temp, setTemp]=useState('')
    const [disk, setDisk]=useState('')
    const [icon, setIcon]=useState<any>('')   
       
    const findWeather=async()=>{
        const apikey ="3cab4ff99fa3e3cfab76d3de1208011e";
        const unit ="matric"
        const url="https://api.openweathermap.org/data/2.5/weather?q="+input+ "&appid=" +apikey+ "&units="+unit;
        const response= await axios.get(url);
        const temp= await response.data.main.temp;
        const disk=await response.data.weather[0].description;
        const icon = await response.data.weather[0].icon;
        const imageURL="https://openweathermap.org/img/wn/" +icon +"@2x.png"
        console.log(temp,disk,imageURL)
        setTemp(temp)
        setDisk(disk)
        setIcon(imageURL)
        setInput('')
      
    }

const handleChange=(event:any): void=>{
    setInput(event.target.value)
    }
    const handleClick=(event:any)=>{
        event.preventDefault();
        findWeather();
    }

    return(
        <Cont>
            {temp ===''?
    (<Tag>
        <CardHeader>
           <h3>Weather app</h3>
           <img src="http://openweathermap.org/img/w/10d.png"/>
        </CardHeader>
        <CardGroup>
            <Fd >
            <Field placeholder="Enter the city name" onChange={handleChange} value={input} type="text"></Field>
            <br></br>
            <Button type="submit" onClick={handleClick} >Search</Button>
            </Fd>
            
        </CardGroup>
    </Tag>):
    (<Tag1>
    <CardHeader>
           <h3>Today weather</h3>
          
         
    </CardHeader>
    <CardGroup>
    <Line>
    <img src={icon} alt="logo"/>
           <h4>Temperature:{temp}</h4>
        <h4>Description:{disk}</h4>
        <Button variant="secondary" onClick={()=>setTemp('')}>Back</Button>
        </Line>
            

            
    </CardGroup>

    </Tag1>)
    
}
    </Cont>
    
    

    )
}
export default Data;