// 객체지향프로그래밍 언어 자바스크립트 기본순서는
// 객체 변수 선언 -> 변수 속성, 메소드 활용 결과 값
// 객체 아이디 변수 선언
// *변수 생성 후에는 콘솔로 올바른 변수인지 반드시 체크한다!
//변수(아이디 DOM)
const title = document.getElementById('title') /* E와 B와 I를 대문자로 써야 함. 다른 문자라서. 카멜 기법 이미 ID 선언을 앞에 했기 때문에 괄호에 #을 기재하지 않음.*/
const contents = document.getElementById('contents')
const link = document.getElementById('link')
/* const a_link a태그의 id link 라고 기재해도 괜찮음 */
//변수 (클래스 DOM)
const first = document.getElementsByClassName('first')[0]/* 엘리먼트 끝에 S가 들어가고, 중복 때문에. Id 대신에 ClassName이 들어감, Name은 소괄호, index는 대괄호, 자바스크립트는 0부터 숫자를 셈*/
const last = document.getElementsByClassName('last')[0]/* index 넘버는 0부터 인식한다. 랭스는 1부터 인식한다.*/
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a') /* 클래스가 들어있는 대상을 묶어서 보여줌. 전체 바디 안에서 해당 클래스에 들어있는 대상을 위에서 아래로 인식함. */
const a1 = document.getElementsByClassName('a')[0]
const a2 = document.getElementsByClassName('a')[1]
const a3 = document.getElementsByClassName('a')[2]
const a4 = document.getElementsByClassName('a')[3]
//변수(태그 DOM)
const li = document.getElementsByTagName('li')
//출력
/* console.log(title, contents, link) 이렇게 써도 됨 */
console.log(li)
console.log(a[0],a[1],a[2],a[3])
console.log(a1, a2, a3, a4) 
console.log(a[1]) /* console.log(a) 출력할 때 인덱스를 넣어 따로 접근할 수 있다. 이때에는 출력에 인덱스를 넣으면 안 됨*/
console.log(menu[2])/* 출력할 때 index를 넣는 게 더 간편함 */
console.log(first)
console.log(last)
console.log(title, contents, link)
console.log(title) /* 변수를 저장하는 이유, 써먹으려고. 만들어놓은 변수를 안전하게 가지고 있는 게 무엇보다 중요. 이것을 확인하는 단계가 로그 확인. 변수를 만들면 반드시 콘솔로 확인 절차를 밟아야 함.*/
console.log(contents)
console.log(link)