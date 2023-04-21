import mockPost from './mock.json' assert { type: 'json' };
console.log(mockPost);

const $postDetail = document.querySelector('#post-detail');
const $repliesList = document.querySelector('#replies-list');
const $addComment = document.getElementById('addComment');

$postDetail.innerHTML = `
    <h3> ${mockPost.post.title}<h3>
    <p>${mockPost.post.content}<p>
    <p>${mockPost.post.User.nickName}
`;
mockPost.post.Replies.map(data => {
    const $li = document.createElement('li');
    $li.innerHTML = `
    ${data.User.nickName} :
    ${data.content}
    `;
    $repliesList.appendChild($li);
});

$addComment.addEventListener('click', add);

function add(event) {
    const $commentInput = document.getElementById('commentInput');
    const inputValue = $commentInput.value;
    if (inputValue !== '') {
        const newReplies = {
            User: {
                nickName: '심재원',
            },
            content: inputValue,
        };
        mockPost.post.Replies.push(newReplies);
        console.log(newReplies);
        $commentInput.value = '';
    }
    $repliesList.innerHTML = '';

    mockPost.post.Replies.map(data => {
        const $li = document.createElement('li');
        $li.innerHTML = `
        ${data.User.nickName} :
        ${data.content}
        `;
        $repliesList.appendChild($li);
    });
}

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
