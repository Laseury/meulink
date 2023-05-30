
import './link-item.css'
import {FiX, FiClipboard} from 'react-icons/fi'

export default function LinkItem({fecharModal}){
    return(
        <div className='modal-container'>
           <div className='modal-header'>
            <h2>Link Encurtado</h2>
            <button onClick={fecharModal}>
                <FiX size={28} color='#000'/>
            </button>

           </div>

           <span>
           https://sketchtoy.com/36772527
           </span>

           <button className='modal-link'>
           https://sketchtoy.com/36772527
            <FiClipboard size={20} color='#FFF'/>
           </button>
        </div>
    )
}