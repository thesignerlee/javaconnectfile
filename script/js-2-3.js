const money = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const btn = document.querySelector('#answer_btn')
console.log(money, money2, total, btn)
btn.addEventListener('click', function(){
    //1. 버튼 클릭 시 prompt 입금액 입력받기
    //2. 1번 값 입금액(money1) 출력하기
    //3. 이자(money2) 100원 출력하기
    //4. 입금액+이자 데이터 확인하기(number인지)
    //5. 확인한 데이터 더해서 최종 변수저장하기, 숫자+숫자=숫자
    //6. 6번값 total변수에 3자리 콤마 붙여서 출력하기
    let data = window.prompt('입금값을 입력하세요')
    money.value = data
    money2.value = 100
    console.log(typeof money2.value, typeof money.value)
    let kong = Number(money.value) + Number(money2.value)  // 2를 넣어도 인풋은 저장하는 게 아니라 문자로 출력한다는 느낌. 그래서 data 앞에 넘버 넣어도 안 됨.
    total.value = kong.toLocaleString('ko-kr')
})

/* btn.addEventListener('click', function(){
    //1. 버튼 클릭 시 prompt 입금액 입력받기
    let num = window.prompt('입금액을 입력하세요') // let num = Number(window.prompt('입금액을 입력하세요'))
    //2. 1번 값 입금액(money1) 출력하기
    money1.value = num.toLocaleString('ko-kr')
    //3. 이자(money2) 100원 출력하기
    money2.value = 100
    //4. 입금액+이자 데이터 확인하기(number인지)
    console.log(typeof num)
    //5. 확인한 데이터 더해서 최종 변수저장하기, 숫자+숫자
    let result = +100
    //6. 6번값 total변수에 3자리 콤마 붙여서 출력하기
    total.value = result.toLocaleString('ko-kr')
}) */