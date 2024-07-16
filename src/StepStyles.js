import styled, { keyframes } from 'styled-components';

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

export const StepContainer = styled.div`
  margin: 20px 0;
  animation: ${fadeIn} 2.5s ease-out;
`;

export const Step = styled.div`
  margin-bottom: 40px;
  text-align: left;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const ImageUpload = styled.input`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StepInputWrapper = styled.div`
  margin-top: 10px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UploadButton = styled.label`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #FFFFFF;
  background: linear-gradient(90deg, #007BFF, #00C6FF);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  margin-top: 10px;
  margin-bottom: 20px;
  &:hover {
    background: linear-gradient(90deg, #0056b3, #0096c7);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
  input {
    display: none;
  }
`;

export const StepImage = styled.div`
  margin-top: 20px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ImagePreview = styled.img`
  max-width: 200px;
  margin: 10px 0;
`;

export const ModelViewer = styled.iframe`
  width: 400px;
  height: 300px;
  border: none;
`;

export const ModelPreview = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px 0;
  background-color: #333;
`;