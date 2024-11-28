import styled from "styled-components";
import { useAuth } from './../context/AuthContext';
import { useState } from "react";

const PageContainer = styled.div`
    margin: 250px;
`;

const InputContainer = styled.div`
    margin: 66px auto;
    width: 50%;
    display: flex;
    flex-direction: column;
;
`;

export const Input = styled.input`
  width: 97%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  color: #4a5568;
  cursor: pointer;

&:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0rem 0.375rem 0.375rem 0rem;
  font-size: 1.15rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Zilla Slab", serif;
  height: 35px;
  margin-top: 10px;

  &:hover {
    background-color: #2c5282;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`;

export default function Login() {
    const { currentUser, handleLogout, handleLogin }  = useAuth() || {};;
    const [email, setEmail] = useState('')

    const userActionMenu = currentUser ? <button onClick={handleLogout}>Logout</button> : (<><label>
        <p>Email</p>
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <label>
        <p>Password</p>
        <Input type="password" />
    </label>
    <div>
        <SubmitButton onClick={() => handleLogin && handleLogin(email)} type="submit">Submit</SubmitButton>
    </div></>)

  return(
    <PageContainer>
     <InputContainer>
        {userActionMenu}
      </InputContainer>
    </PageContainer>
  )
}