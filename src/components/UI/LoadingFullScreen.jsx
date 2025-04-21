import { motion } from 'framer-motion'

const LoadingFullScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 backdrop-blur-sm">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary-300"
            animate={{ 
              rotate: 360,
              borderColor: [
                'rgb(196, 181, 253)', // primary-300
                'rgb(94, 234, 212)',  // secondary-300
                'rgb(249, 168, 212)', // accent-300
                'rgb(196, 181, 253)'  // primary-300
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-t-transparent border-primary-600"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <p className="mt-4 font-medium text-primary-700">Loading amazing content...</p>
      </motion.div>
    </div>
  )
}

export default LoadingFullScreen