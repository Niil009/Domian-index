let btn = document.getElementById('btn')
let out = document.getElementById('out')
let input = prompt("enter your data")
let show = document.getElementById('show')
let list = document.getElementById('list')
let arr = ['ustav', 'vicky', 'niil', 'asit', 'priyanka']
btn.addEventListener('click', () => {
    let isAvailable = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) {
            isAvailable = false
            break;
        }
    }
    if (isAvailable) {
        out.textContent = "Domain available"
        out.style.backgroundColor = "green"
        arr.push(input)

    }
    else {
        out.textContent = "Domain unavailable"
        out.style.backgroundColor = "red"

    }
})
show.addEventListener('click', () => {
    
    list.style.display = "flex"
    list.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        let res = document.createElement('div')
        res.textContent = `${i + 1} user is ${arr[i]}`
        list.append(res)
    }
})