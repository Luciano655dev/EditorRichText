const elements = document.querySelectorAll('.btn')

for(let i=1; i<=7; i++){
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    document.querySelector('#fontSize').appendChild(option)
}
document.querySelector('#fontSize').value = 3
document.execCommand('fontSize', false, document.querySelector('#fontSize').value)

elements.forEach(el => {
    el.addEventListener('click', ()=>{
        let command = el.dataset['element']
        document.execCommand('fontSize', false, document.querySelector('#fontSize').value)

        if(command == 'createLink' || command == 'insertImage'){
            var url = prompt('Enter the link here:', 'http://')
            document.execCommand(command, false, url)
            return
        }else if(command == 'foreColor'){
            document.execCommand(command, false, document.querySelector('.color').value)
            return
        }else if(command == 'downloadTxt'){
            const a = document.createElement('a')
            const blob = new Blob([document.querySelector('.content').innerHTML])
            const dataUrl = URL.createObjectURL(blob)
            a.href = dataUrl
            a.download = `${document.querySelector('#downloadTextBox').value.replace(' ', '')}.txt`
            a.click()
            return
        }else if(command == 'downloadPdf'){
            html2pdf().from(document.querySelector('.content').innerHTML).save(`${document.querySelector('#downloadTextBox').value.replace(' ', '')}.txt`)
            return
        }

        document.execCommand(command, false)
    })
})

/* Highlighter script */
const highlighter = (btn) => {
    if(btn.getAttribute('data-isPressed') == "false"){
        btn.setAttribute('data-isPressed') = "true"
        btn.classList.add('edit')
    }else{
        btn.setAttribute('data-isPressed') = "true"
        btn.classList.remove('edit')
    }
}

document.querySelectorAll('#btnEdit').forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.getAttribute('data-isPressed') == "false"){
            btn.style.background = "#7c7c7c"
            btn.setAttribute('data-isPressed', true)
        }else{
            btn.setAttribute('data-isPressed', false)
            btn.style.background = ""
        }
    })
})