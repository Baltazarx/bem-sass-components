import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects, iconSize } from "../../styles/tokens/themes";

const Header = styled.header`
  width: 100%;
  padding: ${spacing.xl} ${spacing["3xl"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${typography.fontFamily};
  color: ${textColors.light};
  border-radius: ${borderRadius.lg};
  position: relative;
  transition: ${effects.transitionBase};
  box-sizing: border-box;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  box-shadow: ${shadows.md} rgba(229, 115, 115, 0.25);

  @media (max-width: 768px) {
    padding: ${spacing.lg} ${spacing.xl};
    border-radius: ${borderRadius.md};
    flex-wrap: wrap;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: ${spacing.md} ${spacing.lg};
    border-radius: ${borderRadius.sm};
    max-width: 100%;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  @media (max-width: 768px) {
    gap: ${spacing.md};
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: ${spacing.sm};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderTitle = styled.h1`
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
  margin: 0;
  letter-spacing: ${typography.letterSpacing.tight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.xl};
    line-height: ${typography.lineHeight.tight};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.lg};
  }
`;

const HeaderBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  padding: ${spacing.xs} ${spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  backdrop-filter: ${effects.backdropBlur};
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: ${effects.transitionBase};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: ${spacing.xs} ${spacing.md};
    font-size: ${typography.fontSize.sm};
    min-height: 36px;
  }

  @media (max-width: 480px) {
    padding: ${spacing.xs} ${spacing.sm};
    font-size: ${typography.fontSize.xs};
    min-height: 34px;
  }
`;

const BadgeIcon = styled(FaStar)`
  font-size: ${iconSize.xs};
`;

export default function HeaderSimple() {
  return (
    <Header>
      <HeaderContent>
        <HeaderTitle>Header Simple</HeaderTitle>
        <HeaderBadge>
          <BadgeIcon />
          <span>Welcome!</span>
        </HeaderBadge>
      </HeaderContent>
    </Header>
  );
}
