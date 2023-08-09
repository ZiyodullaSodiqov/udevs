import React from 'react'
import Logo from '../../images/backgrounds/logo.svg'
import Notifaction from '../../images/notifaction.svg'
import '../../css/app.css'
import Storie from "../Stories/Storie";

    const New = () =>{
        return(
            <React.Fragment>
                <div
                    className="container">
                    <div
                        className="row">
                        <div
                            className="col">

                                <img
                                    src={Logo}
                                    alt=""
                                    style={{
                                        marginTop:"10px"
                                    }}
                                    />
                        </div>

                        <div
                            className="col">
                            <div
                                className="p-3">
                                <img
                                    src={Notifaction}
                                    alt=""/>
                                <button
                                    type={'button'}
                                    className={'btn btn-primary changeX4'}>
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="container">
                    <div
                        className="row changeRespX1">
                        <div
                            className="col">
                            <span
                                className="spnChange1 changeX5">
                                Все потоки
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Разработка
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Администрирование
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Дизайн
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Менеджмент
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Маркетинг
                            </span>
                        </div>
                        <div
                            className="col">
                            <span
                                className="spnChange1">
                                Научпоп
                            </span>
                        </div>
                    </div>
                </div>
                <Storie />
            </React.Fragment>
        )
    }

export default New;