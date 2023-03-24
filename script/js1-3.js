let yong = 10000
let snack = 2000
let ice = 1000
let total = yong - (snack+ice)
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
answer_btn.addEventListener('click',function(){
    //console.log(this)
    answer_input.value = `정답은 ${total_replace}원 입니다.`
})

console.log(yong, ice, snack, total, total_replace)

/* let total_replace = total.toLocaleString('ko-kr')
answer_btn.addEventListener('click', function(){
    answer_input.value = `정답은 ${total_replace}원 입니다.`
})
 */