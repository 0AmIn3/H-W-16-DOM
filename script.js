




axios.get('https://dummyjson.com/users')
    .then(json => reloud(json.data.users))



let grid_img = document.querySelector('.grid_img')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let close_btn = document.querySelector('.close_btn')

function reloud(arr) {
    grid_img.innerHTML = ''
    



    for (let item of arr) {
        let block = document.createElement('div')
        let img = document.createElement('img')
        let names = document.createElement('p')
        let company = document.createElement('p')

        block.classList.add('block')
        img.classList.add('img')
        names.classList.add('names')
        company.classList.add('company')

        img.src = item.image
        names.innerHTML = `<i> ${item.firstName}   ${item.lastName} <br> ${item.maidenName}</i>`
        company.innerHTML = `${item.company.department}`
        grid_img.append(block)
        block.append(img, names, company)

        img.onclick = () => {
            let img_modal = document.querySelector('.img_modal')

            let firstName = document.querySelector('.firstName')
            let lastName = document.querySelector('.lastName')
            let maidenName = document.querySelector('.maidenName')
            let age = document.querySelector('.age')
            let email = document.querySelector('.email')
            let phone = document.querySelector('.phone')
            let gender = document.querySelector('.gender')

            firstName.innerHTML = item.firstName
            lastName.innerHTML = item.lastName
            maidenName.innerHTML = item.maidenName
            age.innerHTML = item.age
            email.innerHTML = item.email
            phone.innerHTML = item.phone
            gender.innerHTML = item.gender.slice(0 , 1).toUpperCase() + item.gender.slice(1)


            img_modal.src = item.image


            modal_bg.style.display = 'block'
            modal_bg.style.opacity = '1'

            modal.style.display = 'flex'
            setTimeout(() => {
                modal.style.opacity = '1'
                modal.style.transform = 'translate(-50% , -50%) scale(1)'
            }, 100);
        }

        close_btn.onclick = () => {
            



            modal_bg.style.opacity = '0'
            modal.style.opacity = '0'
            modal.style.transform = 'translate(-50% , -50%) scale(0)'

            modal_bg.style.opacity = '1'
            setTimeout(() => {

                modal.style.display = 'none'
                modal_bg.style.display = 'none'
    
            }, 100);
        }
    }

    console.log(arr);
}