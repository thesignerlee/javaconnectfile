const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const result = document.querySelector('#result')
const btn = document.querySelector('#answer_btn')
console.log(result1, result2, result, btn)
btn.addEventListener('click', function(){
    //console.log(this)//버튼 동작 확인 콘솔
    console.log(result1.value) // result1만 쓰면 태그만 인식. value 적어서 추적 값 확인
    //console.log(result1.value+money2.value)//더하기 결과 확인(오류)
    //문자+문자=문자 1+1=11
    //console.log(typeof result1.value, typeof result2.value)//타입확인
    //console.log(typeof Number(result1.value)) //number 형변환메시드 사용
    console.log(typeof result1.value)
    console.log(result2.value)
    console.log(typeof result2.value)
    let res_1 = Number(result1.value)
    let res_2 = Number(result1.value)
    console.log(typeof res_1, typeof res_2)
    result.value = res_1 + res_2

    //변수 추가 없이 하는 방법
    //total.value = Number(rusult1.value) + Number(result2.value)
    //변수 추가하고 쓰는 방법
    //let m1_num = Number(result1.value)
    //let m2_num = Number(result2.value)
    //total.value = m1_num + m2_num
})