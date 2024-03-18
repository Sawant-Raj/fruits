// function handleFormSubmit(event){
//     event.preventDefault();
//     const name=event.target.username.value;
//     const email=event.target.email.value;
//     const phone=event.target.phone.value;
//     let myObj = {
//     name: name,
//     email: email,
//     phone: phone
// };
// let myObj_serialized = JSON.stringify(myObj);
// localStorage.setItem(myObj.email, myObj_serialized);
// let myObj_deserialized = JSON.parse(localStorage.getItem(myObj.email, myObj_serialized));
// showUserOnScreen(myObj);
// }
// function showUserOnScreen(myObj){
//     const parentElement=document.getElementById('listOfItems');
//     const childElement=document.createElement('li')
//     childElement.textContent=myObj.name+'-'+myObj.email+'-'+myObj.phone;
//     const delbtn=document.createElement('input');
//     delbtn.type="button";
//     delbtn.value="Delete";
//     delbtn.onclick=()=>{
//         localStorage.removeItem(myObj.email)
//         parentElement.removeChild(childElement);
//     }
//     // childElement.appendChild(delbtn);
//     // parentElement.appendChild(childElement);

//     const editbtn=document.createElement('input');
//     editbtn.type="button";
//     editbtn.value="Edit";
//     editbtn.onclick=()=>{
//         localStorage.removeItem(myObj.email)
//         parentElement.removeChild(childElement);
//         document.getElementById('nameInputTag').value=myObj.name;
//         document.getElementById('emailInputTag').value=myObj.email;
//         document.getElementById('phoneInputTag').value=myObj.phone;
//     }
//     childElement.appendChild(delbtn);
//     childElement.appendChild(editbtn);
//     parentElement.appendChild(childElement);
//   }

function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    let UserDetails = {
        username: username,
        email: email,
        phone: phone
    };
    let UserDetails_serialized = JSON.stringify(UserDetails);
    localStorage.setItem(UserDetails.email, UserDetails_serialized);
    let UserDetails_deserialized = JSON.parse(localStorage.getItem(UserDetails.email));
    showUserOnScreen(UserDetails);

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
function showUserOnScreen(UserDetails) {
    const parentElement = document.getElementById('listOfItems');
    const chidElement = document.createElement('li')

    // chidElement.textContent=UserDetails.name+'-'+UserDetails.email+'-'+UserDetails.phone;
    chidElement.innerHTML = UserDetails.username + '-' + UserDetails.email + '-' + UserDetails.phone;
    parentElement.appendChild(chidElement);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    chidElement.appendChild(delBtn);
    delBtn.onclick = () => {
        localStorage.removeItem(UserDetails.email);
        parentElement.removeChild(chidElement);
    }

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    chidElement.appendChild(editBtn);
    editBtn.onclick = () => {
        localStorage.removeItem(UserDetails.email);
        parentElement.removeChild(chidElement);
        document.getElementById('username').value = UserDetails.username;
        document.getElementById('email').value = UserDetails.email;
        document.getElementById('phone').value = UserDetails.phone;
    }
}