import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUploading from "react-images-uploading";

import styles from "./BGRemover.module.scss";

import Logo from "../../components/Logo/Logo";
import bannerImage from "../../assets/bannerImage.png";
import uploadImage from "../../assets/uploadImage.png";
import { postData } from "../../utils/fetchData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BGRemover = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.bgRemover}>
      <ToastContainer />
      <div className={styles.navbar}>
        <Logo />
      </div>
      <div className={styles.body}>
        <div className={styles.infoBox}>
          <div className={styles.textBox}>
            <div className={styles.primaryText}>Remove Image Background</div>
            <div className={styles.secondaryText}>100% automatic and free</div>
          </div>
          <img
            className={styles.bannerImage}
            src={bannerImage}
            alt="bgremover"
          />
        </div>
        <div className={styles.uploadBox}>
          <div className={styles.uploadForm}>
            <img
              className={styles.uploadImage}
              src={uploadImage}
              alt="upload"
            />
            <div className={styles.uploadInfo}>
              File should be png, jpg and less than 5mb
            </div>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className={styles.uploadWrapper}>
                  <div
                    className={styles.uploadBtn}
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </div>
                  &nbsp;
                  <button onClick={onImageRemoveAll}>Remove all images</button>
                  {imageList.map((image, index) => (
                    <div key={index} className={styles.imageItem}>
                      <img src={image.data_url} alt="" width="100" />
                      <div className={styles.imageItemBtnWrapper}>
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <div className={styles.submitBtn}>Click To Remove Background</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGRemover;
