# This is a FIFO problem.

## Overview

We have products arriving based on supply, and then sent to customers based on demand.
Demand is from customers. 
Supply is from the vendors.
 
We need to match the two.  

## Sales Orders

Sales Orders are orders created by a customer for us to provide a product. It is the demand.
  - Properties:
    - 'created': when the sales order was created
    - 'quantity': how many items the customer wants

```javascript
const salesOrders = [{
  'id': 'S1',
  'created': '2020-01-02',
  'quantity': 6
}, {
  'id': 'S2',  
  'created': '2020-11-05',
  'quantity': 2  
}, {
  'id': 'S3',  
  'created': '2019-12-04',
  'quantity': 3  
}, {
  'id': 'S4',  
  'created': '2020-01-20',
  'quantity': 2  
}, {
  'id': 'S5',  
  'created': '2019-12-15',
  'quantity': 9  
}];
```

## Purchase Orders

Purchase Orders are orders created by us to receive a product. It is the supply.
  - Properties:
    - 'receiving': when we expect to receive the product
    - 'quantity': how many we will be receiving

```javascript
const purchaseOrders = [{
  'id': 'P1',  
  'receiving': '2020-01-04',
  'quantity': 4
}, {
  'id': 'P2',  
  'receiving': '2020-01-05',
  'quantity': 3  
}, {
  'id': 'P3',  
  'receiving': '2020-02-01',
  'quantity': 5  
}, {
  'id': 'P4',  
  'receiving': '2020-03-05',
  'quantity': 1  
}, {
  'id': 'P5',  
  'receiving': '2020-02-20',
  'quantity': 7
}];
```

## Goals

We want to supply the products to the customers in the order in which they were requested. 

Implement the function **'allocate'**.

The function should return an array of elements. Each element should include:
 - the id ( salesOrderId ) of the sales order
 - the date ( availabilityDate ) the customer should expect to get the item

 ```javascript

// This is just an example. The values are random and does not correspond to any valid input.

const results = [{
  'salesOrderId': 'foo',  
  'availabilityDate': '2020-12-01'
}, {
  'salesOrderId': 'bar',  
  'availabilityDate': '2020-12-20'
}];
```

Additional rules to the **'allocate'** function:
  - we only send the product once we have enough for that sales order
    - (so if the sales order is for 2, we need to have 2 available before sending)
  - the function should support any number of sales orders or purchase orders
  - to make it simple we only have one product

```javascript
function allocate (salesOrders, purchaseOrders) {
 
}
```

## Delivering

Please follow these instructions to deliver your solution:

- Create a GitHub repository and grant read access to jritchie-ne and jchan-ne
- You should host your repository on GitHub
- The repository should be private
- There should be no mention to the company (nowhere, not in the source, not in the repository name, etc )
- There should be no reference or copy of the exercise statements and explanations ( like this same document )
- An automated routine will evaluate your solution. Please make sure:
  - to export your function as a CommonJS module using the package.json "main" field:
    - See https://docs.npmjs.com/cli/v8/configuring-npm/package-json#main
- In order to evaluate your solution we will only:
  - `git clone <the url of your repository>`
  - and then we will run our own automated results verifications
  - please make sure your solution is right there as part of the default branch
  - make sure you export your function directly
    - e.g: `module.exports = yourFunction`
