import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
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
  background: linear-gradient(135deg, ${colors.light} 0%, rgba(255, 238, 240, 0.95) 100%);
  border: none;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg} rgba(244, 143, 177, 0.15),
              0 3px 10px rgba(244, 143, 177, 0.1);
  backdrop-filter: ${effects.backdropBlur};

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

const ActionButton = styled.button`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  background: linear-gradient(135deg, ${colors.primary} 0%, rgba(229, 115, 115, 0.95) 100%);
  color: ${textColors.light};
  border: none;
  padding: ${spacing.sm} ${spacing.xl};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${effects.transitionBase};
  box-shadow: ${shadows.md} rgba(229, 115, 115, 0.25),
              0 2px 6px rgba(229, 115, 115, 0.15);
  font-family: ${typography.fontFamily};
  width: fit-content;

  &:hover {
    background: linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 115, 115, 0.35),
                0 3px 10px rgba(229, 115, 115, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function CardAction() {
  return (
    <CardContainer>
      <CardImage
        src="https://i.pinimg.com/1200x/3b/6f/23/3b6f236d7322731a15e407c534ebd82a.jpg"
        alt="Card Action"
      />
      <CardContent>
        <CardTitle>Card with Action</CardTitle>
        <CardDesc>
          Card dengan tombol action yang elegan untuk interaksi pengguna yang lebih baik.
        </CardDesc>
        <ActionButton>
          Learn More
          <FaArrowRight />
        </ActionButton>
      </CardContent>
    </CardContainer>
  );
}
