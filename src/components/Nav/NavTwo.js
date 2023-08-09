import React from 'react'
import Logo from '../../images/backgrounds/logo.svg'
import '../../css/main.css'
import '../../css/app.css'
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

    const NavTwo = () =>{
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
            Придумай пароль для входа
            </h2>
                <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        
        <TextField id="filled-basic" className='cXv2' label="Придумайте пароль" variant="filled" />
        <TextField id="filled-basic" className='cXv2' label="Подтвердите пароль" variant="filled" />
        </Box>
       
        <button
            className='btn btn-primary ppL2'
            type={'button'}>
            <Link to="/signUp" style={{color:"#fff",textDecoration:"none"}}>Создать аккаунт</Link>
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

                        
                        </>
        )
    }


export default NavTwo;

// import React from 'react'

//     const NavTwo = ()=> {
//         return(
//             <>
//             1</>
//         )
//     }

//     export default NavTwo;