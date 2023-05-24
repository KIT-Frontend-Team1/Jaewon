import ContextQ1Detail2 from './Detail2';
import { useModalStore } from '../../../../../store/2_context';

const ContextQ1Detail = () => {
    const { isModalOpen, setIsModalOpen } = useModalStore();

    const togleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <h2>ContextQ1Detail</h2>
            <button onClick={togleModal}>{isModalOpen ? '숨기기' : '보이기'}</button>
            <ContextQ1Detail2 />
        </>
    );
};
export default ContextQ1Detail;
