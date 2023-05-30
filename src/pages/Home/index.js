
//Importando a Biblioteca Icons
import {FiLink} from 'react-icons/fi'
 //Importando o CSS
import './home.css'
//Importando o menu
import Menu from '../../components/menu'

export default function Home() {
    return(
      <div className="container-home">

       <div className="Logo">
        <img src="/Akatsuki.png" alt="Akatsuki Logo"/>
        <h1>Akatsuki Links</h1>
        <span>Seu encurtador de links</span>
       </div>

      <div className="area-input">
     <div>
      <FiLink size={24} color='#FFF'/>
      <input 
      placeholder='Cole seu link aqui'
      />
      </div>
      <button>Encurtar Link</button>
        </div>
      

      <Menu/>
      </div>
    )
    
  }