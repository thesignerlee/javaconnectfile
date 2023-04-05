//월-맑음
//화-맑음
//수-비
//목-비
//금-맑음
//토-흐림
//일-눈
let day = ['월','화','수','목','금','토','일']
let weather = ['맑음', '비', '흐림', '눈']
let colon = ['-', ':']
//DOM 제어 변수
const p = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')
console.log(weather, day, btn)
btn.addEventListener('click',function(){
    p[0].innerHTML = `${day[0]}요일 : ${weather[0]}`
    /* p[0].innerHTML = day[0]+colon[0]+weather[0] */
    p[1].innerHTML = day[1]+colon[0]+weather[0]
    p[2].innerHTML = day[2]+colon[0]+weather[1]
    p[3].innerHTML = day[3]+colon[0]+weather[1]
    p[4].innerHTML = day[4]+colon[0]+weather[0]
    p[5].innerHTML = day[5]+colon[0]+weather[2]
    p[6].innerHTML = day[6]+colon[0]+weather[3]
})