import { FormPizza, CustomerFormData, OrderItem, HiringFrontendTakeHomePaymentMethod, HiringFrontendTakeHomeOrderType, HiringFrontendTakeHomePizzaType, HiringFrontendTakeHomePizzaSize } from './types';
import { v1 as uuid} from 'uuid';

export const checkIfDuplicates = (newItem: FormPizza, cart: { items: FormPizza[]}): FormPizza | null => {
    const items: FormPizza[] = cart.items;
    let duplicate: FormPizza | null = null
    if(items.length) {
        duplicate = items.find((item: FormPizza) =>  {
            const sizeEqual = newItem.size == item.size;
            const typeEqual = newItem.type == item.type;
            const toppingsNewItem = newItem.toppings?.sort()
            const toppingsExistingItem = item.toppings?.sort();
            const toppingsEqual =  toppingsExistingItem && (toppingsNewItem?.length === toppingsExistingItem?.length) && toppingsNewItem?.every((item, index) => item === toppingsExistingItem[index])
            if(sizeEqual && typeEqual && toppingsEqual) {
                duplicate = item; 
                return true;
            }
        }) || null;
    }
    return duplicate;
}

export const transformToTitleCase = (string: string) => {
    const withoutUnderscore = string.split('_').join(' ')
    let newLabel = withoutUnderscore.split(' ');
    newLabel = newLabel.map(string => {
        const label = string.split('');
        label[0] = label[0].toUpperCase()
        return label.join('')
    })
    return newLabel.join(' ')
}

export const formatDataForOrder = (formData: CustomerFormData, pizzas: FormPizza[], totalCost: number) => {
    // console.log(formData, 'form');
    // console.log(pizzas)
    const requestData = {
        items: ([] as OrderItem[]),
        locationId: 'm-kornis',
        customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email || '',
        deliveryAddress: {
            street: formData.state,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode
        }},
        totalAmount: totalCost,
        paymentMethod: formData.paymentType || HiringFrontendTakeHomePaymentMethod.Cash as HiringFrontendTakeHomePaymentMethod,
        creditCardNumber: formData.creditCardNumber,
        type: formData.deliveryType || HiringFrontendTakeHomeOrderType.Pickup as HiringFrontendTakeHomeOrderType
    }

    const orderPizzas = pizzas.map((pizza) => {
        return {
            id: pizza.id || uuid(),
            pizza: {
                type: pizza.type || HiringFrontendTakeHomePizzaType.Custom,
                size: pizza.size || HiringFrontendTakeHomePizzaSize.Large,
                toppings: pizza.toppings,
                toppingExclusions: pizza.toppingExclusions,
                quantity: pizza.quantity,
                totalPrice: pizza.totalPrice
            }
        }
    })
    requestData.items = orderPizzas;
    return requestData;
}


// export type HiringFrontendTakeHomeOrderRequest = {
//   //IMPORTANT: unique identifier for this pizza location (and your test)
//   locationId: string;
//   items: [
//     {
//       id: string;
//       pizza: 
//         {
//           type: HiringFrontendTakeHomePizzaType;
//           size: HiringFrontendTakeHomePizzaSize;
//           // For specialty pizzas, we only add extra toppings in the toppings array
//           // For custom pizzas, we charge for all toppings
//           toppings?: PizzaTopping[];
//           // For specialty pizzas, we can exclude toppings that are already included in the pizza
//           toppingExclusions?: HiringFrontendTakeHomePizzaToppings[];
//           quantity: number;
//           totalPrice: number;
//         };
//     }
//   ],
//   customer: {
        // firstName: string;
        // lastName: string;
        // email: string;
        // deliveryAddress?: {
        //     street: string;
        //     city: string;
        //     state: string;
        //     zipCode: string;
        // };
        // };
//   totalAmount: number;
//   paymentMethod: HiringFrontendTakeHomePaymentMethod;
//   creditCardNumber?: string;
//   type: HiringFrontendTakeHomeOrderType;
// };

export const checkIfFormValid = (formData: CustomerFormData) => {
    if(formData.email?.length === 0 || formData.firstName?.length === 0 || formData.lastName?.length === 0 ||  !formData.deliveryType || !formData.paymentType) {
        return false;
    }
    if(formData.deliveryType === 'Delivery') {
        if(formData.addressLine1?.length === 0 || formData.zipCode?.length === 0 || formData.state?.length === 0 || formData.city?.length === 0 ) {
            return false 
        }
    };

    if(formData.paymentType === 'Credit') {
        if(formData.creditCardNumber?.length === 0 || !formData.expiryDate || formData.cvv?.length === 0) {
            return false 
        }
    }

    return true;
}
