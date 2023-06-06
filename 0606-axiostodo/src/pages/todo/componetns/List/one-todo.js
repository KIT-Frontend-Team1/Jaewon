import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from '../../../../styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useInput from '../../../../hooks/use-input';

/**
 * @params : todo {
 *  content: string
 * }
 *
 * @TODO : refactor
 */

const OneTodo = ({ todo, updatTodo, deleteTodo }) => {
  const { id, state, title, content } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, onChangeEditContent] = useInput(content);

  /*
        과제
        수정을 form 이벤트로 바꾸기
        +
        체크 수정 구현하기
    */

  const handleTodoEdit = () => {
    if (!isEditMode) return setIsEditMode(true);
    updatTodo(id, editContent);
    setIsEditMode(false);
  };

  const handleTodoDelete = () => {
    deleteTodo(id);
  };

  return (
    <S.Wrapper state={state}>
      <S.Header>
        <S.StateBox state={state}>
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox>
        <S.Title state={state}>
          {title}
          <div>
            <FontAwesomeIcon icon={faPen} onClick={handleTodoEdit} />
            <FontAwesomeIcon icon={faBan} onClick={handleTodoDelete} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={state}>
        {isEditMode ? <textarea value={editContent} onChange={onChangeEditContent}></textarea> : content}
      </S.Content>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) => (state ? theme.PALETTE.gray[100] : theme.PALETTE.white)};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? '#3CB371' : '#999')};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
