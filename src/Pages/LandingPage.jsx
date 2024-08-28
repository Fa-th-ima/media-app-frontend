import React from 'react'

// importing img saved in assets in src
import DiscoImage from '../assets/dj-mix.gif'

// card from react boot

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <section>

        <div className="row justify-content-center" style={{ padding: '3rem 6rem' }}>
          <div className="col-6">
            <h4 className='mb-4'>Welcome to Media Player</h4>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur cum veritatis corporis expedita quas nemo labore nisi vero facere ducimus accusantium accusamus quibusdam, porro officia eum neque odio tempore!
              Beatae facilis accusantium amet consequuntur magni nesciunt error! Exercitationem, blanditiis animi quos molestiae sequi quia ipsa pariatur, ipsam quaerat labore sed vel tenetur vitae, rem eos dignissimos mollitia! Nisi, id.</p>
            
            <Link to={'/home'}>
              <button className='btn btn-warning'>Get Started</button>
            </Link>
          </div>
          <div className="col-6">
            <img src={DiscoImage} alt="" style={{ height: '15rem', width: '20rem', float: 'right' }} className='' />
          </div>
        </div>
      </section>

      <section>
        <h4 className='text-center'>Features</h4>
        <div className="row" style={{ padding:'3rem 10rem'}}>
          <div className="col-4">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://cdn.dribbble.com/users/148670/screenshots/1933701/radio.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://cdn.dribbble.com/users/2039942/screenshots/6911595/instagrammsuic.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/fb/2e/3c/fb2e3c79c3b4fd757275ec1bd4ba6aa8.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <section>

        <div className="row border rounded" style={{margin:'3rem 6rem',padding:'2.5rem'}}>

          <div className="col">
            <h4>Simple Fast and Powerful</h4>
            <p style={{textAlign:'justify'}}><strong className='fw-5'>Play Everything: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae maiores voluptates consequatur magnam earum reprehenderit sapiente assumenda necessitatibus non corporis commodi alias. Sed, dolorum! Mollitia repellendus aut quos hic!</p>
            <p style={{textAlign:'justify'}}><strong className='fw-5'>Play Everything: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae maiores voluptates consequatur magnam earum reprehenderit sapiente assumenda necessitatibus non corporis commodi alias. Sed, dolorum! Mollitia repellendus aut quos hic!</p>
            <p style={{textAlign:'justify'}}><strong className='fw-5'>Play Everything: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vitae maiores voluptates consequatur magnam earum reprehenderit sapiente assumenda necessitatibus non corporis commodi alias. Sed, dolorum! Mollitia repellendus aut quos hic!</p>

          </div>
          <div className="col my-auto ms-4" style={{}}>
          <iframe width="530" height="315" src="https://www.youtube.com/embed/f8Vbbq4cU8o?si=attir9xVmr5rXsUj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage