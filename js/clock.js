const clock = document.querySelector("h1#clock");

function getClock(){ /* 시간 함수 구하기 */
    const valTime = new Date();

    /* [연도 / 월 / 일 /] 요일 구하기 */
    const year = valTime.getFullYear(); // YYYY
    const month = valTime.getMonth(); // MM
    const date = valTime.getDate(); // DD
    let day = valTime.getDay();

    // getDay() >>> 0(Sun) ~ 6(Sat)
    const dayArr = ["일","월","화","수","목","금","토"];

    const hours = String(valTime.getHours()).padStart(2, "0");
    const minutes = String(valTime.getMinutes()).padStart(2, "0");
    const seconds = String(valTime.getSeconds()).padStart(2, "0");

    clock.innerText = `${year}년 ${month}월 ${date}일 ${dayArr[day]}요일 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


/* // 기존 

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

*/