import { ReactNode } from "react";

const Overlay: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}> = ({ isOpen, onClose, children }) => {

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={onClose}
        >
            <div>
                {children}
            </div>
        </div>
    );
};

export default Overlay;
