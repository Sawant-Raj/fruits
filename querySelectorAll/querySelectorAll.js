const basket=document.querySelector('#basket-heading');
basket.style.color='brown';
const fruit=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor='brown';
  fruit[i].style.color='white';
}