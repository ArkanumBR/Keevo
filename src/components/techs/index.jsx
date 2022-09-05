import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './style.css';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import Modal from '../../components/modal';


function Products ({ quantidade, unidadeDeMedida, title, deleteTech, id }) {

    const { openModal, setOpenModal, setClickID } = useContext(AuthContext);

   


    return (
        <>
        <div className="divDasTechs">
            <span className="productName">{title}</span>
            <span className='quantidade'>{quantidade}</span>
            <span className='uniMedida'>{unidadeDeMedida}</span>
            <div className="divNivelTrash">
                
                <span>
                    <FiEdit className='edit' onClick={() => {
                        setClickID(id)
                         setOpenModal(!openModal)}}/>                 
                    
                    {openModal && (
                    <Modal id={id}/>
                    
                 )}
                    <FaTrash className='trash' onClick={() => deleteTech(id)}/></span>
            </div>
        </div>
        
        </>
    )
}

export default Products