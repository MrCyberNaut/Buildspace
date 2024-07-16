import styled, { keyframes } from 'styled-components';
import logo from './logo.png';

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

export const Header = styled.header`
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

export const Logo = styled.img`
  height: 50px;
`;

export const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`;

export { logo };