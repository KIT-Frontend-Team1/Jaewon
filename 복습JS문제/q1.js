const user = {
    name: '김성용',
    age: 20,
    height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

console.log(user['name']); //대괄호표기법; user[key] key의 저장된 값

console.log(user.age); //마침표 표시볍 user라는 객체 key의 저장된 값(객체).(key)

console.log(Object.keys(user)); // user 객체 키값들을 출력

console.log(Object.values(user)); // user 객체 value값들을 출력

console.log(Object.entries(user)); //객체의 모든 속성들을 배열로 가져옴

for (const key in user) {
    // 객체 속성을 순회하며 삭제 수정 추가 가능
    console.log(key, user[key]);
}

/* 
(1) user[”key”], user.key
(2) Object.keys(user)
(3) Object.values(user)
(4) Object.entries()
(5) for in
*/

// 문제2. 값이 “김성용”인 속성의 key 찾기

// const find = Object.entries(user).find(([key, value]) => value === '김성용')[0];
const find = Object.keys(user).filter(key => user[key] === '김성용');
console.log(find);
// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정

const clon = JSON.parse(JSON.stringify(user));
clon.name = '심재원';
console.log(clon);
