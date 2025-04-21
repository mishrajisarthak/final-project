import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineLightningBolt, HiOutlinePhotograph, HiOutlineInformationCircle } from 'react-icons/hi'
import Button from '../components/UI/Button.jsx'
import heroImage from '../assets/hero-image.js'

const Home = () => {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              Transform Your <span className="text-primary-600">Ideas</span> into <span className="text-accent-500">Images</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Unleash your creativity with Sarthak's AI Lab – ImageGen. 
              Create stunning, unique images from text descriptions powered by Stable Diffusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/generator">
                <Button size="lg" className="w-full sm:w-auto">
                  <HiOutlineLightningBolt className="mr-2" size={20} />
                  Start Creating
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <HiOutlineInformationCircle className="mr-2" size={20} />
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src={heroImage} 
              alt="AI generated art" 
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Generate stunning images in just a few simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <HiOutlineLightningBolt size={30} className="text-primary-600" />,
              title: 'Describe Your Vision',
              description: 'Enter a detailed text description of the image you want to create. Be specific about style, mood, and content.'
            },
            {
              icon: <span className="text-4xl text-primary-600">✨</span>,
              title: 'AI Magic Happens',
              description: 'Our advanced AI model processes your prompt and transforms it into a unique image matching your description.'
            },
            {
              icon: <HiOutlinePhotograph size={30} className="text-primary-600" />,
              title: 'Get Your Image',
              description: 'Download your creation, share it, or refine it further with additional prompts and settings.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card bg-gradient-to-r from-primary-600 to-accent-500 text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Images?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start generating stunning AI art with just a text prompt. No design skills needed!
            </p>
            <Link to="/generator">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home