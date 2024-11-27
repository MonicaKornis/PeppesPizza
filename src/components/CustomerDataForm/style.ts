import styled from 'styled-components';

export const FormContainer = styled.div`
   max-width: 400px;
    /* margin: 0 auto; */
    width: 82%;
    padding: 1em;
    background-color: white;
    border-radius: 8px;
    margin: 29px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

export const FormSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.879rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-family: "Josefin Sans", serif;
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

export const Select = styled.select`
  width: 99%;
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


export const ToppingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ToppingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Josefin Sans", serif;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  accent-color: #3182ce;
`;

export const ToppingLabel = styled.label`
  font-size: 0.879rem;
  color: #4a5568;
  cursor: pointer;
`;

export const OrderSummary = styled.div`
background-color: #f7fafc;
padding: 1rem;
border-radius: 0.375rem;
margin-bottom: 1.5rem;
`;

export const SummaryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

export const SummaryText = styled.p`
  color: #4a5568;
  margin: 0.25rem 0;
`;

export const AddMoreToppingsButton = styled.button`
    width: 33%;
    padding: 0.50rem;
    border: 1px solid #ccc;
    font-family: inherit;
    border-radius: 0.375rem;
  

  &:hover {
    background-color: #e2e1e1;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`;

export const ErrorMessage = styled.p`
    color: 	#880808
`;  

// styled.button<{ selected?: boolean }>`
//   background-color: ${props => props.selected ? '#4a4a4a' : '#6a6a6a'};
export const SubmitButton = styled.button<{ inactive: boolean }>`
  width: 100%;
  background-color: ${props => props.inactive ? '#4a4a4a' : '#3182ce;'};
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