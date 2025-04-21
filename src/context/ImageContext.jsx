import { createContext, useContext, useState, useEffect } from 'react'

// Create context
const ImageContext = createContext()

// Custom hook to use the image context
export const useImageContext = () => {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider')
  }
  return context
}

// Provider component
export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load images from localStorage on initial render
  useEffect(() => {
    try {
      const savedImages = localStorage.getItem('generatedImages')
      if (savedImages) {
        setImages(JSON.parse(savedImages))
      }
    } catch (err) {
      console.error('Error loading images from localStorage:', err)
    }
  }, [])

  // Save images to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('generatedImages', JSON.stringify(images))
    } catch (err) {
      console.error('Error saving images to localStorage:', err)
    }
  }, [images])

  // Add a new image to the history
  const addImage = (image) => {
    setImages((prevImages) => [image, ...prevImages])
  }

  // Remove an image from the history
  const removeImage = (id) => {
    setImages((prevImages) => prevImages.filter(img => img.id !== id))
  }

  // Clear all images
  const clearImages = () => {
    setImages([])
  }

  const value = {
    images,
    isLoading,
    error,
    setIsLoading,
    setError,
    addImage,
    removeImage,
    clearImages
  }

  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  )
}