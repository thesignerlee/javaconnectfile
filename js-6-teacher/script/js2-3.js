const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')
console.log(money1, money2, total, answer_btn)
answer_btn.addEventListener('click',function(){
    //1. 버튼 클릭 시 prompt 입금액 입력받기
    let num = Number(window.prompt('입금액을 입력하세요'))
    //2. 1번 값 입금액(money1) 출력하기
    money1.value = num.toLocaleString('ko-kr')
    //3. 이자(money2) 100원 출력하기
    money2.value = 100
    //4. 입금액+이자 데이터 확인하기(number인지)
    console.log(typeof num)
    //5. 확인한 데이터 더해서 최종 변수저장하기, 숫자+숫자=숫자
    let result = num+100
    //6. 6번값 total변수에 3자리 콤마 붙여서 출력하기
    total.value = result.toLocaleString('ko-kr')
})