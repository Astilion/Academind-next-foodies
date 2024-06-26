'use client';
import { useRef, useState, ChangeEvent } from 'react';
import classes from './image.picker.module.css';
import Image from 'next/image';

interface ImagePickerProps {
    label: string;
    name: string;
}

const ImagePicker = ({ label, name } :ImagePickerProps) => {
    const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    const handlePickClick = (): void => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(undefined);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            const result = fileReader.result;
            if (typeof result === 'string') {
                setPickedImage(result);
            }
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by the user." layout="fill" />}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    accept="image/png, image/jpeg"
                    name={name}
                    id={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
