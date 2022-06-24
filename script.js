const firstname = prompt('enter your name');
const height = prompt('enter your height in number e.g 4');
const country = prompt('enter your country');


if (firstname.length <= 2 || !firstname){
   alert('invalid name: name must contain 3 or more letters')

}else if (!height){
    alert ('height cannot be empty')
}else if (country.length <=3 || !country){
    alert('invalid country name')
}else{
    document.write((`Hi ${firstname}, you are ${height} ft tall and your nationality is ${country}.`).toUpperCase());
}
