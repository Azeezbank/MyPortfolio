import React from 'react';

const Testimonial = () => {
    return (
        <>
        <div className='container-fluid bg-danger text-light text-center'>
   <marquee> <h2 className='scrowI'><span className='aboutW span'>TESTIMONIAL</span>
   <span className='aboutB span'>
   TESTIMONIAL
   </span>
   </h2>
   </marquee>
    </div>

    <div className='container-fluid bg-light pt-5'>
        <div id='demo' className='carousel slide text-center' data-bs-ride='carousel' style={{width:'60%', margin:'0px 20%'}}>

            {/* indicator */}
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#demo' data-bs-slide-to='0'
                className='active'></button>
                <button type='button' data-bs-target='#demo' data-bs-slide-to='1'
                ></button>
                <button type='button' data-bs-target='#demo' data-bs-slide-to='2'>
                </button>
            </div>

            {/* the slideshow/carousel */}
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5dfd5bd18aaf0b59f776ffb2/ba579ea6-7b31-4ead-bb69-f857a749f94d/Testimony.png' alt='Los'
                    className='d-block' style={{width:'100%'}}/>
                    <div className='carousel-caption'>
                        <h3>the great journey</h3>
                        <p>a great journey indeed</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src='https://st2.depositphotos.com/36569202/45936/i/450/depositphotos_459362886-stock-photo-testimony-symbol-wooden-cubes-word.jpg' alt='Los'
                    className='d-block' style={{width: '100%'}}/>
                    <div className='carousel-caption'>
                        <h3>wonderful journey</h3>
                        <p>a wonderful journey indeed</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src='https://thumbs.dreamstime.com/b/testimony-26735216.jpg' alt='Los'
                    className='d-block' style={{width: '100%'}}/>
                    <div className='carousel-caption'>
                        <h3>i love coding</h3>
                        <p>a wonderful love indeed</p>
                    </div>
                </div>
            </div>

            {/* left and right control */}
            <button className='carousel-control-prev' type='button' data-bs-target='#demo'
            data-bs-slide='prev'>
                <span className='carousel-control-prev-icon'></span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#demo'
            data-bs-slide='next'>
                <span className='carousel-control-next-icon'></span>
            </button>
        </div>

        <div className='row text-center'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
        <button className='btn bg-dark text-light rounded mt-5 mb-5'>Explore Our Experience</button>
        </div>
        <div className='col-sm-4'></div>
        </div>
</div>

    </>
    )
}

export default Testimonial;