import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
    margin-left: 21px;
    

    label{

    font-family: 'Inter';
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;    
    margin-bottom: 25px;
    
    }
    h3{
        font-size: 16px
    }

    input{
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;

        width: 329.93px;
        height: 48px;
        color: white;

        background: #343B41;

        border: 1.2182px solid #F8F9FA;
        border-radius: 4px;

    }
    button{
        font-family: 'Inter';
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: white;

        box-sizing: border-box;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;

        width: 324px;
        height: 48px;
        background: #3483d4;
        border: 1.2182px solid #3483d4;
        border-radius: 4.06066px;
        cursor: pointer;
    }
    button:hover{
        background: #8fbce9;
    }
    select{
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        color: white;

    }
    ::placeholder { 
        color: #868E96;
    } 
`

export default Form