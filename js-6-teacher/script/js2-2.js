const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')
console.log(money1, money2, total, answer_btn)

answer_btn.addEventListener('click',function(){
    //console.log(this)//버튼 동작 확인 콘솔
    //console.log(money1.value, money2.value)//추적 값 확인
    //console.log(money1.value+money2.value)//더하기 결과 확인(오류)
    //문자+문자=문자 1+1=11
    //console.log(typeof money1.value, typeof money2.value)//타입확인
    //console.log(typeof Number(money1.value)) //number 형변환메서드 활용
    //변수X
    total.value = Number(money1.value) + Number(money2.value)

    //변수O
    let m1_num = Number(money1.value)
    let m2_num = Number(money2.value)
    let str_total = m1_num + m2_num
    total.value = str_total.toLocaleString('ko-kr')
})