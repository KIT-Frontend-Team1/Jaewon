const users = [
    {
        id: 1,
        name: '김사과',
        age: 20,
        height: 190,
    },
    {
        id: 2,
        name: '이수박',
        age: 32,
        height: 185,
    },
    {
        id: 3,
        name: '오렌지',
        age: 20,
        height: 180,
    },
    {
        id: 4,
        name: '이멜론',
        age: 28,
        height: 175,
    },
];

const $info = document.querySelector('#info');
const $nextBtn = document.getElementById('nextBtn');
const $prevBtn = document.getElementById('prevBtn');
let countIndex = 0;

$nextBtn.addEventListener('click', e => {
    countIndex++;
    if (countIndex >= users.length) {
        countIndex = 0;
    }
    $info.innerHTML = `
    <div>${users[countIndex].name}</div>
    <div>${users[countIndex].age}</div>
    <div>${users[countIndex].height}</div>
`;
});

$prevBtn.addEventListener('click', e => {
    countIndex--;
    if (countIndex < 0) {
        countIndex = users.length - 1;
    }

    $info.innerHTML = `
        <div>${users[countIndex].name}</div>
        <div>${users[countIndex].age}</div>
        <div>${users[countIndex].height}</div>
    `;
});

$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;

/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/
