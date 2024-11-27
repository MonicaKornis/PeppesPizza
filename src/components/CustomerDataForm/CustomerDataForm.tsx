
// import React, {  } from 'react';
// import { CustomerFormData, CustomerFormErrors } from '../../types/index';
import { checkIfFormValid } from './../../utils.tsx';
import {FormContainer, Title, SubmitButton, FormSection, Label, Select, Input, ErrorMessage} from './style.ts' ;


type ICustomerDataFormProps = {
  formData: any;
  setFormData: (formData) => void; 
  formErrors: any;
  handleSubmit: (e: React.FormEvent) => void; 
}
  
  const CustomerDataForm: React.FC<ICustomerDataFormProps> = ({ formData, setFormData, formErrors, handleSubmit}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value } = e.target;
      setFormData(prev => {
        return {
            ...prev,
            [name]: value,  
        }});
    };


    const formInvalid = !checkIfFormValid(formData);

    const creditCardSection = formData.paymentType == "Credit" ? (<><Title>Credit Card Info</Title>
        <FormSection>
           <Label>Credit Card Number</Label>
           <Input value={formData.creditCardNumber} type="number" name='creditCardNumber' onChange={handleChange} required/>
           <ErrorMessage>{formErrors.creditCardNumber}</ErrorMessage>
        </FormSection>
        <FormSection>
           <Label>Expiry Date</Label>
           <Input name='expiryDate' value={formData.expiryDate} type="Date" onChange={handleChange} required/>
        </FormSection>
        <FormSection>
           <Label>CVV</Label>
           <Input name='cvv' type="number" value={formData.cvv} onChange={handleChange} required/>
        </FormSection></>) : null

  const addressSection = formData.deliveryType == "Delivery" ? (<><Title>Delivery Info</Title>
    <FormSection>
       <Label>Address</Label>
       <Input value={formData.addressLine1} name='addressLine1' onChange={handleChange} required/>
    </FormSection>
    <FormSection>
       <Label>City</Label>
       <Input name='city' value={formData.city} onChange={handleChange} required/>
    </FormSection>
    <FormSection>
       <Label>State</Label>
       <Input name='state' value={formData.state} onChange={handleChange} required/>
    </FormSection>
    <FormSection>
       <Label>Zip Code</Label>
       <Input name='zipCode' type="number" value={formData.zipCode} onChange={handleChange} required/>
    </FormSection>
    </>) : null

    console.log(handleSubmit)
    return (

      <FormContainer>
      <Title>Your Info</Title>
      <form onSubmit={handleSubmit}>
      <div>
        <FormSection>
          <Label>First Name</Label>
          <Input name='firstName' value={formData.firstName} onChange={handleChange} required/>
        </FormSection>

        <FormSection>
          <Label>Last Name</Label>
          <Input name='lastName' value={formData.lastName} onChange={handleChange} required/>
        </FormSection>


        <FormSection>
          <Label>Email</Label>
          <Input name='email' value={formData.email} onChange={handleChange} required/>
        </FormSection>

        <FormSection>
           <Label>Delivery Type</Label>
           <Select name='deliveryType' value={formData.deliveryType} onChange={handleChange} required>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </Select>
        </FormSection>

        <FormSection>
           <Label>Payment Type</Label>
           <Select name='paymentType' value={formData.paymentType} onChange={handleChange} required>
            <option value="cash">Cash</option>
            <option value="credit_card">Credit</option>
          </Select>
        </FormSection>

       
        {addressSection}
        {creditCardSection}
        <SubmitButton disabled={formInvalid} inactive={formInvalid}>Submit Order
        </SubmitButton>
      </div>
      </form>
    </FormContainer>
    );
  };
  
  export default CustomerDataForm;