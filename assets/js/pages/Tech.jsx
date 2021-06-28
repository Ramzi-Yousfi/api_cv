import React, {useEffect, useState} from 'react';
import axios from "axios";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Bar} from 'react-chartjs-2';
import Modal from "react-bootstrap/Modal";
import {data} from "autoprefixer";

const Tech = () => {
    //recuperation des donnees des outils
    const [tools, setTools] = useState([]);
    useEffect(() => {
        axios
            .get("api/tools")
            .then(response => response.data['hydra:member'])
            .then(data => setTools(data))
            .catch(error => error.response)
    }, []);
    //recuperation des donnee technologies
    const [teches, setTeches] = useState([]);
    useEffect(() => {
        axios
            .get("api/teches")
            .then(response => response.data['hydra:member'])
            .then(data => setTeches(data))
            .catch(error => error.response)
    }, []);
    //style
    const [toggle, setToggle] = useState([false]);
    function Handel() {
        setToggle(!toggle);
    }
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
        //chart

    let titre =[];
    let level =[];
   for (let i = 0 ;i<teches.length;i++){
       titre[i] = teches[i].title
       level[i] = teches[i].level
   }
       const  data = {
            labels: titre,
            datasets: [{
                label: 'percent skills %',
                data: level,
                backgroundColor: [
                    'rgb(217,206,10)',
                    'rgb(170,82,24)',
                    'rgb(9,73,238)',
                    'rgb(124,4,236)',
                    'rgb(20,68,212)',
                    'rgb(29,21,40)',
                    'rgb(36,250,0)',
                    'rgb(255,0,0)',
                    'rgba(201, 203, 207)',
                ],
                borderColor: [
                    'rgb(0,0,0)',
                ],
                borderWidth: 1
            }]
        };



    return (
        <div className="tech">
            <div className="container ">
                <div className="row">
                    {teches.map((tech, index) => (
                        <div key={tech.id} className="col-md-4">
                            <div className="tech-div">
                                <img className="img-tech" src={tech.illustration} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <a className="btn btn-dark mt-5 mb-5" onClick={showModal} >see more
                    details</a>

            </div>
            <div className="side">
                <div className={toggle ? "side-div-click" : "side-div"}>
                    <SimpleBar style={{maxHeight: 380}}>
                        {tools.map((tool, index) => (
                            <div key={tool.id} className="col" >
                                    <img className="img-tool" src={tool.illustration} alt=""/>
                            </div>
                        ))}
                    </SimpleBar>
                </div>
                <div onClick={Handel} className={toggle ? "side-fa-click" : "side-fa"}>
                    <i className={toggle ? "fa-no-rotate fas fa-angle-double-right pt-3" : "fa-rotate fas fa-angle-double-right pt-3"}></i>
                </div>
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Body>
                    <Bar
                    data={data}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={hideModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Tech;