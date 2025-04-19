import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppLayout from './components/Layout/AppLayout';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';
import ChatbotSection from './components/Chatbot/ChatbotSection';
import ImageGeneratorSection from './components/ImageGenerator/ImageGeneratorSection';
import VideoGeneratorSection from './components/VideoGenerator/VideoGeneratorSection';
import StoryWriterSection from './components/StoryWriter/StoryWriterSection';
import { initializeLocalStorage } from './utils/localStorage';

const App = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const savedSection = localStorage.getItem('activeSection');
    return savedSection || 'chatbot';
  });

  useEffect(() => {
    // Initialize local storage with default values if needed
    initializeLocalStorage();
    
    // Save active section to local storage whenever it changes
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  // Map sections to their respective components
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'chatbot':
        return <ChatbotSection />;
      case 'imageGenerator':
        return <ImageGeneratorSection />;
      case 'videoGenerator':
        return <VideoGeneratorSection />;
      case 'storyWriter':
        return <StoryWriterSection />;
      default:
        return <ChatbotSection />;
    }
  };

  return (
    <ThemeProvider>
      <AppLayout>
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <MainContent>
          {renderActiveSection()}
        </MainContent>
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;