import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function DeleteConfirmation(props, handleConfirmDelete) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to delete the quiz?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirmDelete}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteConfirmation