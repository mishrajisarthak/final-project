import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useImageContext } from '../context/ImageContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import ImageCard from '../components/History/ImageCard.jsx'
import Button from '../components/UI/Button.jsx'
import { HiOutlineTrash, HiOutlineFilter } from 'react-icons/hi'
import toast from 'react-hot-toast'

const History = () => {
  const { images, removeImage, clearImages } = useImageContext()
  const navigate = useNavigate()
  const [showConfirmClear, setShowConfirmClear] = useState(false)
  const [sortOrder, setSortOrder] = useState('newest') // 'newest' or 'oldest'
  
  const handleRemoveImage = (id) => {
    removeImage(id)
    toast.success('Image removed')
  }
  
  const handleRegenerate = (prompt, params) => {
    // Store the prompt and params in sessionStorage
    sessionStorage.setItem('regeneratePrompt', prompt)
    sessionStorage.setItem('regenerateParams', JSON.stringify(params))
    
    // Navigate to generator page
    navigate('/generator')
  }
  
  const handleClearConfirm = () => {
    setShowConfirmClear(true)
  }
  
  const handleClearImages = () => {
    clearImages()
    setShowConfirmClear(false)
    toast.success('History cleared')
  }
  
  const handleCancelClear = () => {
    setShowConfirmClear(false)
  }
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')
  }
  
  // Sort images based on sort order
  const sortedImages = [...images].sort((a, b) => {
    const dateA = new Date(a.timestamp)
    const dateB = new Date(b.timestamp)
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
  })
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Image History</h1>
            <p className="text-gray-600">
              {images.length === 0 ? 'No images yet' : `${images.length} image${images.length === 1 ? '' : 's'} generated`}
            </p>
          </div>
          
          <div className="flex mt-4 sm:mt-0 space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleSortOrder}
              className="flex items-center"
            >
              <HiOutlineFilter className="mr-1" size={16} />
              {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </Button>
            
            {images.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearConfirm}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <HiOutlineTrash className="mr-1" size={16} />
                Clear All
              </Button>
            )}
          </div>
        </div>
      </motion.div>
      
      {images.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="card bg-gray-50 flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="mb-4 text-5xl text-gray-300">🖼️</div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No images yet</h3>
          <p className="text-gray-500 max-w-md mb-6">
            Generate your first image to start building your collection
          </p>
          <Button onClick={() => navigate('/generator')}>
            Create Your First Image
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {sortedImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onRemove={handleRemoveImage}
                onRegenerate={handleRegenerate}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      
      {/* Confirm Clear Modal */}
      <AnimatePresence>
        {showConfirmClear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clear all images?</h3>
              <p className="text-gray-600 mb-6">
                This will delete all {images.length} image{images.length === 1 ? '' : 's'} from your history. This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  onClick={handleCancelClear}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleClearImages}
                  className="flex-1 bg-red-600 hover:bg-red-700 focus:ring-red-300"
                >
                  Yes, Clear All
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default History