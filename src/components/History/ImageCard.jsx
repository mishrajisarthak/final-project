import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineDownload, HiOutlineTrash, HiOutlineEye, HiX } from 'react-icons/hi'
import Button from '../UI/Button.jsx'
import toast from 'react-hot-toast'

const ImageCard = ({ image, onRemove, onRegenerate }) => {
  const [showDetails, setShowDetails] = useState(false)
  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = image.image
    link.download = `ai-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('Image downloaded successfully')
  }
  
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }
  
  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="relative group mb-3 flex-shrink-0">
        <img 
          src={image.image} 
          alt={image.prompt}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={handleDownload}
            className="p-2 bg-white rounded-full mx-1 hover:bg-gray-100 transition-colors"
            aria-label="Download image"
          >
            <HiOutlineDownload size={18} />
          </button>
          <button
            onClick={() => onRegenerate(image.prompt, image.params)}
            className="p-2 bg-white rounded-full mx-1 hover:bg-gray-100 transition-colors"
            aria-label="Regenerate similar image"
          >
            <HiOutlineEye size={18} />
          </button>
          <button
            onClick={() => onRemove(image.id)}
            className="p-2 bg-white rounded-full mx-1 hover:bg-gray-100 transition-colors"
            aria-label="Delete image"
          >
            <HiOutlineTrash size={18} className="text-red-500" />
          </button>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{image.prompt}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{formatDate(image.timestamp)}</span>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
      
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 pt-3 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-medium text-gray-700">Dimensions:</span>
              <span className="text-gray-600 ml-1">{image.params.width}×{image.params.height}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Steps:</span>
              <span className="text-gray-600 ml-1">{image.params.steps}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Seed:</span>
              <span className="text-gray-600 ml-1">{image.params.seed}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ImageCard