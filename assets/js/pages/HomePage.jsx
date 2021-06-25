import React from 'react';

const Home = () => {
    return (
        <div className="anim">
                <span className="span1" data-speed="5"><i className="fas fa-music"></i></span>
                <span className="span2" data-speed="5"><i className='fas fa-coffee'></i></span>
                <span className="span3" data-speed="5"><i className='fas fa-quote-left'></i></span>
                <span className="span4" data-speed="5"><i className='fas fa-quote-right'></i></span>
                <span className="span5" data-speed="5"><i className='fas fa-rocket'></i></span>
                <span className="span6" data-speed="5"><i className='far fa-lightbulb'></i></span>
                <span className="span7" data-speed="5"><i className=' far fa-comments'></i></span>
                <span className="span8" data-speed="5"><i className=' fas fa-robot'></i></span>
                <span className="span9" data-speed="5"><i className=' fas fa-code'></i></span>
                <span className="span10" data-speed="5"><i className=' fas fa-bug'></i></span>
            <div >
                <h1 className="title">Welcome to my Portfolio...</h1>
                <br/>
                <br/>
                <a href="" className="btn btn-info a_content">get to know me </a>
            </div>

         </div>
    );
};

export default Home;
