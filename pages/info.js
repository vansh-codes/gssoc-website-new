function info() {
  return (
    <div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <p className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              What {""}
              <span className="text-primary_orange-0">they</span> do ?
            </p>
          </p>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="flex justify-between items-center flex-wrap mb-24">
            <div data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/07bf179210769ea9a280f7e87e1f6e5cdc464953/Info/Triangle.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
            <div className="basis-full mt-4 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
              <p className="text-black dark:text-white font-medium text-2xl 2.25rem 3rem mb-5 font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                porttitor tincidunt eu id. Quis odio quis pretium tempor morbi
                ipsum vel. Donec ultricies risus massa elementum.
              </p>
              <p className="text-black dark:text-white font-medium text-2xl 2.25rem 3rem mb-5 font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                porttitor tincidunt eu id. Quis odio quis pretium tempor morbi
                ipsum vel. Donec ultricies risus massa elementum.
              </p>
              <p className="text-black dark:text-white font-medium text-2xl 2.25rem 3rem mb-5 font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                porttitor tincidunt eu id. Quis odio quis pretium tempor morbi
                ipsum vel. Donec ultricies risus massa elementum.
              </p>
              {/* <button className="bg-primary_orange-0 rounded-xl font-bold py-3 w-full text-white dark:text-gray-800 mt-5">
              Wanna know more about GIRLSCRIPT?
            </button> */}
            </div>
          </div>
        </div>
        <div className="items-center justify-center">
          <p className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="text-white text-5xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0">How </span>
              do they do ?
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around"> 
        <div className="flex flex-col justify-around align-center items-center">
          <button className="flex flex-col text-black bg-primary_orange-0 p-3 px-2 mx-8 rounded-lg w-full">Participants</button>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/8eba35cb8c2fefb3c64cc489d191c4f5a8e4d5a6/Logos/participantinfo.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
        </div>  
        <div className="flex flex-col justify-evenly align-center items-center">
          <button className="flex flex-col text-black bg-primary_orange-0 p-3 px-2 mt-5 rounded-lg w-full">Mentors</button>
           <div className="flex" data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/b30ac90ea12dc937c2aa57c77e1dbe904b83d0dd/Logos/mentors-info.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
        </div>  
      </div>









      {/* <div className="flex flex-col">
       <div className="flex flex-row justify-around align-center items-center">
        <button className="flex flex-start text-black bg-primary_orange-0 p-3 rounded-lg ">Participants</button>
        <button className="flex flex-start text-black bg-primary_orange-0 p-3 rounded-lg ">Mentors</button>
       </div>  
       <div className="flex justify-around flex-row ">
          <div className="flex p-8">
            <div className="flex" data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/8eba35cb8c2fefb3c64cc489d191c4f5a8e4d5a6/Logos/participantinfo.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
            <div data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/b30ac90ea12dc937c2aa57c77e1dbe904b83d0dd/Logos/mentors-info.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
          </div>
       </div>
      </div> */}
      
    </div>
  );
}

export default info;
