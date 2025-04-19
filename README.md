# Sarthak's AI Lab – ImageGen

A modern web application for generating high-quality images from text descriptions using the Stable Diffusion API.

## Features

- **Text-to-Image Generation**: Create unique images from textual descriptions
- **Multi-page Navigation**: Home, Generator, History, and About pages
- **Image History**: Track and browse your previously generated images
- **Responsive Design**: Optimized for all device sizes
- **Advanced Settings**: Control image generation parameters
- **State Management**: Centralized state with Context API

## Tech Stack

- **Frontend**:
  - React.js (with Functional Components & Hooks)
  - React Router for navigation
  - Context API for state management
  - Tailwind CSS for styling

- **API Integration**:
  - Stable Diffusion API
  - Environment variables for secure API access

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sarthaks-ai-lab-imagegen.git
   cd sarthaks-ai-lab-imagegen
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy the `.env.example` file to `.env`
   - Add your Stable Diffusion API key and URL

   ```
   VITE_STABLE_DIFFUSION_API_URL=your_api_url_here
   VITE_STABLE_DIFFUSION_API_KEY=your_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components for different routes
- `/src/context`: Context API for state management
- `/src/services`: API service integration
- `/src/types`: TypeScript type definitions

## Screenshots

[Include screenshots of your application here]

## Contact

Sarthak - [sarthak@example.com](mailto:sarthak@example.com)

Project Link: [https://github.com/yourusername/sarthaks-ai-lab-imagegen](https://github.com/yourusername/sarthaks-ai-lab-imagegen)