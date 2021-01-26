import { useDispatch, useSelector } from "react-redux";
import { closeModal, setPlanModal } from "@/store";
import style from "./ModalBox.module.scss";

const ModalBox = () => {
    const dispatch = useDispatch();
    const { modalType, stateModal, modalData, planModal } = useSelector((state) => state.modal);
    const contentGenerator = (modalType) => {
        switch (modalType) {
            default:
                return null
        }
    };

    let [active, opacity] = stateModal;

    return (
        <>
            <div
                onClick={() => dispatch(closeModal())}
                className={
                    active
                        ? `${style["modal"]}  ${style["modal--active"]} ${opacity ? style["modal--no_opacity"] : ""
                        }`
                        : `${style["modal"]}`
                }>
                {contentGenerator(modalType)}
            </div>
        </>
    );
};
export default ModalBox;
