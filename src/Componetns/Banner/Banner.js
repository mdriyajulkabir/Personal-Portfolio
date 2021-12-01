import React from 'react';
import bannerImg from '../../Images/Image-removebg-preview.png'
import './Banner.css'
const Banner = () => {
    return (
        <div class="container  mb-5">
        <div class="row gy-5">
            <div class="col-lg-6  d-flex align-items-center">
                <span class="ps-5">
                    <h1>Hello, <br/>
                        I’m Riyajul <br/>
                    </h1>
                    <h3> 
                        UI/UX Designer <br/>
                    </h3>
                    <div class="btn btn-dark text-white px-3 me-5">Hire Me</div>
                    <div class="btn btn-dark text-white px-3"><a style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1D9EBUNhO2DsoduTrpq9fapeUS3e3e3_E/view?usp=sharing">Download Resume</a></div>
                </span>
            </div>
            <div class="col-lg-5">
                <img class="img-fluid" src={bannerImg} alt=""/>
            </div>
             {/* social icon  */}
            <div class="col-lg-1 d-flex align-items-center">
                <div class="social-icon">
                    <div class="col-lg-12 gy-5 icon-style">
                        <a href="https://www.instagram.com/riyajul_kabir/" target="blank"><i
                                class="fab fa-instagram-square"></i></a>
                    </div>
                    <div class="col-lg-12 py-3 icon-style">
                        <a href="https://web.facebook.com/riyajulkabir797/" target="blank"><i
                                class="fab fa-facebook"></i></a>
                    </div>
                    <div class="col-lg-12 icon-style">
                        <a href="https://www.linkedin.com/in/riyajul-kabir-rk797/" target="blank"><i
                                class="fab fa-linkedin"> </i></a>
                    </div>
                    <div class="col-lg-12  pt-3 icon-style">
                        <a href="https://github.com/mdriyajulkabir" target="blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <script src='/src/Componetns/hey.js'></script>
    </div>
    );
};

export default Banner;