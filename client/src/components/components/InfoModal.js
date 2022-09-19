import './css/InfoModal.css';

import { Modal } from 'react-bootstrap';

const InfoModal = (props) => {
    return (
        <Modal show={props.show} size="xl" onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {props.infoCurrentPage}
                </div>
                <div>
                    {props.infoCurrentAlgorithm}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default InfoModal;