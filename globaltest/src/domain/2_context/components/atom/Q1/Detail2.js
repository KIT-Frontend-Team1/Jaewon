import { useModalStore } from '../../../../../store/2_context';
const ContextQ1Detail2 = () => {
    const { isModalOpen, setIsModalOpen } = useModalStore();

    const togleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <h2>ContextQ1Detail2</h2>
            <button onClick={togleModal}>{isModalOpen ? '숨기기' : '보이기'}</button>
        </>
    );
};
export default ContextQ1Detail2;
