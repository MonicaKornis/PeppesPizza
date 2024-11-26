import React, { useState } from 'react';
import { PizzaSize, PizzaType, PizzaTopping, PizzaFormData, Topping, PIZZA_SIZES, FormPizza } from '../../types/index';
import {FormContainer, Title, MenuOption, ToppingAmountButton , SubmitButton, FormSection, Label, SummaryText, Select, ToppingsContainer, ToppingItem, Checkbox, SummaryTitle, ToppingLabel, OrderSummary, AddMoreToppingsButton} from './style.ts';
import AddToCartButton from './../AddToCartButton/AddToCardButton.js';
import { transformToTitleCase } from './../../utils.tsx';

const PizzaOrderForm2 = ({toppings, pizzaData}) => {
  const [formData, setFormData] = useState<FormPizza>({
    type: '',
    size: '',
    toppings: [],
    toppingExclusions: [],
    totalPrice: 0,
    quantity: 0
  });
  
  const pizzaTypes = Object.keys(pizzaData);

  const calculatePrice = (type: string, size: string, toppings: PizzaTopping[]): number => {
    if (type === undefined || size === undefined) return 0;
    const basePrice =  pizzaData[formData.type].price[size] || 0;
    // Calculate additional toppings price
    const toppingPrice = toppings?.reduce((acc, curr) => acc + curr.price, 0); //calculate here
    return basePrice + toppingPrice;
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedType = e.target.value as PizzaType | '';
    setFormData(prev => {
      return {
        ...prev,
        type: selectedType,
        toppings: [],
        toppingExclusions: [],
        totalPrice: formData.size.length > 0 && formData.type.length > 0 && selectedType.length > 0 ?  pizzaData[selectedType].price[formData.size] : 0,
      };
    });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newSize = e.target.value as PizzaSize | ''
    
    setFormData((prev: any) => ({
      ...prev,
      size: newSize,
      totalPrice: formData.type !== '' ? calculatePrice(prev.type, newSize, prev.toppings || []): 0
    }));
  };


  const modifyDefaultTopping = (topping: string, operation: string) => {
    topping = topping.split('_').join(' ')
    if (operation === 'exclude' && formData.type !== 'custom' && pizzaData[formData.type].toppings.includes(topping.split('_').join(' '))) {
        setFormData((prev: FormPizza) => ({
            ...prev,
            toppingExclusions: [...prev.toppingExclusions, topping]
        }));
    } else if (operation === 'exclude') {
      
        setFormData((prev: FormPizza) => {
            const toppings = [...prev.toppings]; 
            const toppingIndex = toppings.findIndex(currTopping => currTopping.name.split('_').join(' ') === topping); 
            console.log(topping, 'topping')
            console.log(toppings[0].name, 'newState');
            console.log(toppingIndex, 'itemIndex')
            toppings.splice(toppingIndex, 1)
            if(toppingIndex === -1) return {...prev}
           return ( {
            ...prev,
            toppings: toppings,
            totalPrice: calculatePrice( prev.type, prev.size, toppings)
          })
      });
    } else{
        setFormData((prev: FormPizza) => {
                const toppings = [...prev.toppingExclusions]; 
                const toppingIndex = toppings.indexOf(topping);
                toppings.splice(toppingIndex, 1)
               return ( {
                ...prev,
                toppingExclusions: toppings

              })
          });
    }
  }

  const handleToppingAmount = (topping: string, amount: 'none' | 'light' | 'regular' | 'extra') => {
    console.log('HERe')
    setFormData((prev: FormPizza) => {

        const newState = [...prev.toppings]

        const itemIndex = newState.findIndex((currTopping: PizzaTopping ) => currTopping.name === topping); 
        console.log(topping, 'topping')
        console.log(newState, 'newState');
        console.log(itemIndex, 'itemIndex')
        const newTopping = {
            name: topping,
            quantity: amount,
            price: toppings[topping][amount]
        }

        if(amount === 'none' && itemIndex > -1) {
            newState.splice(itemIndex, 1)
        } else if (itemIndex > -1) {
            newState[itemIndex] = newTopping;
        } else {
            newState.push(newTopping)
        }
      
      return {
        ...prev,
        toppings: newState,
        totalPrice: calculatePrice(prev.type, prev.size, newState)
      };
    });
  };

  console.log(formData)

  const formButton = (!formData.type || !formData.size) ? null : 
    <AddToCartButton buttonType='add' orderData={formData}/>;

  const toppingsToDisplay = formData.type.length === 0 ? []  
    : Object.keys(toppings).map(topping => {
        return (<ToppingItem key={topping}>
          <div>
            <ToppingLabel htmlFor={topping}>{topping.split('_').join(' ')}</ToppingLabel>
          </div>
          <div className="topping-amounts">
           { pizzaData[formData.type].toppings.includes(topping.split('_').join(' ')) ? 
                (formData?.toppingExclusions?.includes(topping.split('_').join(' ')) ? <ToppingAmountButton 
                onClick={() => modifyDefaultTopping(topping, 'include')}
                // selected={formData.toppings?.find(t => t.name == topping)?.quantity === 'none' || false } 
                selected={false}
              >
                {`Include`}
              </ToppingAmountButton> : <ToppingAmountButton 
                onClick={() => modifyDefaultTopping(topping, 'exclude')}
                selected={true}
              >
                {`Exclude`}
              </ToppingAmountButton>)
           : (<>
            <ToppingAmountButton 
              onClick={() => modifyDefaultTopping(topping, 'exclude')}
             selected={formData.toppings?.map(t => t.quantity).includes(topping)} 
            >
              {`None`}
            </ToppingAmountButton> 
            <ToppingAmountButton 
              onClick={() => handleToppingAmount(topping, 'light')}
            //   selected={formData.toppingAmounts[topping] === 'extra' || false } 
            >
              {`Light`}
            </ToppingAmountButton>
            <ToppingAmountButton 
              onClick={() => handleToppingAmount(topping, 'regular')}
            //   selected={formData.toppingAmounts[topping] === 'extra' || false } 
            >
              {`Regular`}
            </ToppingAmountButton>
            <ToppingAmountButton 
              onClick={() => handleToppingAmount(topping, 'extra')}
            //   selected={formData.toppingAmounts[topping] === 'extra' || false } 
            >
              {`Extra`}
            </ToppingAmountButton></>)}
          </div>
        </ToppingItem>)
});
      
  return (
    <FormContainer>
      <Title>Create Your Pizza</Title>
      
      <div>
        <FormSection>
          <Label>Pizza Type: Select a Specialty or Custom Pizza</Label>
          <Select value={formData.type} onChange={handleTypeChange} required>
            <MenuOption value="">Select a type</MenuOption>
            {pizzaTypes.map(type => {
              return <MenuOption key={type} value={type}>{transformToTitleCase(type)}</MenuOption>
            })}
          </Select>
        </FormSection>

        <FormSection>
          <Label>Size</Label>
          <Select value={formData.size} onChange={handleSizeChange} required>
            <MenuOption value="">Select a size</MenuOption>
            {formData.type ? Object.keys(pizzaData[formData.type]?.price).map(size => (
              <MenuOption key={size} value={size}>{`${size} - ${pizzaData[formData.type].price[size]}`}</MenuOption>
            )) : null}
          </Select>
        </FormSection>

        <FormSection>
          {toppingsToDisplay.length === 0 ? null : <Label>Extra Toppings</Label>}
          <ToppingsContainer>
            {toppingsToDisplay}
          </ToppingsContainer>
        </FormSection>

        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryText>
            Price: ${formData.totalPrice.toFixed(2)}
          </SummaryText>
          {formData?.toppings && formData?.toppings?.length > 0 && <SummaryText>
            Extra Toppings: {formData.toppings?.map(topping => `${transformToTitleCase(topping.name)} - $${topping.price}`).join(', ')}
          </SummaryText>}
          {formData?.toppingExclusions && formData?.toppingExclusions?.length > 0 && <SummaryText>
            Excluded Toppings: {formData.toppingExclusions?.map(topping => `${transformToTitleCase(topping)}`).join(', ')}
          </SummaryText>}
        </OrderSummary>

        {formButton}
      </div>
    </FormContainer>
  );
};

export default PizzaOrderForm2;