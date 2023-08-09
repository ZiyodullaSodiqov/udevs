import React from "react";
import Avatar1 from '../../images/avatar1.svg'
import Avatar2 from '../../images/avatar2.svg'
import Avatar3 from '../../images/avatar3.svg'
import Avatar4 from '../../images/avatar4.svg'
import Context from '../NewsContext/NewsContext'

    const  styleH2 ={
        color:"#000" ,
        fontWeight:"700",

        container: {
            marginTop:"30px"
        },

        images:{
            width:"130px",
            marginLeft:"-1px",
            transform: "translateY(10px)"
        }

    }
    const Storie = () =>{
        return(
            <React.Fragment>
                <div
                    className="container"
                    style={styleH2.container}>
                    <h2
                        style={styleH2}>
                        История последних новостей
                    </h2>
                    <div
                        className="row changeRespX2"
                        style={styleH2.container}>
                        <div
                            className="col changeX7">
                            <img src={Avatar1}
                                 style={styleH2.images}
                                 alt=""/>
                        </div>
                        <div
                            className="col changeX7">
                            <img src={Avatar3}
                                 style={styleH2.images}
                                 alt=""/>
                        </div>
                        <div
                            className="col changeX7">
                            <img src={Avatar2}
                                 style={styleH2.images}
                                 alt=""/>
                        </div>
                        <div
                            className="col changeX7">
                            <img src={Avatar3}
                                 style={styleH2.images}
                                 alt=""/>
                        </div>
                        <div
                            className="col changeX7">
                            <img src={Avatar4}
                                 style={styleH2.images}
                                 alt=""/>
                        </div>
                    </div>
                </div>
                <Context />
            </React.Fragment>
        )
    }

    export default Storie;
