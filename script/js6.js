let user_point = document.querySelector('#user_point') //인풋
let use_point = document.querySelector('#use_point') //인풋
const point_reset = document.querySelector('#point_reset')
const point_all_btn = document.querySelector('#point_all_btn')
let point = 10000//보유 포인트 값
console.log(user_point, use_point, point_reset, point_all_btn)
/* let use = 0 */
point_reset.style.display = 'none'

// 1. 보유포인트값 적립
user_point.value = point.toLocaleString('ko-kr')
//2. 전액사용 클릭 시 보유->사용 값 전환 (전환 후 보유0)
point_all_btn.addEventListener('click', ()=>{
    use_point.value = user_point.value
    user_point.value = 0
/*     point_reset.style.display = 'inline-block' */
    reset_display()
})
/* point_all_btn.addEventListener('click', num)
function num(){
    use_point.value = user
    user_point.value = use
    point_reset.style.display = 'inline-block'
} */
//3. X 클릭 시 사용 -> 보유 값 전환 (전환 후 사용0)
point_reset.addEventListener('click', ()=>{
    user_point.value = use_point.value
    use_point.value = 0
/*     point_reset.style.display = 'none' */
    reset_display()
})
/* point_reset.addEventListener('click', num2)
function num2(){
    user_point.value = user
    use_point.value = use
    point_reset.style.display = 'none'
} */
//4. 사용값 1 이상이면 X 보이고 아니면 X 숨기기

function reset_display(){
    if(use_point.value > 0){//사용 값 1 이상이면
        point_reset.style.display = 'inline-block'
    }else{point_reset.style.display = 'none'}
}