import React from 'react';
import {Link} from "react-router-dom";
const Home = () => {
    let parallax = (e)=>{
        document.querySelectorAll('.layer ').forEach(layer =>{
            const speed = layer.getAttribute("data-speed")
            const x =(window.innerWidth - e.pageX*speed)/100
            const y =(window.innerHeight - e.pageY*speed)/100
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }
    return (

        <div onMouseMove={parallax} className="anim">
                <span className="span1 layer" data-speed="5"><i className="fas fa-music"></i></span>
                <span className="span2 layer" data-speed="8"><i className='fas fa-coffee'></i></span>
                <span className="span3 layer" data-speed="4"><i className='fas fa-quote-left'></i></span>
                <span className="span4 layer" data-speed="-2"><i className='fas fa-quote-right'></i></span>
                <span className="span5 layer" data-speed="3"><i className='fas fa-rocket'></i></span>
                <span className="span6 layer" data-speed="3"><i className='far fa-lightbulb'></i></span>
                <span className="span7 layer" data-speed="12"><i className=' far fa-comments'></i></span>
                <span className="span8 layer" data-speed="9"><i className=' fas fa-robot'></i></span>
                <span className="span9 layer" data-speed="2"><i className=' fas fa-code'></i></span>
                <span className="span10 layer" data-speed="-1"><i className=' fas fa-bug'></i></span>
            <div >
                <h1 className="title">Welcome to my Portfolio...</h1>
                <br/>
                <br/>
                <Link className="btn btn-info a_content" to="/about">
                    get to know me
                </Link>
            </div>

         </div>
    );
};

export default Home;
