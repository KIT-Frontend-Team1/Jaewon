import { useUSerStore } from '../../../../../store/3_context';

const ContextQ2Form2 = () => {
    const { dispatch } = useUSerStore();

    const onAddIsEdit = () => {
        dispatch({ type: 'ADD_ISEDIT' });
    };

    return (
        <div>
            <h1>Q2Form2</h1>
            <button type='button' onClick={onAddIsEdit}>
                STATUS 추가
            </button>
        </div>
    );
};

export default ContextQ2Form2;
