//아메리카노 1개 가격 4700원
const btn = document.querySelector('#order')
const number = document.querySelector('#number')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
const price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값 0)
let total = 0 //변경 최종가격 변수(초기값 0)

btn.addEventListener('click', order_add)

function order_add(){
    num++
    number.innerHTML = num
    total = num*price
    result.innerHTML = total.toLocaleString('ko-kr')
}
function order_reset(){
    num = 0
    total = 0
    number.innerHTML = num
    result.innerHTML = total
}

reset.addEventListener('click', order_reset)
/* 마트나 음식점에서 많이 쓰이는 것, 참고 */