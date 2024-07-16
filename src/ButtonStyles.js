import styled, { keyframes } from 'tyled-components';

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

export const Button = styled.button`
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
  margin: 10px;
  &:hover {
    background: linear-gradient(90deg, #0056b3, #0096c7);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;