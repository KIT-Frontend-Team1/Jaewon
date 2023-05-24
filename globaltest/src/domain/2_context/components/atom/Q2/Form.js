import ContextQ2Form2 from './Form2';
import { useUSerStore } from '../../../../../store/3_context';
const ContextQ2Form = () => {
    const { userList, dispatch } = useUSerStore();
    const onAddUSer = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_USER',
            name: e.target.name.value,
            nickname: e.target.nickname.value,
        });
        e.target.name.value = '';
        e.target.nickname.value = '';
        console.log(userList);
    };

    return (
        <div>
            <form onSubmit={onAddUSer}>
                <h1>Q2Form</h1>
                <input placeholder='name' name='name' />
                <input placeholder='nick-name' name='nickname' />
                <button type='submit'>추가</button>
                <div>
                    {userList.map((user, index) => (
                        <div key={index}>
                            <span>{user.name}</span>
                            <span>{user.nickname}</span>
                            <span>{user.isEdit ? 'true' : 'fales'}</span>
                        </div>
                    ))}
                </div>
                <ContextQ2Form2 />
            </form>
        </div>
    );
};
export default ContextQ2Form;
