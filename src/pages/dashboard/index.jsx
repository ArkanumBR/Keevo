import './style.css';
import logo from "../../images/logo2.png";
import avatar from "../../images/avatar.jpg";
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Techs from '../../components/techs';
import Form from '../../components/form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Dashboard = () => {

  
const { productsFilter, setProductsFilter, clearAll, products, deleteTech, addNewProduct, filterProducts } = useContext(AuthContext);

const [ productFilter, setProductFilter ] = useState([]);

const { register, handleSubmit } = useForm();



    return (
        <motion.div
        initial={{ scaleY: 0}}
        animate={{ scaleY: 1}}
        exit={{ scaleY: 0}}
        transition={{duration: 1}}>

        <div className='divNavBar'>
            <img src={logo} alt="logo" />
            <button className='buttonSair' onClick={clearAll}>Sair</button>
        </div>
        <header className='headerHome'> 
            <img src={avatar} alt='avatar' className='imgAvatar'/>
            <h2 className='h2Home'>{localStorage.getItem("name")}</h2>
            <h4 className='h4Home'>{localStorage.getItem("module")}</h4>
        </header>
        <main className='mainHome'>
        <div  className="ContainerControle">
            <div className='divTechs'>
                <div className='divControle'>
                    <h3>Cadastro de Produto</h3>
                </div>
                <div className='divCadastroProduto'>
                    <Form>
                        
                        <h3>Descrição</h3>
                        <input {...register("title")} required></input>
                        <h3>Quantidade</h3>
                        <input {...register("description")} required></input>
                        <h3 >Unidade de Medida</h3>
                        <select {...register("deploy_url")}required>
                            <option value="">Selecione</option>
                            <option value="Unidades">Unidades</option>
                            <option value="Caixas">Caixas</option>
                            <option value="Sacos">Sacos</option>
                            <option value="Garrafas">Garrafas</option>
                            <option value="Metros">Metros</option>                        
                        </select>
                        <button onClick={handleSubmit(addNewProduct)}>Cadastrar</button>

                    </Form>
                </div>
            </div>
            <div className='containerProdutos'>
                <div className='divPesquisa'>
                    <input placeholder='Nome do produto' type="text" className='inputPesquisa' onChange={(e) => {setProductFilter(e.target.value)}}></input>
                    <button type='submit' onClick={() => {filterProducts(productFilter)}}>Pesquisar</button>
                    <button type='submit' onClick={() => {setProductsFilter([])}}>Mostrar todos</button>
                </div>
                <div className='divEspecificacoes'>
                    <span>Produto</span>
                    <span>Quantidade</span>
                    <span>Unidade de Medida</span> 
                </div>
                <div className='listagemTechs'>
                    {productsFilter.length > 0 ?
                        productsFilter.map((e) => {
                            return (
                                <Techs
                                quantidade={e.description}
                                unidadeDeMedida={e.deploy_url}                        
                                title={e.title}
                                id={e.id}
                                key={e.id}
                                deleteTech={deleteTech} 
                                                
                                />
                            )})
                        :
                        products.map((e) => {
                            return (
                                <Techs
                                quantidade={e.description}
                                unidadeDeMedida={e.deploy_url}                        
                                title={e.title}
                                id={e.id}
                                key={e.id}
                                deleteTech={deleteTech} 
                                                
                                />
                            )})
                        } 
                </div>
            </div>
            </div>
        </main>
        </motion.div>
    )
}

export default Dashboard