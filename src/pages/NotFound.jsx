import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/UI/Button.jsx'

const NotFound = () => {
  return (
    <div className="py-16 flex items-center justify-center min-h-[60vh]">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button fullWidth>Go to Homepage</Button>
          </Link>
          <Link to="/generator">
            <Button variant="secondary" fullWidth>Create an Image</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound