import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Doughnut} from 'react-chartjs-2';


const Tech = () => {

    const [teches,setTeches] = useState([]);
    useEffect(()=>{

        axios
            .get("api/teches")
            .then(response =>response.data['hydra:member'] )
            .then(data =>setTeches(data))
            .catch(error=>error.response)
    },[]);
    var date = []
    var i
    for (i=0 ;i<teches.length; i ++) {
       date[i] = {
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: [
                        '#C9DE00',
                        'rgba(47,222,0,0)'
                    ],
                    data: [teches[i].level,(100-teches[i].level)]
                }
            ]
        }
    }
    return (
        <div className="tech">
             <div className="container ">
                 <div className="row">
                     {teches.map(tech=>(
                     <div key={tech.id} className="col-md-4"> {tech.title}{tech.level}
                     <Doughnut key={tech.id}
                         data={date}
                     />
                     </div>
                     ))}
                 </div>
             </div>
        </div>
    );
};

export default Tech;