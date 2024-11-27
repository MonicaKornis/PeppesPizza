// @ts-nocheck
import React, { useState } from 'react';
import { CustomerFormData, CustomerFormErrors } from '../../types/index';
import {FormContainer, Title, SubmitButton, FormSection, Label, Select, Input, ErrorMessage} from './style.ts' ;
import { useCart } from './../../context/cart/cart-context.js';
  
  
  const CustomerDataForm: React.FC = () => {
    const [formData, setFormData] = useState<CustomerFormData>({
        deliveryType: '',
        email: '',
        name: '',
        addressLine1:'',
        city: '',
        state: '',
        zipCode: '',
        paymentType: "Cash",
        creditCardNumber: '',
        expiryDate: undefined,
        formInvalid: true,
      });

      const [formErrors] = useState<CustomerFormErrors>({
        deliveryType: '',
        email: '',
        name: '',
        addressLine1:'',
        city: '',
        state: '',
        zipCode: '',
        paymentType: '',
        creditCardNumber: '',
        expiryDate: '',
        cvv: '',
      });
  
    const { cart } = useCart();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value } = e.target;
      setFormData(prev => {
        return {
            ...prev,
            [name]: value,    
        }});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const valid = checkIfFormValid();
        if(valid) {
          const data = transformData(formData, cart);
        }
    }
  

  const creditCardSection = formData.paymentType == "Credit" ? (<><Title>Credit Card Info</Title>
        <FormSection>
           <Label>Credit Card Number</Label>
           <Input value={formData.creditCardNumber} type="number" name='creditCardNumber' onChange={handleChange} required/>
           <ErrorMessage>{formErrors.creditCardNumber}</ErrorMessage>
        </FormSection>
        <FormSection>
           <Label>Expiry Date</Label>
           <Input name='expiryDate' value={formData.expiryDate} type="Date" required/>
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
  
  console.log(formData.formValid)
    return (

      <FormContainer>
      <Title>Your Info</Title>
      <form onSubmit={handleSubmit}>
      <div>
        <FormSection>
          <Label>Name</Label>
          <Input name='name' value={formData.name} onChange={handleChange} required/>
        </FormSection>

        <FormSection>
          <Label>Email</Label>
          <Input name='email' value={formData.email} onChange={handleChange} required/>
        </FormSection>

        <FormSection>
           <Label>Delivery Type</Label>
           <Select name='deliveryType' value={formData.deliveryType} onChange={handleChange} required>
            <option value="Pickup">Pickup</option>
            <option value="Delivery">Delivery</option>
          </Select>
        </FormSection>

        <FormSection>
           <Label>Payment Type</Label>
           <Select name='paymentType' value={formData.paymentType} onChange={handleChange} required>
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
          </Select>
        </FormSection>

       
        {addressSection}
        {creditCardSection}
        <SubmitButton disabled={formData.formInvalid} inactive={formData.formInvalid}>Submit Order
        </SubmitButton>
      </div>
      </form>
    </FormContainer>
    );
  };
  
  export default CustomerDataForm;