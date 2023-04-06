let money1 = 10000000
let money2 = 1000000
let total = money1+money2
//객체.메서드()
//객체.toLocaleString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

console.log(total_replace)
console.log(total, answer_btn, answer_input)

answer_btn.addEventListener('click',function(){
    answer_input.value = `총 ${total_replace}원이 들어있습니다.`
    //console.log(this)
})