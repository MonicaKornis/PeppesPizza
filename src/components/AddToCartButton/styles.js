import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 0.75rem;
  display: flex;
`

export const AmmountOptions = styled.select`
  border-radius: 0.375rem 0rem 0rem 0.375rem ;
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

  &:hover {
    background-color: #2c5282;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`;
