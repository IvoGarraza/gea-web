import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos';
import CountUp from 'react-countup'


const Cards2 = (props) =>{
    useEffect(()=>{
      AOS.init({duration:1000});
    },[])
      return(
          <CardStyle2>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration}>
                  <img src={props.img}></img>
                  <h2>{props.title1}</h2>
                  <CountUp className='contador' end={props.number1} duration={3}></CountUp>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration2}>
                  <img src={props.img2}></img>
                  <h2>{props.title2}</h2>
                  <CountUp className='contador' end={props.number2} duration={3}></CountUp>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration3}>
                  <img src={props.img3}></img>
                  <h2>{props.title3}</h2>
                  <CountUp className='contador' end={props.number3} duration={3}></CountUp>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration4}>
                  <img src={props.img4}></img>
                  <h2>{props.title4}</h2>
                  <CountUp className='contador' end={props.number4} duration={3}></CountUp>
              </div>
          </CardStyle2>
      )
  }
  
  export default Cards2

  const CardStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1%;
    margin-top: 3%;
    margin-bottom: 5%;
    .card{
        margin: 1%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        border-radius: 3%;
        align-items: center;
    }
    .card img{
      width: 30%;
      
    }
`
const CardStyle2 = styled.div`
     display: flex;
    flex-direction: row;
    margin: 1%;
    margin-top: 3%;
    margin-bottom: 5%;
    text-align: center;
    .card{
        margin: 1%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-radius: 46px;
        background: #ffffff;
        box-shadow:  -7px -7px 14px #dedede,
                        7px 7px 14px #ffffff;
        align-items: center;
        width: 25%;
        
    }
    .card img{
      width: 30%;
      
    }
    .contador{
      font-weight: bolder;
    }
`
