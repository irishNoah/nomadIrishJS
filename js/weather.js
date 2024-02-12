/* 참고 url > https://velog.io/@yeonsubaek/JavaScript-%EB%82%A0%EC%94%A8-API-%EC%97%B0%EB%8F%99%EC%9D%B4-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EC%89%BD%EB%8B%A4%EA%B3%A0-ft.-OpenWeatherMap */

const API_KEY = "c26d4c4ac4f63342e86215cd66b5ef2a";

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    //console.log("You Live In", lon, lon);
	
    /*api 받아오기*/
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        //console.log(data.name, data.weather[0].main)
        console.log(data);

        /* 지역 */
        const city = document.querySelector("#weather h2:nth-child(1)");  // 지역
        //city.innerHTML = data.name;
        city.innerHTML = `도시 : ${data.name}`;

        /* 날씨 및 온도(섭씨) */
        const weather = document.querySelector("#weather h2:nth-child(2)"); // 날씨 및 온도
        let temp = Math.round(data.main.temp);
        weather.innerText = `날씨 : ${data.weather[0].main} / 온도 : ${temp}도`;
        
        /* 날씨별 아이콘 */
        const weatherIconSection = document.querySelector(".weatherIcon");
        const weatherIcon = data.weather[0].icon;
        const weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        weatherIconSection.setAttribute('src', weatherIconURL);
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

/* getCurrentPosition 함수를 이용해 나의 현재 위치를 얻어옴
단, getCurrentPosition은 두 개의 파라미터를 보내줘야 함 => (성공시, 실패시)
성공시 쓸 함수 : onGeoOk / 실패시 쓸 함수 : onGeoError
*/
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// ------------------------------------------------------------------------------------------
// const latitude = document.querySelector("#latitude");   // 위도 
// const longitude = document.querySelector("#longitude"); // 경도

// function onGeoOk(position){
//     //console.log(position);
//     //span.innerText = newTodo.text;
//     const lat = position.coords.latitude; // 위도
//     const lng = position.coords.longitude; // 경도
//     //console.log("You Live In", lat, lng);

//     latitude.innerText = "위도 = " + lat;
//     longitude.innerText = "경도 = " + lng;
// }

// function onGeoError(){
//     alert("Can't find you. No weather for you.")
// }

// /* getCurrentPosition 함수를 이용해 나의 현재 위치를 얻어옴
// 단, getCurrentPosition은 두 개의 파라미터를 보내줘야 함 => (성공시, 실패시)
// 성공시 쓸 함수 : onGeoOk / 실패시 쓸 함수 : onGeoError
// */
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);