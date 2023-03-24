//var vs let const let const는 es6에 추가되어서 var의 단점을 보완한 것
//document.getElementById, sByTagName, sByClassname, sByClassName = ES5 이전 버전 DOM
//querySelector ES6 DOM
/* const h1 = document.getElementsByTagName('h1') [0]
const sub_title = document.getElementsByClassName('sub_title')
const h3 = document.getElementsByTagName('h3') [0]
const p = document.getElementsByTagName('p') [0]
const main = document.getElementById('main')
const btn = document.getElementById('btn')
const link = document.getElementById('link')
---------출력
console.log(h1)
console.log(sub_title[0],sub_title[1])
console.log(h3)
console.log(p)
console.log(main)
console.log(btn)
console.log(link) */
const box_h4 = document.querySelector('.box > h4')/* 부모 자식 적어서 활용 가능, 바로 앞 부모만 구분용으로 씀 중복되어 있을 때 꺽쇠로 구분 가능*/
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
/* 자바에 CSS 코드 쓸 때 스타일 씀, 객체.style.css속성 = '속성값' */
// h1_after.style.content = 'ABC'
h1_tag.style.backgroundColor = '#ff0'
const h2_cls = document.querySelectorAll('.sub_title') /* Selector를 사용하면 가장 위의 것 하나만 인식함 */
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelectorAll('p')
const main_id = document.querySelector('#main')
const btn_id = document.querySelector('#btn')
const link_id = document.querySelector('#link')

console.log(box_h4, h1_tag, h1_after, h2_cls[0],h2_cls[1], h3_tag, p_tag[0], main_id, btn_id, link_id) //변수 값 확인, 데이터 값이 제대로 들어갔는지 확인하려고 변수값을 로그 안에 기재