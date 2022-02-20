import React, { useState, useEffect, useRef } from "react";

const CatMeme = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);
  const canvas = useRef(null);
	const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')


  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80);
      ctx.drawImage(image, (400 - 256) / 2, 40);

      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

			ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)
    }
  }, [image, canvas,topText, bottomText]);

  return (
    <div>
      <div>
        <canvas ref={canvas} width={400} height={256 + 80}></canvas>

        <div>
          <br />
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>

        <div className="App">
          <div className="container">
            {error && <p className="errorMsg">File not supported</p>}
            <div
              className="imgPreview"
              style={{
                background: imgPreview
                  ? `url("${imgPreview}") no-repeat center/cover`
                  : "#131313",
              }}
            >
              {!imgPreview && (
                <>
                  <p>Add an image</p>
                  <label htmlFor="fileUpload" className="customFileUpload">
                    Choose file
                  </label>
                  <input
                    type="file"
										value={topText}
                    id="fileUpload"
                    onChange={(e) => setTopText(e.target.value)}
                  />
                  <span>(jpg, jpeg or png)</span>
                </>
              )}
            </div>
            {imgPreview && (
              <button onClick={() => setImgPreview(null)}>Remove image</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatMeme;
