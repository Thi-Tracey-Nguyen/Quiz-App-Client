import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function HighScorePopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          You got every answer correct!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>&#127881;</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default HighScorePopup 