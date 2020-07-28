import React from 'react'
import logo from '../../assets/logo2.png'
import './Menu.css'
import{Link} from 'react-router-dom'

import ButtonLink from '../Menu/components/ButtonLink'
function Menu(){

    return(
        <nav className='Menu'>

            <Link to='/'>
            <img className='Logo' src={logo} alt='logo'/>
            </Link>

            <Link as={ButtonLink} to='/cadastro/video' className='ButtonLink'>
                Novo Vídeo 
            </Link>

        </nav>
    )
}

export default Menu;