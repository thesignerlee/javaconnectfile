let user_id = document.querySelector('#user_id')
let user_pw = document.querySelector('#user_pw')
let error_result = document.querySelector('#error_result')
const btn = document.querySelector('#login_btn')
btn.addEventListener('click',()=>{
    if(user_id.value == ''){
        error_result.innerHTML = '아이디를 입력하세요'
    }
    if(user_pw.value == ''){
        error_result.innerHTML = '비밀번호를 입력하세요'
    }
})
/* btn.addEventListener('click', id)
function id (){
    if(user_id.value == ''){
        error_result.innerHTML = '아이디를 입력하세요'
    }
}
function pw (){
    if(user_pw.value !== null){
        error_result.innerHTML = '패스워드를 입력하세요'
    }
} */
// input.value
// p.innerHTML