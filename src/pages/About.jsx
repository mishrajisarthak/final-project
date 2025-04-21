import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import Button from '../components/UI/Button.jsx'

const About = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Sarthak's AI Lab – ImageGen</h1>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">What is ImageGen?</h2>
          <p className="text-gray-700 mb-4">
            Sarthak's AI Lab – ImageGen is a powerful AI image generation tool that leverages the 
            cutting-edge capabilities of Stable Diffusion, a state-of-the-art AI model for creating 
            images from text descriptions. Our web application provides an intuitive interface to 
            this advanced technology, allowing anyone to create stunning, unique visuals simply by 
            describing what they want to see.
          </p>
          <p className="text-gray-700">
            Whether you're a designer looking for inspiration, a content creator needing custom imagery, 
            or just someone who wants to explore the creative possibilities of AI, ImageGen makes the 
            process simple, fun, and accessible to everyone regardless of technical background.
          </p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            ImageGen uses Stable Diffusion, a deep learning text-to-image model that generates unique 
            images from text descriptions (prompts). Here's how the process works:
          </p>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Text Input</h3>
                <p className="text-gray-600">
                  You provide a detailed text description of the image you want to create.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">AI Processing</h3>
                <p className="text-gray-600">
                  The system processes your text using Stable Diffusion, interpreting the semantic 
                  meaning and visual concepts in your description.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Image Generation</h3>
                <p className="text-gray-600">
                  The AI generates a unique image that matches your description, considering elements 
                  like subject, style, composition, lighting, and mood.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Refinement</h3>
                <p className="text-gray-600">
                  You can adjust parameters like image dimensions and inference steps, or regenerate 
                  the image with the same settings to explore variations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tips for Great Results</h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">
                <strong>Be specific and detailed</strong> in your prompts. Include subject, setting, lighting, mood, style, colors, etc.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">
                <strong>Reference art styles</strong> (e.g., "in the style of Van Gogh" or "cyberpunk aesthetic").
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">
                <strong>Use higher step counts</strong> (30-50) for more detailed, refined images.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">
                <strong>Save seeds</strong> from images you like and reuse them with modified prompts to create variations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">
                <strong>Experiment</strong> with different prompt phrasings to see how they affect the output.
              </span>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gradient-to-r from-primary-600 to-accent-500 text-white text-center">
          <h2 className="text-xl font-bold mb-4">Ready to Create?</h2>
          <p className="mb-6">
            Start generating amazing AI artwork with just a text description
          </p>
          <Link to="/generator">
            <Button 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <HiOutlineLightningBolt className="mr-2" size={20} />
              Go to Generator
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default About