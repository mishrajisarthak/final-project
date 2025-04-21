import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'

// Using environment variables for the API key and URL
const API_KEY = import.meta.env.VITE_STABLE_DIFFUSION_API_KEY
const API_URL = import.meta.env.VITE_STABLE_DIFFUSION_API_URL || 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image'

/**
 * Generate an image from a text prompt
 * @param {string} prompt - The text prompt
 * @param {Object} options - Optional parameters
 * @returns {Promise<Object>} - The generated image data
 */
export const generateImage = async (prompt, options = {}) => {
  try {
    if (!API_KEY) {
      throw new Error('API key is not set. Please set VITE_STABLE_DIFFUSION_API_KEY environment variable.')
    }

    // Default options that can be overridden
    const defaultOptions = {
      width: 1024,
      height: 1024,
      samples: 1,
      steps: 30,
      cfg_scale: 7,
      seed: Math.floor(Math.random() * 1000000000)
    }

    const requestOptions = {
      ...defaultOptions,
      ...options
    }

    const response = await axios.post(
      API_URL,
      {
        text_prompts: [{ text: prompt }],
        ...requestOptions
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    )

    // Handle the response
    if (response.data && response.data.artifacts && response.data.artifacts.length > 0) {
      const artifact = response.data.artifacts[0]
      const imageData = `data:image/png;base64,${artifact.base64}`

      // Create a timestamp for the image
      const timestamp = new Date().toISOString()
      
      // Return the processed result
      return {
        id: uuidv4(),
        prompt,
        image: imageData,
        params: {
          ...requestOptions,
          seed: artifact.seed || requestOptions.seed
        },
        timestamp
      }
    } else {
      throw new Error('No image data returned from the API')
    }
  } catch (error) {
    console.error('Image generation error:', error)
    
    // Determine error message
    let errorMessage = 'Failed to generate image. Please try again.'
    
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = 'Authentication failed. Please check your API key.'
      } else if (error.response.status === 429) {
        errorMessage = 'Rate limit exceeded. Please try again later.'
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message
      }
    } else if (error.message) {
      errorMessage = error.message
    }
    
    toast.error(errorMessage)
    throw new Error(errorMessage)
  }
}

// Mock function for development if needed
export const generateImageMock = async (prompt, options = {}) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Generate a random placeholder image
      const timestamp = new Date().toISOString()
      resolve({
        id: uuidv4(),
        prompt,
        image: 'https://source.unsplash.com/random/1024x1024/?ai',
        params: {
          width: options.width || 1024,
          height: options.height || 1024,
          seed: options.seed || Math.floor(Math.random() * 1000000000)
        },
        timestamp
      })
    }, 2000)
  })
}