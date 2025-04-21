import { useState } from 'react'
import { useImageContext } from '../context/ImageContext.jsx'
import { generateImage, generateImageMock } from '../services/api.js'
import GeneratorForm from '../components/Generator/GeneratorForm.jsx'
import GeneratedImage from '../components/Generator/GeneratedImage.jsx'
import Loading from '../components/UI/Loading.jsx'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const Generator = () => {
  const { addImage, isLoading, setIsLoading, setError } = useImageContext()
  const [currentImage, setCurrentImage] = useState(null)
  
  const handleGenerateImage = async (prompt, params) => {
    try {
      setIsLoading(true)
      setCurrentImage(null)
      
      // Use the actual API or mock API based on environment
      let imageData
      
      if (import.meta.env.VITE_USE_MOCK_API === 'true') {
        // Use mock API for development
        imageData = await generateImageMock(prompt, params)
      } else {
        // Use the real API
        imageData = await generateImage(prompt, params)
      }
      
      setCurrentImage(imageData)
      addImage(imageData)
      toast.success('Image generated successfully!')
    } catch (error) {
      setError(error.message)
      toast.error(error.message || 'Failed to generate image')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Image Generator</h1>
        <p className="text-gray-600 mb-8">
          Create unique AI-generated images by describing what you want to see
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <GeneratorForm 
            onSubmit={handleGenerateImage} 
            disabled={isLoading}
          />
        </div>
        
        <div>
          {isLoading ? (
            <div className="card flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            currentImage && (
              <GeneratedImage 
                imageData={currentImage}
                onRegenerate={handleGenerateImage}
              />
            )
          )}
          
          {!isLoading && !currentImage && (
            <motion.div
              className="card bg-gray-50 flex flex-col items-center justify-center py-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-5xl text-gray-300">✨</div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Your image will appear here</h3>
              <p className="text-gray-500 max-w-md">
                Enter a prompt on the left and click "Generate Image" to create your first AI masterpiece
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Generator