import { FormPizza } from './types';

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

