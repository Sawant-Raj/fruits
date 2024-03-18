// const form = document.querySelector('form');
function handleFormSubmit(event){
    event.preventDefault();

    // const username = document.getElementById('username').value;
    // const email = document.getElementById('email').value;
    // const phone = document.getElementById('phone').value;

    const username =event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    let UserDetails = {
        username: username,
        email: email,
        phone: phone
    };
    let UserDetails_serialized = JSON.stringify(UserDetails);
    localStorage.setItem('User Details', UserDetails_serialized);
    let UserDetails_deserialized = JSON.parse(localStorage.getItem('User Details'));
    console.log(UserDetails_deserialized);
}
// form.addEventListener('submit', function (event) {
    // event.preventDefault();
    // const username = document.getElementById('username').value;
    // const email = document.getElementById('email').value;
    // const phone = document.getElementById('phone').value;
    // let UserDetails = {
    //     username: username,
    //     email: email,
    //     phone: phone
    // };
    // let UserDetails_serialized = JSON.stringify(UserDetails);
    // localStorage.setItem('User Details', UserDetails_serialized);
    // let UserDetails_deserialized = JSON.parse(localStorage.getItem('User Details', UserDetails_serialized));
    // console.log(UserDetails_deserialized);
// })