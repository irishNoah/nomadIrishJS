/* 로그인 창*/
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = document.querySelector("#login-form input");
const logoutBtn = document.querySelector('#logoutBtn');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* 유저명 제출 */
function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

/* 로그인 영역 감추기 + 인삿말 출력 */
function paintGreetings(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    greeting.innerText = `안녕하세요! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

/*유저명 입력창 */
function usernameWrite(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
  
/* 로그아웃 */
function onLogout(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = null;
    usernameWrite();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬 스토리지에 값 없으면, 로그인 폼 보여주기
if (savedUsername === null || savedUsername==="null") {
    usernameWrite();
} else { // 값 로컬 스토리지에 값 있으면, 로그인 폼 비활성화
    paintGreetings(savedUsername);
}

logoutBtn.addEventListener("submit", onLogout);

// ---------------------------------------------------------------------
/*

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요! ${username} 님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬 스토리지에 값 없으면, 로그인 폼 보여주기
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 값 로컬 스토리지에 값 있으면, 로그인 폼 비활성화
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

*/