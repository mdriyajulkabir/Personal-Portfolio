import React from 'react';
import html from '../../Images/html.ec102b63.png'
import css from '../../Images/css.29013fe6.png'
import bootsrap from '../../Images/bootstrap.bab10aaa.png'
import mui from '../../Images/metarial ui.4ee24f56.png'
import tailwind from '../../Images/tailwaind.4025b9f6.png'
import js from '../../Images/javascript.png'
import react from '../../Images/react.35639ed9.png'
import expressjs from '../../Images/express.483b10d6.png'
import nodejs from '../../Images/node js.8030f6dd.png'
import mongodb from '../../Images/mongodb.70c82e5a.png'
import firebase from '../../Images/firebase.bff5748e.png'
import github from '../../Images/github.png'
import './MySkill.css'
const MySkill = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center'>Ｍｙ Ｓｋｉｌｌ</h2>
            <hr className='w-75 mx-auto' />
            <div className='skill-img mx-auto'>
            <div class="row row-cols-2 row-cols-md-4 g-2">
  <div class="col">
    <div class=" h-100">
      <img src={html} class="card-img-top w-50 mx-auto d-flex justify-content-center mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">HTML</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class=" h-100 rounded shadow">
      <img src={css} class="card-img-top w-50 mx-auto d-flex justify-content-center mt-3 pt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Css</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bootsrap} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bootsrap</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={mui} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Materil UI</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={tailwind} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tailwind</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={js} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">JavaScript</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React Js</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={expressjs} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Express Js</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={nodejs} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Node Js</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={mongodb} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mongo DB</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={firebase} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Firebase</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={github} class="card-img-top w-50 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">GitHub</h5>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default MySkill;