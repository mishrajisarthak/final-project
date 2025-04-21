import { motion } from 'framer-motion'

const Loading = ({ text = "Generating image..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        className="w-16 h-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-t-primary-600 border-r-primary-300 border-b-primary-100 border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      <p className="mt-4 text-primary-700 font-medium">{text}</p>
    </div>
  )
}

export default Loading