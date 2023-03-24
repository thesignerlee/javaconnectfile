//answer_btn
//answer_input
//day1
//day2
//day3
//total
let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
console.log(total, answer_btn, answer_input)
//객체.속성
//속성을 변경한다
//객체.속성 = 변경값
//length, innerHTML, style
//HTML 꾸밀 때 <p></p>와 <input type="text">, p는 innertext, input은 value 안에 숫자를 기입하므로 value를 속성으로 넣고 글자를 적음
/* answer_input.value = `결과는 ${total}장입니다.` */ /* 탬플릿 문자열 $, 변수와 문자를 함께 쓸 수 있다 */
// 23 -> 23장
// 요소.addEventListener(이벤트종류, 함수실행 및 호출); 이벤트종류에 클릭, 그 뒤에 실행시키고 싶은 값 function(){} 중괄호에 넣음
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행 결과를 작성하게 되어있음
    console.log(this) /* this라고 적으면 지금 출력되는 대상이 무엇인지 알려줌 */
    answer_input.value = `정답은 ${total}장입니다.`
}) /* 이벤트 종류는 문자로 취급 */