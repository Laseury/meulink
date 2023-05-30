
import './error.css';
import {Link} from 'react-router-dom'

export default function Erro(){
    return(
        <div className='container-error'>
           <img src='404error.png' alt='Pagina nao encontrada' />
           <h1>Pagina não encontrada</h1>
           <Link to ="/">
            Voltar para a tela principal
           </Link>
        </div>
    )
}