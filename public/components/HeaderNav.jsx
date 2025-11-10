import React from "react";
import styled from "styled-components";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
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
  background: linear-gradient(135deg, ${colors.accent} 0%, rgba(244, 143, 177, 0.95) 100%);
  box-shadow: ${shadows.md} rgba(244, 143, 177, 0.25);

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

const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};

  @media (max-width: 768px) {
    gap: ${spacing.xs};
    flex-wrap: wrap;
    width: 100%;
    margin-top: ${spacing.xs};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${spacing.xs};
    width: 100%;
    margin-top: ${spacing.sm};
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  color: ${textColors.light};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.md};
  padding: ${spacing.xs} ${spacing.lg};
  border-radius: ${borderRadius.sm};
  transition: ${effects.transitionBase};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: ${spacing.xs} ${spacing.md};
    font-size: ${typography.fontSize.sm};
    gap: ${spacing.xs};
    min-height: 40px;
    flex: 1;
    min-width: 120px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: ${spacing.sm} ${spacing.md};
    font-size: ${typography.fontSize.sm};
    min-height: 44px;
    width: 100%;
    justify-content: center;
  }
`;

const NavIcon = styled.div`
  font-size: ${iconSize.sm};
`;

export default function HeaderNav() {
  return (
    <Header>
      <HeaderBrand>
        <HeaderTitle>Header Navigation</HeaderTitle>
      </HeaderBrand>
      <Nav>
        <NavItem href="#">
          <NavIcon as={FaHome} />
          <span>Home</span>
        </NavItem>
        <NavItem href="#">
          <NavIcon as={FaInfoCircle} />
          <span>About</span>
        </NavItem>
        <NavItem href="#">
          <NavIcon as={FaEnvelope} />
          <span>Contact</span>
        </NavItem>
      </Nav>
    </Header>
  );
}
