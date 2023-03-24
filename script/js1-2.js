let yong = 10000000
let walk = 1000000
let total = yong+walk
//객체.메서드()
//객체.toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
answer_btn.addEventListener('click',function(){
    //console.log(this)
    answer_input.value = `정답은 ${total_replace}원 입니다.`
})

console.log(total_replace)
console.log(yong, walk, total, answer_btn, answer_input)