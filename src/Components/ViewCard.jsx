import React from 'react'
// card
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// icon
import { MdDelete } from "react-icons/md";
// modal
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';  remove button as it is already there
import Modal from 'react-bootstrap/Modal';

// sweetalert2
import Swal from 'sweetalert2'

import { addHistoryAPI, deleteVideoAPI } from '../Services/AllAPIs'

function ViewCard({ displayVideo, setDeleteVideoStatus }) {

  // each object from the array comes here thr: mapping in ViewVideo
  console.log(displayVideo)
  // vdo deleted after page refresh only. so state lifting must be done

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = async() => {
    setShow(true);
    // destructuring display vdo to get captn and url
    const {caption,embedLink} = displayVideo

    // to get timestamp(date nd tym)
    // date obj used to get the current date and time
    let today = new Date()
    console.log(today)
    let timestamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp)

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    }

    const response = await addHistoryAPI(videoDetails)
    console.log(response)


    // timestamp is a formatter that is used to format the date
    // This creates an Intl.DateTimeFormat object with the specified locale and formatting options.
    // ..format(today) method is called on the formatter object, and it processes the 'today' Date object according to the specified formatting optns, returning a formatted string.

    // or
    // let day = today.toLocaleDateString()
    // console.log(day)
    // let time = today.toLocaleTimeString()
    // console.log(time)
  }

  // handleDelete
  const handleDelete = async (id) => {
    try {
      const response = await deleteVideoAPI(id)
      console.log(response)
      if(response.status >=200 && response.status <=300){
        setDeleteVideoStatus(response)
        Swal.fire({
          title: 'Success!',
          text: 'Video deleted successfully',
          icon: 'success',
          confirmButtonText: 'Back'
        })

      }
      else{
        Swal.fire({
          title: 'Error!',
          text: resp.message,
          icon: 'error',
          confirmButtonText: 'Back'
        })
      }
    }
    catch(err){
      console.log(err)
    }
  }

  // to drag the vdo card
  const dragStarted = (id,e) =>{
    console.log("Video Drag Started "+id,e)
    e.dataTransfer.setData("VideoId",id)
  }


  return (
    <div>
      {/* to drag the video card, we give the attricute draggable= true. onDragStart event handler is used to capture the event when the drag starts  */}

      <Card draggable={true} onDragStart={e=>dragStarted(displayVideo.id,e)} style={{ width: '13rem' }} className='text-white'>

        <Card.Img variant="top" onClick={handleShow} src={displayVideo.url} style={{ cursor: 'pointer' }} width={'200px'} height={'250px'} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Title className='fs-6'>{displayVideo.caption}</Card.Title>

          <button onClick={() => handleDelete(displayVideo.id)} className='btn btn-danger'><MdDelete></MdDelete></button>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* to embed the utube vdo iframe is used. embedLink of each vdo is passes to its src */}

          <iframe width="460" height="215" src={displayVideo.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ViewCard