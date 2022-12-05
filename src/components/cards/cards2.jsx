import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos';
import CountUp from 'react-countup'
import Contador from "../contador/contador";


const Cards2 = (props) =>{
    useEffect(()=>{
      AOS.init({duration:1000});
    },[])
      return(
          <CardStyle2>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration}>
                  <img className='icon' src={props.img}></img>
                  <CountUp className='contador' end={props.number1} duration={3}></CountUp>
                  <h2>{props.title1}</h2>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration2}>
                  <img className='icon' src={props.img2}></img>
                  <CountUp className='contador' end={props.number2} duration={3}></CountUp>
                  <h2>{props.title2}</h2>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration3}>
                  <img className='icon' src={props.img3}></img>
                  <CountUp className='contador' end={props.number3} duration={3}></CountUp>
                  <h2>{props.title3}</h2>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration={props.duration4}>
                  <img className='icon' src={props.img4}></img>
                  <CountUp className='contador' end={props.number4} duration={3}></CountUp>
                  <h2>{props.title4}</h2>
              </div>
          </CardStyle2>
      )
  }
  
  export default Cards2

const CardStyle2 = styled.div`

    @media (max-width:764px) {
      display: grid;
      grid-template-columns: 50% 50%;
      margin-top: 10%;
      margin-bottom: 10%;
      align-items: center;
    }
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 3%;
    margin-bottom: 5%;
    .card{
        margin: 5%;
        padding: 5%;
        box-shadow: 1px 1px 10px black;
        justify-content: space-between;
        font-size: 80%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        border-radius: 3%;
        border-bottom: 5px  solid #da9500;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width:764px) {
          box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 40px -7px;
        }
        .icon{
          width: 30%;
          
        }
      }
      .contador{
        font-weight: bolder;
      font-size: 200%;
      } 
`
