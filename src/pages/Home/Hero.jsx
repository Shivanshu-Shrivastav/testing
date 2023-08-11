import React from 'react'
import imgg from './../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Hero = (props) => {
    console.log(props.data,'op')
    return (

        <div style={props.data?{backgroundImage:`url(${props.data.img})`}:null} className='hero text-light'>

            
            <div className='row h-100 p-5'>

                <div className='col-6 d-flex flex-column '>
                    <div className='d-flex align-items-center'>
                        <img src={imgg} width='150' />
                        <h3 style={{ fontWeight: 800, letterSpacing: 2 + 'px' }}>Series</h3>
                    </div>
                    {props.data ? <h1 className='moviename'>{props.data.title}</h1>:
                      <h1 className='moviename'>Quater Banks</h1>

                    }

                    {props.data ? <p className='text-justify'>{props.data.description} </p> :
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus laborum ab exercitationem! Iure voluptas molestias unde iste, dolorum repudiandae.

                        </p>

                    }

                    {props.data ? <h5>Age description : {props.data.ageGroup}</h5>:
                       <h5>Age description : 18+</h5>

                    }
                    
                    <div className="d-flex pt-3">
                        <button className='btn mr-3 btn-light w-25 '>Play</button>
                        <button className='btn btn-dark w-25'>More Info</button>

                    </div>

                </div>
                <div className='col-6 my-auto'>
                </div>
            </div>

        </div>
    )
}

export default Hero