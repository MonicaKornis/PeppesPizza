import React , { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ButtonContainer, SubmitButton, AmmountOptions} from './styles';
import { FormPizza } from '../../types/index';
import { useCart } from "../../context/cart/cart-context";

type IAddToCartButtonProps = {
    buttonType: string;
    orderData: FormPizza;
    ammountInCart?: number;
}

const AddToCartButton: FunctionComponent<IAddToCartButtonProps>  = ({buttonType, orderData, ammountInCart}) => {
    const [ammountToAdd, setAmmountToAdd] = useState(ammountInCart || 1);
    const navigate = useNavigate()
    const {addAmmountToCart, updateAmmountInCart} = useCart();
    const caption = buttonType === 'add' ? "Add To Cart" : "Update Cart";
    const updateCart = buttonType === 'add' ? addAmmountToCart : updateAmmountInCart;
    const startingIndex = buttonType === 'add' ? 1 : 0;

    const selectOptions: JSX.Element[]  = []
    for(let i = startingIndex; i < 11; i++) {
        selectOptions.push(<option value={i} key={i}>{i}</option>)
    }

     const handleSubmit = (): void => {
      updateCart(orderData, ammountToAdd) 
      if(buttonType === 'add') navigate("/cart");
    };

    return (
    <ButtonContainer>
        <AmmountOptions value={ammountToAdd}  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAmmountToAdd(parseInt(e.target.value))}>
            {selectOptions}
        </AmmountOptions>
        <SubmitButton onClick={handleSubmit}>
           {caption}
        </SubmitButton>
    </ButtonContainer>
    )
}

export default AddToCartButton;