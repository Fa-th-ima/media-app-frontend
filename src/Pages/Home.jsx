import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// icon
import { GoHistory } from "react-icons/go";

import AddCategory from '../Components/AddCategory';
import ViewVideo from '../Components/ViewVideo';
import AddVideo from '../Components/AddVideo';

// row col - grid import frn react boot
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

  // state created for state lifting 
  const [addVideoResponse,setAddVideoResponse] = useState([])

  return (
    <div>

      <section style={{ margin: '1rem 8rem' }} className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <h5>Upload new video</h5>

          {/* Setstate is passed to AddVideo as props */}
          <AddVideo setAddVideoResponse = {setAddVideoResponse} />
          {/* AddVideo comp (having a modal) is added to the home comp */}
        </div>
        <div>
          <Link to={'/watch-history'} style={{ textDecoration: 'none' }}>
            <h5>Watch History <GoHistory /> </h5>
          </Link>
        </div>
      </section>

      <section>
        {/* grid frm react bootstrap */}

        <Row style={{margin:'0.5rem 2rem'}}>
          <Col lg="9">
            <h4>All Videos</h4>
            {/* to view added vdos */}
            <ViewVideo addVideoResponse = {addVideoResponse}/>
            {/* state is passed to ViewVideo as props */}
          </Col>

          <Col lg="3">
            <h4 className='mb-4'>Category</h4>
            {/* Category */}
            <AddCategory />
          </Col>
        </Row>
      </section>


    </div>
  )
}

export default Home