import styled from "styled-components";

const Modal = ({ onCloseModal, onAddPost }) => {
	const collectionData = e => {
		e.preventDefault();
		const userId = e.target.elements.userId.value;
		const content = e.target.elements.content.value;
		onAddPost(userId, content);
	};
	return (
		<ModalWraper>
			<ModalPost>
				<ModalHead>
					<ModalTitle>게시물을 작성해주세요</ModalTitle>
					<ModalCloseBtn onClick={onCloseModal}>X</ModalCloseBtn>
				</ModalHead>
				<ModalForm onSubmit={collectionData}>
					<TextInput
						type="text"
						placeholder="아이디를 입력해주세요."
						name="userId"
					/>
					<Textcontent
						placeholder="내용을 입력해주세요."
						name="content"
					></Textcontent>
					<AddBtn>ADD</AddBtn>
				</ModalForm>
			</ModalPost>
		</ModalWraper>
	);
};
const ModalWraper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;
const ModalPost = styled.div`
	width: 480px;
	height: 400px;
	background-color: #f9f9f9;
	color: black;
	padding: 32px;
`;
const ModalHead = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalTitle = styled.p`
	font-size: 24px;
`;

const ModalCloseBtn = styled.button`
	background-color: #ffc439;
	width: 30px;
	height: 30px;
	font-size: 16px;
`;

const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 36px;
`;
const TextInput = styled.input`
	border: none;
	outline: none;
	background-color: #f9f9f9;
`;

const Textcontent = styled.textarea`
	border: none;
	outline: none;
	background-color: #f9f9f9;
	margin-top: 40px;
	resize: none;
	height: 160px;
`;
const AddBtn = styled.button`
	background-color: #ffc439;
	width: 395px;
	height: 40px;
	margin-left: 10px;
	font-size: 20px;
	font-weight: 600;
`;
export default Modal;
