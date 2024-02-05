import bowser from '../assets/bowser.png';
import dk from '../assets/dk.png';
import luigi from '../assets/luigi.png';
import mario from '../assets/mario.png';
import peach from '../assets/peach.webp';
import toad from '../assets/toad.webp';
import waluigi from '../assets/waluigi.png';
import wario from '../assets/wario.png';
import yoshi from '../assets/yoshi.webp';
import { useState } from 'react';


// Fisher-Yates Algorithm
const shuffle = (arr) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

const Images = () => {
    const [images, setImages] = useState([mario, luigi, peach, yoshi, toad, bowser, wario, waluigi, dk]);
    
    return (
        <div id="images">
            {images.map((img) => (<img onClick={() => setImages(shuffle(images))} src={img} />))}
        </div>
    )
};

export default Images;