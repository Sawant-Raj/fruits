const form=document.querySelector('form');
const input=document.createElement('input');
input.style.fontStyle = 'italic';
const button=document.querySelector('button');
form.insertBefore(input,button);

input.addEventListener('keyup',function(event){
    // const textDescription=event.target.value;
    const textDescription=event.target.value.toLowerCase();
    for(let i=0;i<fruit.length;i++){
        const currentFruitText=fruit[i].firstChild.textContent.toLowerCase();
        if(currentFruitText.indexOf(textDescription)==-1){
            fruit[i].style.display='none';
        }
        else{
            fruit[i].style.display='flex';
        }
    }
    // console.log(textDescription); 
})
const description=document.createTextNode(input.value);
console.log(input.value);

const filter=document.getElementById('filter');
const fruit=document.getElementsByClassName('fruit');
filter.addEventListener('keyup',function(event){
    const textEntered=event.target.value.toLowerCase();
    for(let i=0;i<fruit.length;i++){
        const currentFruitText=fruit[i].firstChild.textContent.toLowerCase();
        if(currentFruitText.indexOf(textEntered)==-1){
            fruit[i].style.display='none';
        }
        else{
            fruit[i].style.display='flex';
        }
    }
})