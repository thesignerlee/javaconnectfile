const info = {
    wea:['맑음'], /* weather */
    gang:['20%'], /* precipitation */
    ba:['3.4m/s'], /* wind */
    sup:['15%'] /* humidity */
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(info,btn,result)
btn[0].addEventListener('click',function(){
    result.innerHTML = info.wea
})
btn[1].addEventListener('click',function(){
    result.innerHTML = info.gang
})
btn[2].addEventListener('click',function(){
    result.innerHTML = info.ba
})
btn[3].addEventListener('click',function(){
    result.innerHTML = info.sup
})