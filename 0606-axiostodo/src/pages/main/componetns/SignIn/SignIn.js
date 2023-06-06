import { useNavigate } from 'react-router-dom';

import * as S from '../style';
import BasicButton from 'components/Button/Button';
import axios from 'axios';

const SignInForm = () => {
  const navigation = useNavigate();

  const onPressSignIn = async e => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        'http://localhost:9000/user/login',
        { email, password },
        {
          withCredentials: true,
        },
      );
      localStorage.setItem('accessToken', res.data.data.token);
    } catch (err) {
      console.log(err);
    }

    // if(email === "test" && password === "testtest"){
    //     return navigation('/todo/1', {
    //        state: {
    //         email,
    //         password
    //        }
    //     })
    // }
    // return alert("아이디와 비밀번호를 확인해주세요")
  };

  return (
    <S.Form onSubmit={onPressSignIn}>
      <S.InputBox>
        <label>이메일</label>
        <input name='email' />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name='password' />
      </S.InputBox>
      <BasicButton size={'full'} shape={'default'} variant={'primary'}>
        로그인
      </BasicButton>
    </S.Form>
  );
};
export default SignInForm;
