import React from "react";


const ImageModal = ({modalImage,setModalImage, setIsModalOpen}) => {

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(""); // Clear the modal image when closing
      };
    
    
      return(
        <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={closeModal}
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={modalImage}
                  alt="Fullscreen Image"
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  className="absolute top-1 right-1 text-black bg-gray-500 text-3xl p-1"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            </div>
      )

}



  export default ImageModal;