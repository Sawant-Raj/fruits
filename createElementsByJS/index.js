const divi=document.getElementsByTagName('div');
const fir=divi[0];
const sub=document.createElement('h3');
const subText=document.createTextNode('Buy high quality organic fruits online');
sub.appendChild(subText);
fir.appendChild(sub);
sub.id='sub';
const heading=document.getElementById('sub');
heading.style.fontStyle='italic';
const sec=divi[1];
const par=document.createElement('p');
const parText=document.createTextNode('Total fruits: 4');
par.appendChild(parText);
const lst=document.querySelector('.fruits');
sec.insertBefore(par,lst)
par.id='fruits-total';