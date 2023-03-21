const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')
console.log(btn1, btn, btn[0], btn[1], btn[2], btn[3])
console.log(btn1.innerHTML)
//내용변경 == 대입한다
btn[0].innerHTML ='home'
btn[1].innerHTML ='mail'
btn[2].innerHTML ='cafe'
btn[3].innerHTML ='blog'
btn1.innerHTML = '확인완료' /* btn1을 확인완료로 대입하겠다. */