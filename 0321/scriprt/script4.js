const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const ul = document.getElementsByTagName('ul')
const li = document.getElementsByTagName('li')
console.log(more)
console.log(more.innerHTML)
console.log(img)
console.log(plus, plus[0], plus[1])
console.log(join_btn)
console.log(ul)
console.log(li, li[0],li[1],li[2],li[3],li[4],li[5])

//-------------style 속성
//객체.속성
//style == css
//속성종류 => font-size, color, font-weight, backgorund... 스타일의 칼라값을 변수에 적용한다는 식
//객체.style.속성 = 값 (우측의 값을 좌측의 속성에 대입한다.)
more[0].style.color = 'red' /* 개별 접근을 하지 않고(대괄호 쓰지 않고) 적용하려 하면 에러 남. 정확한 개별접근을 해야함. */
li[0].style.background = 'pink'/* 자바에서는 -빼기모양 못 쓰므로 카멜기법으로 써야함, backgroundColor처럼 */
li[1].style.background = 'rgba(66, 66, 66, 1)'
li[2].style.background = '#F3421B'
li[3].style.background = 'coral'
li[4].style.background = 'aqua'
li[5].style.background = 'rgba(44, 44, 44, 1)'