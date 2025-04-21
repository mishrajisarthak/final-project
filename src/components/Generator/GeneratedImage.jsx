import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineDownload, HiOutlineClipboard, HiOutlineRefresh } from 'react-icons/hi'
import Button from '../UI/Button.jsx'
import toast from 'react-hot-toast'

const GeneratedImage = ({ imageData, onRegenerate }) => {
  const [copied, setCopied] = useState(false)

  if (!imageData) return null

  const { prompt, image, params, timestamp } = imageData

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = image
    link.download = `ai-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('Image downloaded successfully')
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    toast.success('Prompt copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Your Generated Image</h3>
        <p className="text-sm text-gray-500">Generated on {formatDate(timestamp)}</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
        <img 
          src={image} 
          alt={prompt}
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-700">Prompt</h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyPrompt}
            className="text-gray-500"
          >
            <HiOutlineClipboard className="mr-1" size={16} />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        <p className="text-gray-600 text-sm">{prompt}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
        <div className="text-sm">
          <span className="font-medium text-gray-700">Dimensions:</span>
          <span className="text-gray-600 ml-2">{params.width} × {params.height}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium text-gray-700">Steps:</span>
          <span className="text-gray-600 ml-2">{params.steps}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium text-gray-700">Seed:</span>
          <span className="text-gray-600 ml-2">{params.seed}</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleDownload}
          className="flex-1"
        >
          <HiOutlineDownload className="mr-2" size={18} />
          Download
        </Button>
        <Button
          variant="secondary"
          onClick={() => onRegenerate(prompt, params)}
          className="flex-1"
        >
          <HiOutlineRefresh className="mr-2" size={18} />
          Regenerate
        </Button>
      </div>
    </motion.div>
  )
}

export default GeneratedImage