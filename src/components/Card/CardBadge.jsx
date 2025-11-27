import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
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
  background: linear-gradient(135deg, ${colors.white} 0%, rgba(255, 250, 250, 0.98) 100%);
  border: none;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg} rgba(244, 143, 177, 0.15),
              0 3px 10px rgba(244, 143, 177, 0.1);
  backdrop-filter: ${effects.backdropBlur};
  position: relative;
  overflow: visible;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadows["2xl"]} rgba(244, 143, 177, 0.25),
                0 6px 15px rgba(244, 143, 177, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  background: linear-gradient(135deg, ${colors.accent} 0%, rgba(244, 143, 177, 0.95) 100%);
  color: ${textColors.light};
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  z-index: 10;
  box-shadow: ${shadows.md} rgba(244, 143, 177, 0.3);
  backdrop-filter: ${effects.backdropBlur};
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: ${effects.transitionBase};

  ${CardContainer}:hover & {
    transform: scale(1.05);
    box-shadow: ${shadows.lg} rgba(244, 143, 177, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  min-height: 180px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: ${borderRadius.lg} ${borderRadius.lg} 0 0;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const CardContent = styled.div`
  padding: ${spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: ${spacing.lg};
  }

  @media (max-width: 480px) {
    padding: ${spacing.md};
  }
`;

const CardTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.sm};
  color: ${colors.textDark};
  font-family: ${typography.fontFamily};
  line-height: ${typography.lineHeight.tight};

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
  color: ${colors.muted};
  line-height: ${typography.lineHeight.normal};
  font-family: ${typography.fontFamily};
  flex: 1;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.md};
    line-height: ${typography.lineHeight.relaxed};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.normal};
  }
`;

export default function CardBadge() {
  return (
    <CardContainer>
      <Badge>
        <FaStar />
        <span>Featured</span>
      </Badge>
      <CardImage
        src="https://i.pinimg.com/736x/f4/2f/ff/f42ffff6cd3d7fa6ad0dbd430b16bb3e.jpg"
        alt="Card Badge"
      />
      <CardContent>
        <CardTitle>Card with Badge</CardTitle>
        <CardDesc>
          Card dengan badge featured yang menarik di bagian atas untuk menonjolkan konten spesial.
        </CardDesc>
      </CardContent>
    </CardContainer>
  );
}
