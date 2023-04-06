const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(result1, result2, answer_btn)
//1. answer_btn 클릭했을 때 
answer_btn.addEventListener('click',function(){
    //2. prompt 값 입력(인증번호)
    let num = window.prompt('인증번호를 입력하세요')
    //3. 2번 값의 데이터타입이 result1 출력
    result1.value = typeof num
    //4. 2번 값의 데이터결과가 result2 출력
    result2.value = num
})