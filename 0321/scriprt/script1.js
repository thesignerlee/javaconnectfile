// F12 -> console 항상 실행하기
// javascript == 객체지향프로그래밍언어
// 변수 = 데이터 저장소
// var, let, const
// var vs let ==> 중복변수명 에러를 구분하는데 차이점
// const 상수
// a.length a는 객체 length는 속성
// a.typeof() typeof는 함수, 메소드 typeof a 라고 기재하면 연산자
// console.log('a') a는 문자, 읽으면 문자 a를 로그로 표시한다. 콘솔에. , 콘솔창에 문자데이터 a를 표시한다.
// window.alert(10) 숫자 10을 윈도우 팝업창에 표시한다. alert는 팝업창
// console.log('안녕하세요'.length) console은 객체 log는 메소드 '안녕하세요'는 객체 length는 속성, 안녕하세요라는 문자의 길이를 알려달라(가로창에 있는 것만 읽으면) 안녕하세요라는 문자 데이터의 길이를 콘솔에 출력해라.
let a = 10 /* 변수 a의 개체값은 10이다 */
let b = 'hello' /* b의 개체값은 hello다 */
let c = a /* 변수 c의 개체값은 a와 같다. */
console.log(a.length) /* 변수 a의 문자 길이를 콘솔창에 표시한다. a는 문자열이 아니므로 출력할 수 없다고 뜸*/ /* undefined */
console.log(a+b) /* 변수 a와 b를 더한 값을 콘솔창에 표시한다. 변수 a와 b의 데이터를 더하기, 연결하여 콘솔에 출력해라.*/ /* 10hello */
console.log(typeof b) /* b의 함수를 콘솔창에 표시한다 데이터타입 연산자를 이용해서 b의 데이터 타입을 알려달라, b 문자 변수의 데이터를 콘솔에 출력해라 */  /* string */
window.alert(c) /* 변수 c의 데이터를 윈도우 팝업창에 출력한다 */ // 10
window.alert(a+c) /* 변수 a와 c를 더한 값을 윈도우 팝업창에 표시한다 새로고침 하면 뜸 */ //20 숫자끼리는 더하기, 숫자와 문자는 더하기