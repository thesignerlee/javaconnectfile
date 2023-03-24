const number = document.querySelector('#result')
const type = document.querySelector('#result1')
const user = document.querySelector('#result2')
const btn = document.querySelector('#answer_btn')
console.log(number, type, user, btn)
answer_btn.addEventListener('click', function(){
    type.value = typeof Number(number)
    user.value = number.value
})
/* console.log(number, type, user, btn)
console.log(number.value) *///실시간 input값 추적되지 않으므로 결과값 표시 안 됨.
/* answer_btn.addEventListener('click', function(){ */
/*     console.log(number.value) *///이벤트 추적 가능 확인
/*     console.log(typeof number.value) *///최종 실행 전 콘솔 테스트, str->num 콘솔에 Number를 작성하면 그 때마다 작성해줘야 하는 번거로움이 있음.
    //num_input의 값을 숫자로 변환하는 저장 변수
/*     let num_type = Number(number.value) */
    //위 변수가 숫자인지 +1을 통해 숫자+숫자= 숫자인지 결과 확인 
/*     console.log(num_type+1) */
    //위 변수가 number 데이터타입인지 typeof 연산자 확인, 여기에 value를 붙이면 .value.value를 쓴 것이나 마찬가지.
/*     console.log(typeof num_type) */
    //모든 결과 console 확인 후 각 변수에 최종 데이터 결과 대입
/*     type.value = typeof Number(number)
    user.value = num_type.value
}) */