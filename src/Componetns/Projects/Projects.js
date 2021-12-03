import React from 'react';
import './Projects.css'
import project1 from '../../Images/MensSuits.png'
import project2 from '../../Images/SupportLife.png'
import project3 from '../../Images/TourX.png'
const Projects = () => {
    return (
        <div>
            <h1 className='text-center'>
            Ｍｙ Ｐｒｏｊｅｃｔｓ
            </h1>
            <div className='mx-auto project-card my-5'>
            <div className='row '>
                <div className="col-lg-4 col sm-12 px-1">
                <div class=" h-100" style={{ }}>
  <img src={project1} class="card-img-top " alt="..." />
  <div class="card-body">
                  <div className='d-flex justify-content-between'>
                      <a href="kdf" className='px-3 py-2 rounded' style={{border: '1px solid gray', textDecoration: 'none'}}>View Demo</a> 
                       {/* <!-- Button trigger modal --> */}
                      <button type="button" class="px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                      </button>
                  </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
                </div>
                <div className="col-lg-4 col sm-12">
                <div class="h-100" style={{}}>
  <img src={project2} class="card-img-top" alt="..."/>
          <div class="card-body">
              <div className='d-flex justify-content-between'>
                      <a href="kdf" className='px-3 py-2 rounded' style={{border: '1px solid gray', textDecoration: 'none'}}>View Demo</a> 
                       {/* <!-- Button trigger modal --> */}
                      <button type="button" class="px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                      </button>
              </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
          </div>
      </div>
</div>
                </div>
                <div className="col-lg-4 col sm-12">
                <div class=" h-100" style={{}}>
  <img src={project3} class="card-img-top" alt="..." style={{height: '200px'}} />
  <div class="card-body">
              <div className='d-flex justify-content-between'>
                      <a href="kdf" className='px-3 py-2 rounded' style={{border: '1px solid gray', textDecoration: 'none'}}>View Demo</a> 
                       {/* <!-- Button trigger modal --> */}
                      <button type="button" class="px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                      </button>
              </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;