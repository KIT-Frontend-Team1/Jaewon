import { usePostStore } from "store/store";
import styled from "styled-components";

const Comments = () => {
	const { post } = usePostStore();
	console.log(post[0]?.Comments);

	return (
		<S.CommentContent>
			{post.map(comment => (
				<li key={comment.id}>
					<span>{comment.nickname}</span>
					<span>{comment.comment}</span>
				</li>
			))}
		</S.CommentContent>
	);
};

export default Comments;

const CommentContent = styled.ul`
	li {
		margin-bottom: 10px;

		span:first-of-type {
			margin-right: 8px;
			font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
		}
	}
`;

const S = {
	CommentContent,
};
