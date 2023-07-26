 document.querySelector('.form__object').addEventListener('click', checkAct)

function checkAct(){
    let activeTab = document.activeElement.classList
    if(activeTab.classList.contains('active')){
        document.querySelector('.form__object').classList.remove('unactive')
        document.querySelector('.form__activness').remove()
    }
    else{
        document.querySelector('.form__object').classList.add('unactive')
        const para = document.createElement('p')
        const node = document.createTextNode('select tab first')
        para.appendChild(node)
    }
} 
