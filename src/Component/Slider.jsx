import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

  return (
    <Slider {...settings}>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Ashok Ramchandran<span className="job-title">CEO Schindler India</span></h2>
            </div>
            </div>
            </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Ajay Chaturvedi<span className="job-title">Founder HarVa</span></h2>
            </div>
            </div>
        </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Paresh Gupta<span className="job-title">CEO GCEC</span></h2>
            </div>
            </div>
        </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Pawan Kumar Rai<span className="job-title">Co-Founder Finshots</span></h2>
            </div>
            </div>
        </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Yash Bhatt <span className="job-title">Founder Brook & Blooms</span></h2>
            </div>
            </div>
        </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Aashish Beergi<span className="job-title">Founder MASH Project Foundation</span></h2>
            </div>
            </div>
        </div>
        <div className="card-wrapper">
        <div className="card">
        <div className="card-image">
            <img src="images/6.png"></img>
            </div>
            <ul class="social-icons">
                <li><a herf="#"><i className="fa fa-facebook"></i></a></li>
                <li><a herf="#"><i className="fa fa-instagram"></i></a></li>
                <li><a herf="#"><i className="fa fa-twitter"></i></a></li>
                <li><a herf="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="details">
                <h2>Dipak Bharali<span className="job-title">Grassroot Innovator</span></h2>
            </div>
            </div>
        </div>
    </Slider>
  )
}

export default ImageSlider;