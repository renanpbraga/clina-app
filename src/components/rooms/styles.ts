import styled from 'styled-components';

styled.body`
background-color: #FAFAFA;
`

export const Message = styled.p`
  display: none;
  .message-false: {
    display: none;
  }
  .message-true: {
    color: white;
  }
`
export const MainContainer = styled.main`
  background-color: #FAFAFA;
  margin: 0 auto;
  #texto-local{
    align-items: center;
    display:flex;
    margin-top: 12px;
  }
  .local p {
    text-align: left;
    font: normal normal bold 28px/28px Poppins;
    letter-spacing: 0px;
    color: #111111;
    opacity: 1;
  }
  .local span {
    color: #4F4F4F;
    margin-left: 8px;
  }
  .main-section {
    margin: 0 auto;
    width: 85%;
  }
  .filters{
    display: flex;
    flex-direction: row-wrap;
    margin-top: 20px;
    min-width: 300px;
    width: 432px;
    justify-content: space-between;
    label {
      color: #4F4F4F;
      display: flex;
      flex-direction: column;
      font: normal normal 600 16px/28px Poppins;
      #periodo{
        width: 158px;
      }
    }
    select{
      color: #4F4F4F;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #CFCFCF;
      border-radius: 4px;
      height: 44px;
      opacity: 1;
      width: 249px;
    }
  }
`

export const MapClinicas = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  min-width: 300px;
  width: 100%;
  #salas-disponiveis {
    color: #4F4F4F;
    margin-top: 28px;
  }
  article {
    background-color: #FFFFFF;
    border: 1px solid #CFCFCF;
    border-radius: 4px;
    display: flex;
    margin: 10px auto;
    min-width: 300px;
    width: 100%;
  }
  
  .description {
    align-items: center;
    display: flex;
    flex-direction: row;
    magin-left: 20px;
    width: 100%
  }

  .consultorio {
    margin-left: 24px;
  }
  
  .preco {
    align-self: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    font-size: 2em;
    p {
      font-weight: normal;
      text-align: right;
      font-size: 0.5em
    }
  }

  aside {
    align-items: center;
    align-self: right;
    display: flex;
    justify-content: center;
    width: 250px;
    button {
      color: white;
      background: #7A35FF 0% 0% no-repeat padding-box;
      box-shadow: 0px 4px 8px #0000001F;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      height: 35px;
      opacity: 1; 
      transition: filter 0.2s;
      width: 80%;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  `