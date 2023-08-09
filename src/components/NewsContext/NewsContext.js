import React from 'react';
import SmokingSvg from '../../images/smoke.svg'
import Footer from "../Footer/Footer";

    const  styletext ={
        p:{
            marginLeft:"5px",
            fontSize:"18px",
            fontWeight:"700",
            lineHeight:"24px"
        },

        col:{
            // marginLeft:"5px",
        },

        img:{
            width:"360px",
            height:"360px",
            marginLeft:"5px"
        },

        span:{
            fontWeight:"600",
            color:"#AEBEC9",
            marginLeft:"5px"
        }

}

    const NewsContext = () =>{
        return(
            <React.Fragment>
                <div
                    className="container-xxl">
                    <div
                        className="row">
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="container-xxl">
                    <div
                        className="row">
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="container-xxl">
                    <div
                        className="row">
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше курить, но пристрастились .....
                            </p>
                        </div>
                        <div
                            className="col"
                            style={styletext.col}>
                            <img
                                src={SmokingSvg}
                                alt=""
                                style={styletext.img}/>
                            <p style={styletext.span}>
                                11.01.2021
                            </p>
                            <p style={styletext.p}>
                                ВОЗ: молодые жители Европы стали <br/> меньше  курить, но пристрастились .....
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }

    export default NewsContext;