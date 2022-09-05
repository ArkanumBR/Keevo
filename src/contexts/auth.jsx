import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api from "../services/api";



export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [userLogged, setUserLogged]         = useState(false);
    const [products, setProducts]             = useState([]);
    const [openModal, setOpenModal]           = useState(false);
    const [clickID, setClickID]               = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);
    
    
    const navigate = useNavigate();  
          

    const schema = yup.object({
        email: yup.string().email("Deve ser um e-mail válido.").required("Campo obrigatório."),
        password: yup.string().min(8, "Senha tem pelo menos 8 caracteres.").required("Campo obrigatório."),
        
    });
    
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema),
    });

    
    const filterProducts = ((filtrado) => {      
      const filterByProduct = products.filter((product) => {
        return (
          product.title.toLowerCase() === filtrado.toLowerCase()
          )
      });   
      if (filterByProduct.length > 0) {
        setProductsFilter(filterByProduct);     
        }
        else {
        toast.error("Produto nao encontrado!");
      }  
    });
        
   function handleForm(user){
     api.post("sessions", {...user}).then((response) =>{
          
        window.localStorage.clear();       
        window.localStorage.setItem("authToken", response.data.token);
        window.localStorage.setItem("name", response.data.user.name);
        window.localStorage.setItem("userID", response.data.user.id);
        window.localStorage.setItem("module", response.data.user.course_module);
        setUserLogged(true);
        setProducts(response.data.user.works);             
        toast.success("Login feito com sucesso!");
        navigate("/dashboard");
    })
        .catch((error) =>
        {   toast.error("Dados incorretos!");
            setError("password", {message: console.log(error.response.data)})
        }
        )
   }

   function clearAll(){
    window.localStorage.clear();     
    setUserLogged(false);
    toast.success("Logout realizado!")   
    navigate("/");
}




useEffect(() => {
    if (localStorage.getItem("authToken") !== null) {
      api
        .get("profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}`, }
        })
        .then((response) => {
            setProducts(response.data.works);
            setUserLogged(response.data);
        })
        .catch((error) => console.log(error));
    } 
  }, [products, navigate, userLogged, setUserLogged, productsFilter]);

function deleteTech(id){
    
   api.delete(`users/works/${id}`, {
    headers: { Authorization : `Bearer ${localStorage.getItem("authToken")}`}
   }).then((response) => {
    toast.success("Produto excluído com sucesso!") 
    return response.data;
   }).catch((error) => console.log(error))
}

async function addNewProduct(data){
  await api.post("users/works", data, {
    headers: { Authorization : `Bearer ${localStorage.getItem("authToken")}`}
   })
  .then((response) => {
    toast.success("Produto cadastrado com sucesso!");    
  }).catch((error) => {
    toast.error("Produto não cadastrado =(");
  })
}

async function editProduct(data){
  await api.put(`users/works/${clickID}`, data, {
    headers: { Authorization : `Bearer ${localStorage.getItem("authToken")}`}
   })
  .then((response) => {
    toast.success("Produto alterado com sucesso!");
    setOpenModal(false);   

  }).catch((error) => {
    toast.error("Produto não alterado =(");
  })
}


    return (
        <AuthContext.Provider value={{ productsFilter, setProductsFilter, setUserLogged, filterProducts, handleSubmit, handleForm, register, errors, clearAll, products, setProducts, deleteTech, addNewProduct, openModal, setOpenModal, editProduct, clickID, setClickID, userLogged }}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider