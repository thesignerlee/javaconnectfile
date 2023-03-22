// DOM 바디 안에 배치되어 있는 태그나 아이디 클래스를 이용해서 동적으로 제어하고 싶은 태그, 아이디, 클래스를 담아주는 개념 document object model
// 원시데이터(문자) = "", '' 따옴표 안에 들어가 있어야 함, '표시문자', 'class', 'id', 'tag'
const container = document.getElementById('container')/* 왼쪽 컨테이너는 문자 데이터가 아니라 변수, 오른쪽은 HTML의 ID를 가져온 것, 태그를 제어하기 위한 아이디 */
const item = document.getElementsByClassName('item')
console.log(container, item)
console.log(item[1].length) /* length는 문자 길이. item은 문자값이 아니라 클래스이므로, undefined가 나옴 */
console.log(typeof item[1])
console.log(typeof item[1].innerHTML) /* 객체 item[1]의 안쪽 텍스트의 타입을 확인하기 */
console.log(item[1].innerHTML.length) /* item[1]의 안쪽 텍스트의 길이를 확인하기 객체.속성.속성*/
//객체.속성.속성... O
//객체.메서드().메서드() X
//객체.속성.속성.속성.메서드() O
//원시데이터(숫자) = '1' vs 1 = X 좌측은 문자, 우측은 숫자 데이터
let a = 10
let b = '20'
let c = 20
console.log(a+b) // 숫자+문자 = 문자
console.log(a+c) // 숫자+숫자 = 숫자
//---------------------------------
let num = window.prompt('좋아하는 숫자를 입력하세요') /* 질문, 답변, 참고를 할 수 있는 것, prompt, 숫자를 쓴다고 해도 문자로 인식하게 되어있음 */ //데이터저장변수
let total = Number(num)//데이터변환변수
console.log(total, num)
console.log(typeof total) // 숫자가 아니게 처리를 해도(문자와 숫자를 동시에 적어도) 명시적 형변환을 강제로 해버렸기 때문에 숫자로 에러가 나옴