import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUploading from "react-images-uploading";

import styles from "./BGRemover.module.scss";

import { Logo } from "../../components";
import bannerImage from "../../assets/bannerImage.png";
import uploadImage from "../../assets/uploadImage.png";
import { postData, downloadImage } from "../../utils";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BGRemover = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const maxFileSize = 524288000;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(images);
    postData(`${BACKEND_URL}/api/bgremover`, {
      image: JSON.stringify(images[0]),
    })
      .then(async (res) => {
        if (res.error) {
          // res = await res.json();
          toast.error(res.message);
          return;
        } else {
          // res = await res.json();
          let base64image = btoa(
            new Uint8Array(res.image.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              "",
            ),
          );
          let image = `data:image/png;base64,${base64image}`;
          setImages([]);
          downloadImage(image);
        }
      })
      .catch((err) => console.log(err));
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
              maxFileSize={maxFileSize}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
              }) => (
                <div className={styles.uploadWrapper}>
                  {errors && (
                    <div>
                      {errors.maxNumber && (
                        <span>Number of selected images exceed maxNumber</span>
                      )}
                      {errors.acceptType && (
                        <span>Your selected file type is not allow</span>
                      )}
                      {errors.maxFileSize && (
                        <span>Selected file size exceed maxFileSize</span>
                      )}
                      {errors.resolution && (
                        <span>
                          Selected file is not match your desired resolution
                        </span>
                      )}
                    </div>
                  )}
                  <div
                    className={styles.uploadBtn}
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </div>
                  &nbsp;
                  {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
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
            <div className={styles.submitBtn} onClick={handleOnSubmit}>
              Click To Remove Background
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGRemover;
