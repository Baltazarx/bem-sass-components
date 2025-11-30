                                                              import React from "react";
import styled from "styled-components";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects } from "../../styles/tokens/themes";

const CardContainer = styled.div`
  overflow: hidden;
  transition: ${effects.transitionBase}, box-shadow ${effects.transitionBase};
  width: 100%;
  max-width: 320px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  background: transparent;
  border: none;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.xl} rgba(194, 24, 91, 0.15),0 4px 12px rgba(229, 115, 115, 0.1);                                                                              
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadows["3xl"]} rgba(194, 24, 91, 0.25),
                0 8px 18px rgba(229, 115, 115, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  border-radius: ${borderRadius.lg};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    min-height: 400px;
  }

  @media (max-width: 480px) {
    min-height: 400px;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(194, 24, 91, 0.85) 50%, rgba(194, 24, 91, 0.95) 100%);
  padding: ${spacing.lg};
  padding-top: ${spacing["2xl"]};
  color: ${textColors.light};
  border-radius: 0 0 ${borderRadius.lg} ${borderRadius.lg};
  z-index: 5;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: ${effects.transitionBase};

  ${CardContainer}:hover & {
    background: linear-gradient(180deg, transparent 0%, rgba(194, 24, 91, 0.9) 50%, rgba(194, 24, 91, 0.98) 100%);
  }
`;

const CardTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.sm};
  color: ${textColors.light};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  line-height: ${typography.lineHeight.tight};
  font-family: ${typography.fontFamily};

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.xl};
    margin-bottom: ${spacing.sm};
    line-height: ${typography.lineHeight.normal};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.lg};
    margin-bottom: ${spacing.xs};
  }
`;

const CardDesc = styled.p`
  font-size: ${typography.fontSize.md};
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  line-height: ${typography.lineHeight.normal};
  font-family: ${typography.fontFamily};

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.md};
    line-height: ${typography.lineHeight.relaxed};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.normal};
  }
`;

export default function CardGradient() {
  return (
    <CardContainer>
      <CardImage
        src="https://i.pinimg.com/736x/2b/43/28/2b432840a61c8576e5a00b1b1cd40f56.jpg"
        alt="Card Gradient"
      />
      <CardOverlay>
        <CardTitle>Card with Gradient</CardTitle>
        <CardDesc>
          Card dengan gradient overlay yang indah untuk memberikan efek visual yang menarik.
        </CardDesc>
      </CardOverlay>
    </CardContainer>
  );
}
