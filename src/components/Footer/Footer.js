import React from 'react'
import Logo from '../../images/backgrounds/logo.svg'

    const styleFooter ={
        ft:{
            marginTop:"30px",
            height:"400px",
            backgroundColor:"#F9F9F9"
        },
        lg:{
            marginTop: "30px",
            fontSize: "18px",
            fontWeight:"500"
        },
        lgT:{
            marginTop:"30px"
        },
        spn:{
            color: "#1E2833",
            marginTop:"120px"
        }

    }
    function Footer() {
        return(
            <>
                <div 
                    className='footer'
                    style={styleFooter.ft}>
                    <div className="container">
                        <div className="row changet3">
                            <div className="col-3">
                                <img
                                    src={Logo}
                                    style={styleFooter.lg}
                                    alt=""/>
                                <p
                                    style={styleFooter.lgT}>
                                    Помощник в публикации статей, журналов.
                                    Список популярных международных конференций.
                                    Всё для студентов и преподавателей.
                                </p>

                                <p
                                    style={styleFooter.spn}>
                                    Copyright © 2020. LogoIpsum. All rights reserved.
                                </p>
                            </div>
                            <div className="col-3">
                                <p style={styleFooter.lg}>
                                    Ресурсы
                                </p>
                                <span>Статьи</span> <br/><br/>
                                <span>Журналы</span> <br/><br/>
                                <span>Газеты</span> <br/><br/>
                                <span>Диплом</span>
                            </div>
                            <div className="col-3">
                                <p style={styleFooter.lg}>
                                    О нас
                                </p>
                                <span>
                                    Контакты
                                </span>
                                <br/><br/>
                                <span>
                                    Помощь
                                </span>
                                <br/><br/>
                                <span>
                                    Заявки
                                </span>
                                <br/><br/>
                                <span>
                                    Политика
                                </span>
                            </div>
                            <div className="col-3">
                                <p style={styleFooter.lg}>
                                    Помощь
                                </p>
                                <span>
                                    Часто задаваемые вопросы
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Footer;