import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #24263c;
  padding: 30px;
  width: 450px;
  height: 350px;
  border-radius: 12px;
  box-shadow: 1px 1px 8px 5px #434451;
`
export const Head = styled.h1`
  font-family: Roboto;
  color: #f8f8fc;
  font-size: 40px;
  font-weight: 400;
`
export const Para = styled.p`
  font-family: roboto;
  color: #f8f8fc;
  font-size: 14px;
  margin-top: 0px;
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  background-color: #edeeff;
  outline: none;
`

export const Error = styled.p`
  color: #ef4444;
  font-size: 12px;
  font-family: roboto;
`
