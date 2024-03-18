// const form = document.querySelector('form');
// const fruitToAdd = document.querySelector('#fruit-to-add');
// const fruits = document.querySelector('.fruits');

// const liForEdit = document.getElementsByClassName('fruit');


// for (let i = 0; i < liForEdit.length; i++) {
//     const editBtn = document.createElement('button');
//     const editBtnText = document.createTextNode('Edit');
//     editBtn.appendChild(editBtnText);
//     editBtn.className = 'edit-btn';
//     liForEdit[i].appendChild(editBtn);
// }

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const li = document.createElement('li');
//     li.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';

//     // const liText=document.createTextNode(fruitToAdd.value);
//     // li.appendChild(liText);
//     // li.className='fruit';
//     // const delBtn=document.createElement('button');
//     // const delBtnText=document.createTextNode('x');
//     // delBtn.appendChild(delBtnText);
//     // delBtn.className='delete-btn';
//     // li.appendChild(delBtn);

//     const editBtn=document.createElement('button');
//     const editBtnText=document.createTextNode('Edit');
//     editBtn.appendChild(editBtnText);
//     editBtn.className='edit-btn';
//     li.appendChild(editBtn);

//     fruits.appendChild(li);
//     // console.log(li);
// })
// fruits.addEventListener('click', function (event) {
//     if (event.target.classList.contains('delete-btn')) {
//         const fruitToDelete = event.target.parentElement;
//         fruits.removeChild(fruitToDelete);
//     }
// })

const form = document.querySelector('form');
const fruit = document.getElementsByClassName('fruit');
for (let i = 0; i < fruit.length; i++) {
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    fruit[i].appendChild(editBtn);
}

const fruitToAdd = document.getElementById('fruit-to-add');
const fruitsList = document.querySelector('.fruits');
const listToAdd = document.createElement('li');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    listToAdd.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';
    fruitsList.appendChild(listToAdd);
})

fruitsList.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement;
        fruitsList.removeChild(fruitToDelete);
    }
})