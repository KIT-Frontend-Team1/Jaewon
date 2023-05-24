import React, { createContext, useContext, useState } from 'react';

const ModalStore = createContext();

export const useModalStore = () => useContext(ModalStore);

const ModalStoreProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <ModalStore.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</ModalStore.Provider>;
};
export default ModalStoreProvider;
