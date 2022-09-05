import styled from "styled-components";


export const Container = styled.form`
width: 100%;
min-height: 100vh;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(90 86 86 / 10%);
inset: 0;



.modalBox{
    background: #fff;
    padding: 3rem;
    border-radius: 8px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    position: relative;
    width: 20%;
    height: 25%;
    
    
    
    
   

    .closebutton{
        position: absolute;
        top: 17px;
        right: 24px;
        border: none;
        cursor: pointer;
        background: #343B41;       
        width: 21px;
        height: 21px;
        color: white;

        
            
}
.modalCompleto{
    display: flex;
    flex-direction: column;
    }

.modalCompleto p{
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-right: 22%;
}
.cabecalhoModal{
    height: 60px;
    background: #343B41;
    border-radius: 4px 4px 0px 0px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin: -47px -47px 0px -47px;
}

input{
    width: 100%;
    height: 48px;
    background: #343B41;
    border: 1.2182px solid #F8F9FA;
    border-radius: 4px;
    margin-top: 30px;
    color: white;
}
select{
    width: 100%;
    height: 48px;
    background: #343B41;
    border: 1.2182px solid #F8F9FA;
    border-radius: 4px;
    color: white;
    margin-top: 30px;
}
.cadastrarTech{
    width: 100%;
    height: 48px;
    background: #3483d4;
    border: 1.2182px solid #3483d4;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: white;
    margin-top: 20px;
    cursor: pointer;
    font-family: 'Inter';
}
.cadastrarTech:hover{
    background: #8fbce9;
    border: none;
}
}

`;