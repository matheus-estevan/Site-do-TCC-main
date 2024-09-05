import { Link } from "react-router-dom"

import Icon from '../assets/header/logo.svg'
import Menu from '../assets/header/menu.svg'

export default function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)
	
	function handleAbrir() {
		setArbrirMenu(true)
	}
	
	function handleFechar() {
		setAbrirMenu(false)
	}


    return(
            <div className='flex flex-col justify-items-center'>
                <header className="flex items-center justify-between m-10 mb-20">
                <Link to='/'><img src={Icon} alt="Logo da empresa HydroGreen" /></Link>
                <button onClick={handleAbrir}><img src={Menu} alt="Imagem de um menu Hamburger" className="md:hidden ml-auto"/></button>

                <nav className={`bg-red-200 flex flex-col w-60 p-5 absolute right-${abrirMenu === true ? "0" : "[-15rem]"} gap-4 transition-all`}>
				<button onClick={handleFechar}>Fechar</button>
				
				<Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/componentes'> Componentes</Link>
                <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/guiadeuso't>Funcionamento</Link>
                <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/referencias">Referências</Link>
                <Link className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to='/sobrenos'>Sobre nós</Link>
			    </nav>
                    
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