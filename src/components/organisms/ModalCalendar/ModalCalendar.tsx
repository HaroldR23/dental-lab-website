import { Modal, Calendar } from 'antd';
import { ModalPropTypes } from './ModalCalendarPropTypes';

const ModalCalendar = ({ isOpen, onClose }: ModalPropTypes) => {
    return (
        <Modal
            data-testid="modal-calendar"
            open={isOpen}
            onCancel={onClose}
            footer={null}
        >
            <div
                data-testid="calendar"
            >
                <Calendar/>
            </div>
        </Modal>
    )
}

export default ModalCalendar;
