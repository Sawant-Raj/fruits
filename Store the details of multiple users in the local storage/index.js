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
}
function showUserOnScreen(UserDetails) {
    const parentElement = document.getElementById('listOfItems');
    const chidElement = document.createElement('li')

    // chidElement.textContent=UserDetails.name+'-'+UserDetails.email+'-'+UserDetails.phone;
    chidElement.innerHTML = UserDetails.username + '-' + UserDetails.email + '-' + UserDetails.phone;
    parentElement.appendChild(chidElement);
}