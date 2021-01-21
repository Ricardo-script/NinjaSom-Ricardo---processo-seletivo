import React from 'react';
import {Figure, Slides } from './styles';
import capa from '../../assets/capa.jpg';
import capa1 from '../../assets/capa1.png';
import capa2 from '../../assets/capa2.jpg';


function Capa(){
    return(
        <Figure>
            <Slides>
                <input type="radio" name="radio-buttons" id="img-1" checked />
                <li class="slide-container">
                    <div class="slide-image">
                        <img src={capa} alt="" />
                    </div>

                    <div class="carousel-controls">
                        <label for="img-3" className="prev-slide">
                            <span>&lsaquo;</span>
                        </label>
                        <label for="img-2" className="next-slide">
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>

                <input type="radio" name="radio-buttons" id="img-2" checked />
                    <li class="slide-container">
                        <div class="slide-image">
                            <img src={capa2} alt="" />
                        </div>

                        <div class="carousel-controls">
                            <label for="img-1" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label for="img-3" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>

                <input type="radio" name="radio-buttons" id="img-3" checked />
                <li class="slide-container">
                    <div class="slide-image">
                        <img src={capa1} alt="" />
                    </div>

                    <div class="carousel-controls">
                        <label for="img-2" className="prev-slide">
                            <span>&lsaquo;</span>
                        </label>
                        <label for="img-1" className="next-slide">
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>

                <div className="carousel-dots">
                    <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
                    <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
                    <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
                </div>
            </Slides>
        </Figure>
        
    );
}

export default Capa;