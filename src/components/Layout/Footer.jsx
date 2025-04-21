import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-padding max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600">Sarthak's AI Lab</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              An AI-powered image generation tool using Stable Diffusion. 
              Create beautiful, unique images from text prompts.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Generate Images
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>© {currentYear} Sarthak's AI Lab - ImageGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer