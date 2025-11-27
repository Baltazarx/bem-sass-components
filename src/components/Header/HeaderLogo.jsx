import React from "react";
import styled from "styled-components";
import { FaRocket } from "react-icons/fa";
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
  background: linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 100%);
  box-shadow: ${shadows.md} rgba(194, 24, 91, 0.3);

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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    gap: ${spacing.sm};
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 480px) {
    gap: ${spacing.xs};
    width: 100%;
  }
`;

const LogoImage = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: ${borderRadius.full};
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: ${shadows.sm} rgba(0, 0, 0, 0.2);
    transition: ${effects.transitionBase};
    object-fit: cover;
  }

  &:hover img {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    img {
      width: 42px;
      height: 42px;
      flex-shrink: 0;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 38px;
      height: 38px;
    }
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};

  @media (max-width: 768px) {
    gap: ${spacing.xs};
    min-width: 0;
    flex: 1;
  }

  @media (max-width: 480px) {
    gap: ${spacing.xs};
    flex: 1;
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

const Subtitle = styled.span`
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.normal};
  opacity: 0.85;
  letter-spacing: ${typography.letterSpacing.wide};
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.xs};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.xs};
  }
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  padding: ${spacing.xs} ${spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.lg};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.md};
  backdrop-filter: ${effects.backdropBlur};
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: ${effects.transitionBase};
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);

    svg {
      transform: translateX(2px);
    }
  }

  @media (max-width: 768px) {
    padding: ${spacing.xs} ${spacing.md};
    font-size: ${typography.fontSize.sm};
    min-height: 36px;
  }

  @media (max-width: 480px) {
    padding: ${spacing.xs} ${spacing.sm};
    font-size: ${typography.fontSize.sm};
    min-height: 36px;
    width: 100%;
    justify-content: center;
  }
`;

const ActionIcon = styled(FaRocket)`
  font-size: ${iconSize.md};
  transition: transform 0.3s ease;
`;

export default function HeaderLogo() {
  return (
    <Header>
      <LogoContainer>
        <LogoImage>
          <img
            src="https://i.pinimg.com/736x/12/01/d8/1201d8e5f751881466574e87a7b55f93.jpg"
            alt="Logo"
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%23c49a6c' width='48' height='48' rx='24'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3EL%3C/text%3E%3C/svg%3E`;
            }}
          />
        </LogoImage>
        <LogoText>
          <HeaderTitle>Header Logo</HeaderTitle>
          <Subtitle>Design System</Subtitle>
        </LogoText>
      </LogoContainer>
      <HeaderAction>
        <ActionIcon />
        <span>Hello World</span>
      </HeaderAction>
    </Header>
  );
}
