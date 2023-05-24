import { useUSerStore } from '../../../../../store/3_context';

const ContextQ2Form3 = () => {
    const { dispatch } = useUSerStore();

    const onReset = () => {
        dispatch({ type: 'ADD_RESET' });
    };
    return (
        <div>
            <h1>Q2Form3</h1>
            <button type='button' onClick={onReset}>
                RESET
            </button>
        </div>
    );
};
export default ContextQ2Form3;
