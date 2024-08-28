import React from 'react'

// modal import
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// icon
import { IoCloudUpload } from "react-icons/io5";

// sweetalert2
import Swal from 'sweetalert2'

import { addVideoAPI } from '../Services/AllAPIs';

function AddVideo({setAddVideoResponse}) {
    // addVideoResponse is accessed
    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // state for adding video in the modal form (after creating services folder)
    // giving value to the state in the form of object with key-value pairs
    const [video, setVideo] = useState({
        caption: "",         //for captn
        url: "",           //for image
        embedLink: ""      // for vdo                  
    })
    console.log(video);

    const getEmbedLink = (e) => {
        console.log(e.target.value)
        // link entered by user cud be share/embed link - we need it as an embed link
        // frzt part of both same.
        // destructuring to get the value 
        const { value } = e.target
        console.log(value)
        console.log(value.slice(-31))
        let link = `https://www.youtube.com/embed/${value.slice(-31)}`
        setVideo({ ...video, embedLink: link })
    }

    const handleUpload = async () => {
        const { caption, url, embedLink } = video
        if (!caption || !url || !embedLink) {
            alert("Please fill all fields")
        }
        else {
            try {
                // to post the reqBody/video details to the api
                let resp = await addVideoAPI(video)    //video state holds the reqBody
                console.log(resp)                     // resp returns error (in case of  error)
                // this api call posts/adds the video the db.json 
                // MAKE SURE TO RUN THE PORT OF db.json

                if(resp.status>=200 && resp.status<=300){
                    console.log(resp.data)

                    // data is added to the setState and then passed via parent(home) to the ViewVideo component/child
                    setAddVideoResponse(resp.data)

                    // to close the modal (already in modal code)
                    handleClose()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Video added successfully',
                        icon: 'success',
                        confirmButtonText: 'Back'
                      })
                    // alert(" Video added succesfully")
                }
                else{
                    console.log(resp.message)
                    // alert(resp.message)
                    Swal.fire({
                        title: 'Error!',
                        text: resp.message,
                        icon: 'error',
                        confirmButtonText: 'Back'
                      })
                }
            }
            // catches any error that is not handled by try block
            catch(err) {
                console.log(err)
                
            }
        }
    }

    return (
        <div className=''>
            {/* MODAL */}

            <Button variant="" onClick={handleShow} className='fs-3 text-white'>
                <IoCloudUpload />
                {/* icon */}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video <IoCloudUpload /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>

                    {/* form */}
                    <input onChange={e => setVideo({ ...video, caption: e.target.value })} type="text" placeholder='Video Caption' style={{ width: '100%', padding: '5px 10px', borderRadius: '10px' }} className='mb-2' />

                    {/* {} are given to setVideo as the '...video,caption:e.target.value' creates a new object replacing the earlier obj(with empty values)  */}

                    {/* ...video(SPREAD Operator) */}
                    {/* spread operator spreads out all the ppties of the video state(object) */}
                    {/*or  used to copy all existing properties of the video object into the new object. */}
                    {/* caption:e.target.value overrides the caption ppty that was just spread from the ...video */}
                    {/* so old caption value replaced with e.target.value */}

                    <input onChange={e => setVideo({ ...video, url: e.target.value })} type="text" placeholder='Video Image' style={{ width: '100%', padding: '5px 10px', borderRadius: '10px' }} className='mb-2' />

                    <input onChange={getEmbedLink} type="text" placeholder='Video URL' style={{ width: '100%', padding: '5px 10px', borderRadius: '10px' }} className='mb-2' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddVideo