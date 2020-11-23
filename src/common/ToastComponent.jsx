
import React, { useState, useEffect } from 'react';
import { useSelector } from '../hooks/store';
import { Toast } from 'react-bootstrap';

function ToastComponent() {
  const alert = useSelector(state => state.app.alert)
  const [show, setShow] = useState(false);

  useEffect(() => {
   if (alert) {
    setShow(true)
   } else {
    setShow(false)
   }
  }, [alert]);

    return (
          <Toast className="danger" onClose={() => setShow(false)} show={show} delay={3500} autohide>
            <Toast.Header>
              <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{alert && alert}</Toast.Body>
          </Toast>
    );
}

export default ToastComponent;

