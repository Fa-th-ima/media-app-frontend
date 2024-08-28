import React, { useEffect } from 'react'
// modal
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/AllAPIs';
import { Col, Row } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import ViewCard from './ViewCard';

function AddCategory() {

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("")
  console.log(categoryName)

  // to get categories
  const [getCategory, setGetCategory] = useState([])

  // state lifting for deleting category without refreshing
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState("")



  const handleAdd = async () => {

    // to make the state to an object so that the json server can automatically add the id key in this object
    const body = {
      categoryName,
      allVideos:[]
    }
    if(categoryName) {
      try {
        const resp = await addCategoryAPI(body)
        console.log(resp)
        alert("Added Category " + categoryName)
        handleGetCategory()   // to get the category without refresh (gets all the categories each tym a category is added, preventing refresh )
        setCategoryName("")
        handleClose()
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      alert("Please enter a category name")
    }
  }


  // to get categories
  const handleGetCategory = async () => {
    const resp = await getCategoryAPI()
    console.log(resp.data)
    setGetCategory(resp.data)
  }
  useEffect(() => {
    handleGetCategory()
  }, [deleteCategoryStatus])

  // to delete category
  const handleDelete = async (id) => {
    const response = await deleteCategoryAPI(id)
    console.log(response)
    setDeleteCategoryStatus(response)
  }

  // to drag over (drag over a draggable event to the drop target)
  const dragOver = (e) => {
    // It prevents the default behavior of the drag-over event, which is to disallow dropping.
    //  By calling e.preventDefault(), you make the drop target valid, allowing dragged items to be dropped there.
    e.preventDefault()
    console.log("Video dragged over")
  }

  // to drop vdo
    const videoDrop = async(categoryId, e) => {
    console.log("Vdo Dropped "+categoryId,e)
    // this gives the id of the category to which the vdo is dropped
    // array created to add the vdos to each category in db.json

    // to get the id of the vdo that is dropped
    const videoId = e.dataTransfer.getData("videoId")
    // we hv setData "videoId" during drag
    console.log("videoId: ",videoId)

    // to get a particular vdo (that is dropped) and its details
    const {data} = await getAVideoAPI(videoId)
    console.log(data)

    // to cross check the categories
    const selectedCategory = getCategory?.find(item=>item.id===categoryId)
    console.log(selectedCategory)

    // add vdos into allvideos category
    selectedCategory.allVideos.push(data)
    await updateCategoryAPI(categoryId,selectedCategory)
    handleGetCategory()
  }

  return (

    <div>
      {/* modal */}

      {/* button */}
      <div className="d-grid gap-2">
        <Button onClick={handleShow} variant="primary" size="lg">
          Add Category
        </Button>
      </div>

      {/* to display categories */}
      {/* <div>
        {
          getCategory.length > 0 ? getCategory.map((item) => (

            // drag over nd drop
            <Row onDragOver={e => dragOver(e)} onDrop={e => videoDrop(item.id, e)} className='border m-2'>

              <Col className='d-flex justify-content-between m-4'>
                <h6>{item.categoryName}</h6>
                <button onClick={() => handleDelete(item.id)} className='text-danger bg-white'><MdDelete /></button>
              </Col>
            </Row>
          ))
            : <p>No Categories to display</p>
        }
      </div> */}

      <div className="row">
        {
          getCategory.length > 0 ? getCategory.map(item => (

            <div onDragOver={e => dragOver(e)} onDrop={e => videoDrop(item.id, e)}>
              <div  className="col m-3 p-4 border border-light d-flex justify-content-between" key={item.id}>
              <h6>{item.categoryName}</h6>
              <button onClick={() => handleDelete(item.id)} className='text-danger bg-white'><MdDelete /></button>
              </div>
              <div className='row m-2'>
                <div className="col">
                {item.allVideos.map(data=>(
            <ViewCard displayVideo={data}/>
          ))}
                </div>
        </div>
            
            </div>
          ) )
          
          : <p> no data</p>
        }
        
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <input onChange={e => setCategoryName(e.target.value)} type="text" placeholder='Category Name' style={{ width: '100%', borderRadius: "10px" }} className='form-control p-2' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCategory