const user = [
    {
        name: 'u1',
        password: 'p1',
        computers: [{ id: '1', mark: 'Asus', img: 'https://www.itech.ph/wp-content/uploads/2023/04/ASUS-TUF-Gaming-A15-2023-jpg.webp', cpu: 'intel core i7', gpu: 'rtx 2682', }],
    }
]

if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify(user))
}

const loginBtn = document.querySelector('#login')
const allInput = document.querySelectorAll('input')
const alertDiv = document.querySelector('.alert')
const form = document.querySelector('form')

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
    }

    form.classList.add('was-validated')

    const users = JSON.parse(localStorage.getItem('users'))

    let userAvaible = users.some((user) => user.name === allInput[0].value && user.password === allInput[1].value)

    if(userAvaible){
        location.href = '../main/main.html'
        localStorage.setItem('currentUser', allInput[0].value)
    }else{
        console.log("User not available");
        alertDiv.style.display = 'block'
        setTimeout(() => {
            alertDiv.style.display = 'none'
        }, 3000);
    }
})