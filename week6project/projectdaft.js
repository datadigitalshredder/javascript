

// CSE121B Project, Place a booking.

// Create three variables that hold references to the input, button, price, and list elements using const.
const input = document.querySelector('input');
const input1 = document.querySelector('#price');
const button = document.querySelector('button');
const list = document.querySelector('ul');
priceArray = [];

// Create an click event listener for the Add Item button using addEventListener. 
button.addEventListener('click', function() {

    // In the function block for adding an item
    let myItem = input.value;
        input.value = '';
    let myPrice = input1.value;
        input1.value = '';
    
    // if not, do the following:
    // create an li element
    const listItem = document.createElement('li');
    const listValue = document.createElement('li');
    const listText = document.createElement('span');
    const listAmount = document.createElement('span');
    // create a delete button
    const listBtn = document.createElement('button');

    // populate the li elements textContent or innerHTML with the input
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listValue.appendChild(listAmount);
    listAmount.textContent = myPrice;
    priceArray.push(parseFloat(myPrice))
    console.log(priceArray)
    // append the li element with the delete button
    listItem.appendChild(listBtn);
    listValue.appendChild(listBtn);
    // sum the item in the array
    document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);
    // populate the button textContent with an X
    listBtn.textContent = '❌';

    // append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);
    list.appendChild(listValue);

    // add an event listener to the delete button that removes the li element when clicked
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
        list.removeChild(listValue);
        //for( var i = 0; i < priceArray.length; i++) { 
                                   
           // if ( priceArray[i] === listValue) { 
              //  priceArray.splice(i, 1); 
              //  i--; 
           // document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);
           // }
        //}
        //priceArray.splice(listValue, 1); 
        //let filtered = priceArray.filter(function(value, index, arr){ 
            //return value > listValue;
        //});
        //const index = priceArray.indexOf(listValue);
            //if (index > -1) {
            //priceArray.splice(index, 1); // 2nd parameter means remove one item only
            //}
        priceArray.pop(listValue);
        //for( var i = 0; i < priceArray.length; i++){ 
    
            //if ( priceArray[i] === listAmount) { 
        
                //priceArray.splice(i, 1); 
            //}
        
        //}
        
        document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);
        
        let sum = 0;

        for (let i = 0; i < priceArray.length; i++) {
            sum += priceArray[i];
        }
        console.log(sum);
        const total = priceArray.reduce((sum, number) => sum + number, 0);
        console.log(priceArray.reduce(total));
        //let factor1 = document.querySelector('#subtotal').textContent;
        let factor1 = sum
        //let factor2 = 0.14;
        let tax = '';

        tax = taxCalclulator(factor1, factor2);
        //tax = `${tax}`;

        

        function taxCalclulator(sum) {
            return sum * .14;
        }
        // OUTPUT
        document.querySelector('#tax').textContent = tax;

        console.log(tax);
        

      }
    
    for( var i = 0; i < priceArray.length; i++) { 
                                   
        if ( priceArray[i] === listValue) { 
           priceArray.splice(i, 1); 
           i--; 
        }
    document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);document.querySelector('#subtotal').textContent = priceArray.reduce((sum, number) => sum + number, 0);
    console.log(priceArray)

    
    //document.querySelector('#tax').value = (multiplyNumbers);
    }
    // send the focus to the input element
    // clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    input.focus();
});

