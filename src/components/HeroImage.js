import React from 'react';

export default function HeroImage() {
  return (
    <header className='heroImage'>
      <div >
        <img src="./HEROIMAGE.jpg" alt="image of noodless" ></img>
        {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}