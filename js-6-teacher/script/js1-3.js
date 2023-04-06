let money = 10000
let snack = 2000
let ice = 1000
let total = money-snack-ice
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
console.log(total, total_replace, answer_btn, answer_input)
answer_btn.addEventListener('click',function(){
    console.log(this)
    answer_input.value = total_replace
})