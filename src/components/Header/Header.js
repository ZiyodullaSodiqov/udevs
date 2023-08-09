import React from 'react';
import Footer from '../Footer/Footer'
import '../../css/main.css';


    function Header() {
        return(
        <>
            <div 
                className='container'>
                    <div 
                        className='row changet2'>
                        <div
                            className='col-6 Img1'>
                        </div>

                        <div
                            className='col-6'>
                                <h2>
                                    По инициативе Узбекистана создана Группа друзей по правам молодежи
                                </h2>
                                <p className='context_p1'>
                                Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...
                                </p>
                                <button
                                    type={'button'}
                                    className='btn btn-primary btnChange_p1'>Читать</button>
                        </div>
                    </div>

                    <div 
                        className='row changet2'>
                        <div
                            className='col-6 Img1'>
                        </div>
                        
                        <div
                            className='col-6'>
                                <h2>
                                    По инициативе Узбекистана создана Группа друзей по правам молодежи
                                </h2>
                                <p className='context_p1'>
                                Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...
                                </p>
                                <button
                                    type={'button'}
                                    className='btn btn-primary btnChange_p1'>Читать</button>
                        </div>
                    </div>
            </div>
            <Footer />
            </>
        )
    }

export default Header;