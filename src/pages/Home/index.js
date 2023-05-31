//Importar o estado
import { useState } from 'react'
//Importando a Biblioteca Icons
import {FiLink} from 'react-icons/fi'
 //Importando o CSS
import './home.css'
//Importando o menu
import Menu from '../../components/menu'
//Importando o modal dos links
import LinkItem from '../../components/LinkItem'

export default function Home() {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);

  function linkCurto(){
    //alert("Link Encurtado " + link)
    setShowModal(true);
  }

    return(
      <div className="container-home">

      
       <div className="Logo">
        <div className='Foto'>
        <img src="/Akatsuki.png" alt="Akatsuki Logo"/>
        </div>
        <h1>Akatsuki Links</h1>
        <span>Seu encurtador de links</span>
       </div>

      <div className="area-input">
     <div>
      <FiLink size={24} color='#FFF'/>
      <input 
      placeholder='Cole seu link aqui'
      value={link}
      onChange={ (e) => setLink(e.target.value)}
      />
      </div>
      <button onClick={linkCurto}>Encurtar Link</button>
        </div>
      

      <Menu/>

     {showModal && (
       <LinkItem
       //Criando o comando para fechar, neste caso a modal
       fecharModal={ () => setShowModal(false) }
       />
     )}
      </div>
    )
    
  }