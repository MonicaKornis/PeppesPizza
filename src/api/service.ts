import { HiringFrontendTakeHomeOrderRequest, HiringFrontendTakeHomeOrderStatus } from "../types";

export const createPizzaOrder = async (orderData: HiringFrontendTakeHomeOrderRequest) => {
    const response = await fetch('https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza', {
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

export const editPizzaStatus = async (orderId: string, orderStatus: HiringFrontendTakeHomeOrderStatus) => {
  const response = await fetch(`https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      locationId: 'm-kornis',
      orderId: orderId,
      status: orderStatus
    })
  });
 
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Order update failed');
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

export const fetchAllOrders = async () => {
  const url = `https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizzas?locationId=m-kornis`;

  const response = await fetch(url, {
    method: 'GET',
  });
 
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', {
      status: response.status,
      statusText: response.statusText,
      errorText
    });

    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
 
  return await response.json();
};

export const fetchOrderById = async (orderId: string) => {
  const url = `https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza?locationId=m-kornis&orderId=${orderId}`;

  const response = await fetch(url, {
    method: 'GET',
  });
 
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', {
      status: response.status,
      statusText: response.statusText,
      errorText
    });

    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
 
  return await response.json();
};

export const cancelOrder = async (orderId: string) => {
  const url = `https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home/pizza/cancel?locationId=m-kornis`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      orderId: orderId,
    })
  });
 
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', {
      status: response.status,
      statusText: response.statusText,
      errorText
    });

    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
 
  return await response.json();
};