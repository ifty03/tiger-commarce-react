import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = ({product}) => {
  console.log(product)
  const {id,image,description,category,price,title}=product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
      <Button className='btn btn-primary ms-2 py-4' onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title.slice(0,20)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='w-50' src={image} alt="" />
          <p>{description.slice(0,70)}</p>
          <p>category:- {category}</p>
          <p>Price:- {price}</p>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
        </div>
    );
};

export default ReactModal;