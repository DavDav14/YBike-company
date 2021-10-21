const form = document.getElementById('form');
const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const color = document.getElementById('color');
const username = document.getElementById('username');
const telp = document.getElementById('telepon');
const address = document.getElementById('address');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get the values from the inputs
    const productValue = product.value.trim();
    const quantityValue = quantity.value.trim();
    const colorValue = color.value.trim();
    const usernameValue = username.value.trim();
    const telpValue = telp.value.trim();
    const addressValue = address.value.trim();

    if(usernameValue ===''){
        //show error
        //add error class
        setErrorFor(username,'The name cannot be blank');
    }else if(usernameValue.length < 3){
        setErrorFor(username,'The name must be more than 2 words')
    }else{
        //add success class
        setSuccessFor(username,'Your name is valid');
    }

    if(telpValue ===''){
        setErrorFor(telepon,'Phone number cannot be blank');
    }else if(telpValue.length >13){
        setErrorFor(telepon,'Phone number no more than 13 numbers');
    }else if(telpValue.length <11){
        setErrorFor(telepon,'Phone number no less than 11 numbers');
    }else{
        setSuccessFor(telepon,'Your Phone number is valid');
    }

    if(addressValue === ''){
        setErrorFor(address,'Address cannot be blank');
    }else{
        setSuccessFor(address,'Your address is valid');
    }

    if(colorValue === '' || colorValue ==='none'){
        setErrorFor(color,'You must be choose the color');
    }else{
        setSuccessFor(color,'Your choose is ready');
    }

    if(quantityValue ===''){
        setErrorFor(quantity,'You must fill the quantity');
    }else{
        setSuccessFor(quantity,'Your quantity is valid');
    }

    if(productValue ==='' || productValue ==='none'){
        setErrorFor(product,'You must be choose the product');
    }else{
        setSuccessFor(product,'Your choose is ready');
    }

}

function setErrorFor(input,message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control success';
}

// var checkString = document.getElementById('username');
// if (checkString != "") {
//     if ( /[^A-Za-z\d]/.test(checkString)) {
//         alert("Please enter only letter and numeric characters");
//         document.formname.txt.focus();
//         return (false);
//     }
// }