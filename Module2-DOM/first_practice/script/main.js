// import { validateEmail, validatePassword, validateUsername } from './validate.js'

// Random สีที่จะกดได้ในแต่ละครั้ง
const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
const divColorChange = document.querySelector('#rainbow')
const clickmeBtn = document.querySelector('#color-btn')

clickmeBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * colorArray.length) // 0-4 = 5
    console.log(random)
    divColorChange.style.backgroundColor = colorArray[random]
})

// user ใส่ข้อมูลแล้วข้อมูลนั้นไปลิสต์โชว์อยู่ข้างล่าง
const itemInput = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-btn')
const listItem = document.querySelector('#listItem ul')

addBtn.addEventListener('click', () => {
    const liEl = document.createElement('li')
    liEl.textContent = itemInput.value
    listItem.appendChild(liEl)
    localStorage.setItem('item', itemInput.value)
})
