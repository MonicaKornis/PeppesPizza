import { HiringFrontendTakeHomeOrderRequest } from "../types";

export const createPizzaOrder = async function submitOrder(orderData: HiringFrontendTakeHomeOrderRequest) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
   
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Order submission failed');
    }
   
    return await response.json();
   }

export const fetchMenuData = async () => {
    const urls = ['https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/specialty-pizzas', 'https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza-pricing'];

    return await Promise.all(urls.map(async url => {
        const resp = await fetch(url);
        return resp.json();
    }));
};