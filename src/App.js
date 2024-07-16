// App.js

import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import logo from './logo.png'; // Import your logo image here
import ARScene from './ARScene';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #FFFFFF;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding-top: 80px; /* Adjusted to ensure content isn't hidden behind the header */
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${slideIn} 1s ease-out;
`;

const Logo = styled.img`
  height: 50px;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1.5s ease-out;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: ${fadeIn} 2s ease-out;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #FFFFFF;
  background: linear-gradient(90deg, #007BFF, #00C6FF);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  animation: ${fadeIn} 2.5s ease-out;

  &:hover {
    background: linear-gradient(90deg, #0056b3, #0096c7);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
`;

const StepContainer = styled.div`
  margin-top: 2rem;
`;

const StepTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [modelPreviewUrl, setModelPreviewUrl] = useState(null);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreviewUrl(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleModelUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setModelPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src={logo} alt="AdReality Logo" /> {/* Use the imported logo here */}
        <BrandName>AdReality</BrandName>
      </Header>
      <Container>
        {currentStep === 0 && (
          <>
            <MainHeading>Transform. Engage. Impress</MainHeading>
            <SubHeading>Your brand, amplified by augmented reality</SubHeading>
            <Button onClick={handleNextStep}>Get Started</Button>
          </>
        )}
                {currentStep === 1 && (
          <StepContainer>
            <StepTitle>Step 1: Create and Upload Marker Image</StepTitle>
            <StepDescription>
              Go to <a href="https://carnaux.github.io/NFT-Marker-Creator/#/" target="_blank" rel="noopener noreferrer">NFT Marker Creator</a> to create a marker from your image. Download the generated ISET/FSET files and upload them here.
            </StepDescription>
            <input type="file" accept=".iset, .fset" onChange={handleImageUpload} />
            {imagePreviewUrl && <img src={imagePreviewUrl} alt="Marker Preview" style={{ width: '200px', marginTop: '10px' }} />}
          </StepContainer>
        )}

{currentStep === 2 && (
  <StepContainer>
    <StepTitle>Step 2: Upload 3D Model</StepTitle>
    <StepDescription>
      Add your 3D model (upload in glTF format).
    </StepDescription>
    <input type="file" accept=".glb, .gltf" onChange={handleModelUpload} />
    {modelPreviewUrl && (
      <model-viewer
        src={modelPreviewUrl}
        alt="3D Model Preview"
        style={{ width: '300px', height: '300px', marginTop: '10px' }}
        auto-rotate
        camera-controls
      />
    )}
  </StepContainer>
)}

        {currentStep === 3 && (
          <StepContainer>
            <StepTitle>Step 3: Augmented Reality Preview</StepTitle>
            <StepDescription>
              Preview your augmented reality experience.
            </StepDescription>
            <ARScene />
          </StepContainer>
        )}
        {/* Navigation Buttons */}
        {currentStep > 0 && (
          <Button onClick={handlePrevStep}>Previous</Button>
        )}
        {currentStep > 0 && currentStep < 3 && (
          <Button onClick={handleNextStep}>Next</Button>
        )}
      </Container>
    </>
  );
};

export default App;
