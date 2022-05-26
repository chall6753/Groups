import React, { useEffect } from "react";
import {Button} from 'react-bootstrap'

function CloudinaryUpload({preset,handleUpload,buttonText}) {

  const generateId = () => {
    const ending = buttonText.split(' ').map(w => w.toLowerCase()).join('_')
    return `upload_widget_${ending}`
  }
  
  useEffect(() => {
    window.myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dxvcz3scf",
        uploadPreset: preset,
        prepareUploadParams: (cb, params) => {
          console.log("params", cb)
          params = [].concat(params);  
          Promise.all(params.map((body) => {
            return fetch("/api/uploads/prepare", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            })
              .then(res => res.json())
          }))
            .then((results) =>
              cb(results.length === 1 ? results[0] : results)
            );
        }
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          handleUpload && handleUpload(result);
          window.myWidget.close();
        }
      }
    );
    document.getElementById(generateId()).addEventListener(
      "click",
      function () {
        window.myWidget.open();
      },
      false
      );
    }, [preset, handleUpload]);

  return (
    <Button href="#" id={generateId()}>
      {buttonText}
    </Button>
  );
}

export default CloudinaryUpload;