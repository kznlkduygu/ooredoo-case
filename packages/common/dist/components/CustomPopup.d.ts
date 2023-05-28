import { FC } from "react";
interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    children: any;
}
declare const CustomModal: FC<CustomModalProps>;
export default CustomModal;
