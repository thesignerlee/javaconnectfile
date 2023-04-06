//월-맑음
//화-맑음
//수-비
//목-비
//금-맑음
//토-흐림
//일-눈
const yoil = ['월','화','수','목','금','토','일']
const weather = ['맑음','비','흐림','눈','태풍']
const result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(result,answer_btn)
answer_btn.addEventListener('click',function(){
    result[0].innerHTML = `${yoil[0]}요일 : ${weather[0]}`
    result[1].innerHTML = `${yoil[1]}요일 : ${weather[0]}`
    result[2].innerHTML = `${yoil[2]}요일 : ${weather[1]}`
    result[3].innerHTML = `${yoil[3]}요일 : ${weather[1]}`
    result[4].innerHTML = `${yoil[4]}요일 : ${weather[0]}`
    result[5].innerHTML = `${yoil[5]}요일 : ${weather[2]}`
    result[6].innerHTML = `${yoil[6]}요일 : ${weather[3]}`
})