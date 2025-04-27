'use client';

import { useState } from 'react';

export default function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        <img
          src="/image1.jpg"
          alt="Image 1"
          className="cursor-pointer rounded"
          onClick={() => openModal('/image1.jpg')}
        />
        <img
          src="/image2.jpg"
          alt="Image 2"
          className="cursor-pointer rounded"
          onClick={() => openModal('/image2.jpg')}
        />
        <img
          src="/image3.jpg"
          alt="Image 3"
          className="cursor-pointer rounded"
          onClick={() => openModal('/image3.jpg')}
        />
      </div>

      {/* Modal */}
      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // stop closing modal when clicking on image
          />
        </div>
      )}
    </div>
  );
}
