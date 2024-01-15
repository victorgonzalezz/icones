import './styles.css'
import logo from '../../assets/logos/logotipo_spms.svg'

const texto = 'Crie um fork do projeto git compartilhado com você e desenvolva as variaçõesdo componente spms - input conforme este layout.'

export default function Header() {
  return (
    <header className='header'>
      <div>
        <h1 className='main-title'>Teste Frontend</h1>
        <p className='p'>{texto}</p>
      </div>
      <img src={logo} alt="SPMS" />
    </header>
  )
}
