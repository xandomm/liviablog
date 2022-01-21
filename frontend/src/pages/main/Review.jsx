/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './review.css';

const Review = () => {
    return(
        <div class="container">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="carousel-item active">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> 
                    <img src="https://i.imgur.com/lE89Aey.jpg"/>
                    <div id="image-caption">Nick Doe</div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div class="carousel-item active">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> 
                    <img src="https://i.imgur.com/lE89Aey.jpg"/>
                    <div id="image-caption">Nick Doe</div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div class="carousel-item active">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> 
                    <img src="https://i.imgur.com/lE89Aey.jpg"/>
                    <div id="image-caption">Nick Doe</div>
                </div>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Review 