import React from 'react'
import Logo from '../../images/backgrounds/logo.svg'
import '../../css/main.css'
import '../../css/app.css'
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar1 from '../../images/avatar1.svg'
import Avatar2 from '../../images/avatar2.svg'
import Avatar3 from '../../images/avatar3.svg'
import Avatar4 from '../../images/avatar4.svg'
import Header from '../Header/Header';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const Nav = () =>{
        const [open, setOpen] = React.useState(true);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return(
            <>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h2>
            Как вас зовут?
            </h2>
                <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        
        <TextField id="filled-basic" className='cXv2' label="Введите имя" variant="filled" />
        </Box>
        <p style={{
            color: "#222",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "24px", 
            letterSpacing: "-0.12px"
        }}>
        Выберите аватар
        </p>
        <img 
            src={Avatar1} 
            className='avatar_Chxv1' 
            alt=''/>
        <img 
            src={Avatar2} 
            className='avatar_Chxv1' 
            alt=''/>
        <img 
            src={Avatar3} 
            className='avatar_Chxv1' 
            alt=''/>
        <img 
            src={Avatar4} 
            className='avatar_Chxv1' 
            alt=''/>
        <img 
            src={Avatar2} 
            className='avatar_Chxv1' 
            alt=''/>
        <button
            className='btn btn-primary ppL2'
            type={'button'}>
            <Link
                to="/signIn"
                style={{
                    color:"#fff",
                    textDecoration:"none"
            }}>
                Войти
            </Link>
        </button>
        </Box>
      </Modal>
            <div
                className='container-fluid'>
                    <div
                        className='row changeX1'>
                            <div 
                                className='col-2'>
                                    <img src={Logo} alt='' />
                                </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Все потоки
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Разработка
                                            </span>
                                    </div>
                                    <div
                                        className='col-2 changeX2'>
                                            <span>
                                            Администрирование
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Дизайн
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Менеджмент
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Маркетинг
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX2'>
                                            <span>
                                                Научпоп
                                            </span>
                                    </div>
                                    <div
                                        className='col-1 changeX3'>
                                            <button
                                                className='btn btn-primary'
                                                type={'button'}
                                                onClick={handleOpen}>
                                                Войти
                                            </button>
                                    </div>
                                </div>
                        </div> 
                        <Header />
                        </>
        )
    }


export default Nav;