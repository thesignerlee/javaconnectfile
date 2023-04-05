//사이트에 미리 저장된 회원정보 변수(배열)
let userId = ['a','b','c','d','e','f']
let userPw = ['1','2','3','4','5','6']
//DOM 제어 변수
const id_pw_result = document.querySelectorAll('.result') /* querySelector만 쓰면 맨앞에 있는 id만 잡힌다. querySelectorAll을 써야 모두 인식한다. */
const btn = document.querySelector('#answer_btn')
console.log(id_pw_result, btn)
console.log(id_pw_result[0], id_pw_result[1])
btn.addEventListener('click', function(){
    id_pw_result[0].innerHTML = userId[1] /* innerHTML은 속성 인풋이라면 value */
    id_pw_result[1].innerHTML = userPw[1]
}) // 상상해보면서 만들기. 아이디, 비밀번호 확인을 하려는데 저장소에 여러 사람의 Id, Pw가 들어있고 그 안에 일정한 것을 끄집어 내서 출력하려고 한다.