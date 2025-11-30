"use client";

import React from "react";
import styled, { css, keyframes } from "styled-components";

// Animasi rotasi border
const rotateBorder = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

// Wrapper Card
const CardContainer = styled.div`
  width: 18rem;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  
  // Conditional styling based on variant
  ${props => {
    switch (props.variant) {
      case 'gradient':
        return css`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
        `;
      case 'outline':
        return css`
          background: transparent;
          border: 2px solid #667eea;
          color: #667eea;
        `;
      case 'animated':
        return css`
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 400% 400%;
          animation: ${rotateBorder} 3s ease infinite;
          border: none;
          color: white;
        `;
      default:
        return css`
          background: #fff;
          border: 1px solid #e0e0e0;
          color: #333;
        `;
    }
  }}
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

// Card Image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Card Body
const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Card Title
const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

// Card Text
const CardText = styled.p`
  margin: 0 0 1rem 0;
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
`;

// Card Button
const CardButton = styled.button`
  background: ${props => props.variant === 'gradient' ? 'rgba(255, 255, 255, 0.2)' : '#667eea'};
  color: ${props => props.variant === 'gradient' ? 'white' : 'white'};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.variant === 'gradient' ? 'rgba(255, 255, 255, 0.3)' : '#5a67d8'};
    transform: translateY(-2px);
  }
`;

// Main Card Component
const CardVariant = ({ variant = 'default', image, title, text, buttonText, onButtonClick }) => {
  return (
    <CardContainer variant={variant}>
      {image && <CardImage src={image} alt={title} />}
      <CardBody>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </div>
        {buttonText && (
          <CardButton variant={variant} onClick={onButtonClick}>
            {buttonText}
          </CardButton>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default CardVariant;