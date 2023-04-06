//var  vs   let const 
//document.getElementById, sByTagName, sByClassName == ES5 이전 버전 DOM
//querySelector ES6 DOM
const box_h4 = document.querySelector('.box > h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
console.log(h1_after, box_h4)
// 객체.style.css속성 = '속성값'
// h1_after.style.content = 'ABC'
h1_tag.style.backgroundColor = '#ff0'

const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p = document.querySelector('p')
const main = document.querySelector('#main')
const btn = document.querySelector('#btn')
const link = document.querySelector('#link')
console.log(main, btn, link, p)
console.log(h1_tag) //변수 값 확인
console.log(h2_cls[1], h3_tag)