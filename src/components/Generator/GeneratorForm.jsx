import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineAdjustments, HiOutlineLightningBolt, HiOutlineRefresh } from 'react-icons/hi'
import Button from '../UI/Button.jsx'
import toast from 'react-hot-toast'

const GeneratorForm = ({ onSubmit, disabled }) => {
  const [prompt, setPrompt] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [params, setParams] = useState({
    width: 1024,
    height: 1024,
    steps: 30,
    seed: ''
  })

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }
    
    const finalParams = {
      ...params,
      seed: params.seed ? parseInt(params.seed) : Math.floor(Math.random() * 1000000000)
    }
    
    onSubmit(prompt, finalParams)
  }

  // Generate a random seed
  const generateRandomSeed = () => {
    setParams(prev => ({
      ...prev,
      seed: Math.floor(Math.random() * 1000000000).toString()
    }))
  }

  return (
    <div className="card mb-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-gray-700 font-medium mb-2">
            Describe your image
          </label>
          <div className="relative">
            <textarea
              id="prompt"
              rows="3"
              className="input focus:ring-primary-300"
              placeholder="A futuristic cyberpunk city with neon lights and flying cars..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              disabled={disabled}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Be specific and descriptive for better results
          </p>
        </div>

        <div className="mb-4">
          <button
            type="button"
            className="text-primary-600 text-sm font-medium flex items-center hover:text-primary-700 focus:outline-none"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <HiOutlineAdjustments className="mr-1" size={18} />
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
          </button>
        </div>

        {showAdvanced && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 space-y-4 bg-gray-50 p-4 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="width" className="block text-gray-700 text-sm font-medium mb-1">
                  Width
                </label>
                <select
                  id="width"
                  className="input"
                  value={params.width}
                  onChange={(e) => setParams({...params, width: parseInt(e.target.value)})}
                  disabled={disabled}
                >
                  <option value="512">512px</option>
                  <option value="768">768px</option>
                  <option value="1024">1024px</option>
                </select>
              </div>

              <div>
                <label htmlFor="height" className="block text-gray-700 text-sm font-medium mb-1">
                  Height
                </label>
                <select
                  id="height"
                  className="input"
                  value={params.height}
                  onChange={(e) => setParams({...params, height: parseInt(e.target.value)})}
                  disabled={disabled}
                >
                  <option value="512">512px</option>
                  <option value="768">768px</option>
                  <option value="1024">1024px</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="steps" className="block text-gray-700 text-sm font-medium mb-1">
                Inference Steps: {params.steps}
              </label>
              <input
                type="range"
                id="steps"
                min="20"
                max="50"
                step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                value={params.steps}
                onChange={(e) => setParams({...params, steps: parseInt(e.target.value)})}
                disabled={disabled}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>20 (Faster)</span>
                <span>50 (Better Quality)</span>
              </div>
            </div>

            <div>
              <label htmlFor="seed" className="block text-gray-700 text-sm font-medium mb-1">
                Seed (Optional - Leave empty for random)
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="seed"
                  className="input"
                  placeholder="Random seed"
                  value={params.seed}
                  onChange={(e) => setParams({...params, seed: e.target.value})}
                  disabled={disabled}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={generateRandomSeed}
                  disabled={disabled}
                  className="flex-shrink-0"
                >
                  <HiOutlineRefresh size={18} />
                </Button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Same seed + prompt will generate similar images
              </p>
            </div>
          </motion.div>
        )}

        <Button
          type="submit"
          fullWidth
          disabled={disabled || !prompt.trim()}
          className="mt-2"
        >
          <HiOutlineLightningBolt className="mr-2" size={20} />
          {disabled ? 'Generating...' : 'Generate Image'}
        </Button>
      </form>
    </div>
  )
}

export default GeneratorForm