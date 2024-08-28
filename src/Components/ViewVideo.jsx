import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewCard from './ViewCard'
import { getVideoAPI } from '../Services/AllAPIs'

// sweetalert2
import Swal from 'sweetalert2'

function ViewVideo({addVideoResponse}) {
    // state is passed to ViewVideo (that contains the data from AddVideo in setState)

    // state to hold value of response.data / array of objects(vdos) fetched from the server
    const [allVideos, setAllVideos] = useState([])

    // state lifting for deleting vdo - parent(ViewVideo) child (ViewCard)
    const [deleteVideoStatus,setDeleteVideoStatus] = useState("")

    const getVideos = async () => {
        try {
            const response = await getVideoAPI()
            console.log(response)
            console.log(response.data)

            if (response.status >= 200 && response.status <= 300) {
                setAllVideos(response.data)   // to assign the videos to the state variable
            }
            else {
                console.log(response.message)
            }
        }

        catch (err) {
            console.log(err)
        }
    }
    // to call the getVideos function(as no element id is calling it)
    useEffect(() => {
        getVideos()
    }, [addVideoResponse,deleteVideoStatus])
    // each tym the state of addVideoResponse chngs (due to the addVideo comp), the getVideos functn get executed

    return (
        <div>
            <Row className=' p-5'>
                {
                    allVideos.length > 0 ?
                    allVideos.map(item => (
                        <Col key={item.id} className='mt-5'>
                            <ViewCard displayVideo = {item} setDeleteVideoStatus = {setDeleteVideoStatus}/>
                        </Col>
                    ))
                    : <p className='text-danger fw-bolder'> No videos found!</p>
                }
            </Row>
            {/* //each item/object of array is added to the variable displayVideo by mapping */}
        </div>
    )
}

export default ViewVideo