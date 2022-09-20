let page = document.getElementById('page')
let table = document.querySelector('table')

NumberList(10)

function NumberList(num)
{
    for(let i = 1; i<=num; i++)
    {
        let option = document.createElement('option')
        option.textContent = `${i}`
        option.value = `{i}`
        page.append(option)
    }
} 