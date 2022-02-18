import React, { Component } from "react";
export class App extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        {/* <div className="content">
          <div>
            <img
              src=""
              alt="bg"
            />
            <div className="img-holder absolute ">
              <img src={profileImg} alt="" id="img" className="img" />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label"></div>
        </div> */}
        <div className="relative">
          <div className="img-holder absolute top-0 w-[500px] h-[500px] bg-white">
            <img
              src={profileImg}
              alt=""
              id="img"
              className="img w-[500px] h-[500px]"
            />
          </div>
          <img
            className="relative w-[845px]"
            src="https://user-images.githubusercontent.com/64256342/154729113-203bdabb-4296-40bd-b677-8455bb58bed0.png"
            alt="bg"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={this.imageHandler}
        />
        <div className="label"></div>
        <label className="image-upload" htmlFor="input">
          {/* <i className="material-icons">add_photo_alternate</i> */}
          Choose your Photo
        </label>
      </div>
    );
  }
}

export default App;
