module.exports = function allocate (salesOrders, purchaseOrders) {
  // Order the sales orders by date
  const sales = salesOrders.sort((a, b) => new Date(a.created) - new Date(b.created));
  // Order the purchase orders by date
  const purchases = purchaseOrders.sort((a, b) => new Date(a.receiving) - new Date(b.receiving));

  let results = [];

  for(let i = 0; i < sales.length; i++) {
    const sale = sales[i];
    let quantity = sale.quantity;

    for(let j = 0; j < purchases.length; j++) {
      const purchase = purchases[j];

      if(purchase.quantity > 0) {
        if(purchase.quantity >= quantity) {
          results.push({            
            'salesOrderId': sale.id,  
            'availabilityDate': purchase.receiving,
          });

          purchase.quantity -= quantity;
          quantity = 0;
          break;
        } else {
          quantity -= purchase.quantity;
          purchase.quantity = 0;
        }
      }
    }
  }

  return results;
}