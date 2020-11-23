import {useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap';

import './index.scss'
// import { useSelector } from '../../hooks/store';

function ModalWindow({user}) {
  // const user = useSelector(state => state.users.user)
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (user) {
        setShow(true)
      }
     
    }, [user]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Congratulations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You have successfully passed the registration
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="primary">Great</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalWindow