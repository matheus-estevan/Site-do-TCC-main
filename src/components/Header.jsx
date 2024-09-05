import { Link } from "react-router-dom"

import Icon from '../assets/header/logo.svg'
import Menu from '../assets/header/menu.svg'

export default function Header() {
    return(
            <div className='flex flex-col justify-items-center'>
                <header className="flex items-center justify-between m-10 mb-20">
                <Link to='/'><img src={Icon} alt="Logo da empresa HydroGreen" /></Link>
                <img src={Menu} alt="Imagem de um menu Hamburger" className="md:hidden ml-auto"/>
                    
                <div className="flex space-x-10">
                    <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/componentes'> Componentes</Link>
                    <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/guiadeuso't>Funcionamento</Link>
                    <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/referencias">Referências</Link>
                    <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/sobrenos'>Sobre nós</Link>
                    </div>
                </header>
            </div>
    )
}