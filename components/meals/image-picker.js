"use client";

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageRef = useRef();

    function handlePickClick() {
        imageRef.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);

    }

    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} fill alt="The image selected by the user." />}
            </div>
            <input 
                ref={imageRef}
                className={classes.input}
                type="file" 
                id={name} 
                accept="image/png, image/jpeg" 
                name={name} 
                onChange={handleImageChange}
                required
            />
            <button 
                onClick={handlePickClick}
                className={classes.button} type="button">Pick an Image</button>
        </div>
    </div>
}