import { CartState, CartPizza } from './types';

export const checkIfDuplicates= (newItem: CartPizza, cart: CartState): CartPizza | null => {
    const items = cart.items;
    let duplicate = null
    if(items.length) {
        duplicate = items.find((item: CartPizza) =>  {
            const sizeEqual = newItem.size == item.size;
            const typeEqual = newItem.type == item.type;
            const toppingsNewItem = newItem.toppings.sort()
            const toppingsExistingItem = item.toppings.sort();
            const toppingsEqual =  (toppingsNewItem.length === toppingsExistingItem.length) && toppingsNewItem.every((item, index) => item === toppingsExistingItem[index])
            if(sizeEqual && typeEqual && toppingsEqual) {
                duplicate = item; 
                console.log('HERE')
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