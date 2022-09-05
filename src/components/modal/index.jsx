import { Container } from "./style"
import { MdClose } from 'react-icons/md'
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth";
import { useForm } from "react-hook-form";





const Modal = ({id}) => {

    const { setOpenModal, editProduct } = useContext(AuthContext);

    const {register, handleSubmit} = useForm();
    
    return (

        
        <Container>
            
            <div className="modalBox">
                <button onClick={() => setOpenModal(false)} className="closebutton" >
                    <MdClose size={21}/>
                </button>
                <div className="modalCompleto">
                    <div className="cabecalhoModal"/>                      
                    
                    <p>Alterar Quantidade</p>
                    <input placeholder="quantidade" type="number" {...register("description")}></input>
                                      
                    <button className="cadastrarTech" onClick={handleSubmit(editProduct)}>Alterar</button>
                </div>                
            </div>
            
        </Container>
    

    )
}

export default Modal