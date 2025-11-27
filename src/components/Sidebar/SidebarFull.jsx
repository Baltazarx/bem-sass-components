import React from "react";
import styled from "styled-components";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects, iconSize } from "../../styles/tokens/themes";

const Sidebar = styled.aside`
  padding: ${spacing.xl} ${spacing.md};
  color: ${textColors.light};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  font-family: ${typography.fontFamily};
  border-radius: ${borderRadius.sm};
  min-height: 300px;
  background: linear-gradient(135deg, ${colors.dark}, ${colors.primary});
  width: 220px;
  box-shadow: ${shadows.sm} rgba(194, 24, 91, 0.3);

  @media (max-width: 768px) {
    padding: ${spacing.lg} ${spacing.md};
    min-height: auto;
    border-radius: ${borderRadius.md};
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: ${spacing.md} ${spacing.sm};
    gap: ${spacing.md};
    border-radius: ${borderRadius.sm};
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.sm};
  transition: ${effects.transitionBase};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: ${spacing.sm} ${spacing.md};
    min-height: 48px;
    gap: ${spacing.sm};
  }

  @media (max-width: 480px) {
    padding: ${spacing.sm};
    gap: ${spacing.sm};
    min-height: 44px;
  }
`;

const SidebarIcon = styled.div`
  font-size: ${iconSize.lg};
  color: ${textColors.light};

  @media (max-width: 768px) {
    font-size: ${iconSize.lg};
  }

  @media (max-width: 480px) {
    font-size: ${iconSize.md};
  }
`;

const SidebarLabel = styled.span`
  font-size: ${typography.fontSize.base};
  color: ${textColors.light};
  font-weight: ${typography.fontWeight.medium};

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.md};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.sm};
  }
`;

export default function SidebarFull() {
  return (
    <Sidebar>
      <SidebarItem>
        <SidebarIcon as={FaHome} />
        <SidebarLabel>Home</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon as={FaInfoCircle} />
        <SidebarLabel>About</SidebarLabel>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon as={FaEnvelope} />
        <SidebarLabel>Contact</SidebarLabel>
      </SidebarItem>
    </Sidebar>
  );
}
