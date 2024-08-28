import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// icons
import { GoHistory } from "react-icons/go";
import { FaBackward } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Link } from 'react-router-dom';

// table
import Table from 'react-bootstrap/Table';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/AllAPIs';

function WatchHistory() {

  // state to store watchHistory data
  const [history,setHistory] = useState([])

  // for state lifting (to delete vdo without refresh)
  const [deleteVideoStatus,setDeleteVideoStatus] = useState([])

  const getWatchHistory = async ()=>{
    const resp = await getHistoryAPI()
    console.log(resp.data)
    setHistory(resp.data)
   
  }

  useEffect(()=>{
    getWatchHistory()
  },[deleteVideoStatus])

  // to delete a watch history vdo
  const handleDelete = async(id) =>{
    const resp = await deleteHistoryAPI(id)
    console.log(resp)
    setDeleteVideoStatus(resp)
  
  }


  return (
    <div>
      <div className='d-flex justify-content-between' style={{ margin: '3rem 6rem' }}>
        <h5>Watch History <GoHistory /></h5>

        <Link to={'/'} style={{textDecoration:'none'}}>
          <h5><FaBackward /> Back to Home</h5>
        </Link>
      </div>

      <Table striped bordered hover size='sm' style={{margin:'3rem 4rem'}} className=''>
      <thead>
        <tr>
          <th >SI.No</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        history ? history.map((item,index)=>(
          <tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink}>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>

          <td><button onClick={()=>handleDelete(item.id)} className='btn btn-danger fs-5' style={{padding:'0.05rem 0.4rem'}}><MdDelete/></button></td>
        </tr>
        ))
        : <p className='text-danger fw-bolder'>No Data Found!</p>
       }
        
      </tbody>
    </Table>
    </div>
  )
}

export default WatchHistory