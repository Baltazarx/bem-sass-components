import React from "react";
import styled from "styled-components";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
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
  background-color: ${colors.primary};
  width: 80px;
  align-items: center;
  box-shadow: ${shadows.sm} rgba(229, 115, 115, 0.3);

  @media (max-width: 768px) {
    padding: ${spacing.md};
    min-height: auto;
    border-radius: ${borderRadius.md};
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: ${spacing.xs};
  }

  @media (max-width: 480px) {
    padding: ${spacing.sm} ${spacing.xs};
    gap: ${spacing.xs};
    border-radius: ${borderRadius.sm};
  }
`;

const SidebarIcon = styled.div`
  font-size: ${iconSize.xl};
  cursor: pointer;
  color: ${textColors.light};
  transition: ${effects.transitionBase};
  padding: ${spacing.xs};

  &:hover {
    transform: scale(1.2);
    color: ${colors.light};
  }

  @media (max-width: 768px) {
    font-size: ${iconSize.lg};
    padding: ${spacing.sm};
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadius.sm};
  }

  @media (max-width: 480px) {
    font-size: ${iconSize.lg};
    padding: ${spacing.xs};
    min-width: 44px;
    min-height: 44px;
  }
`;

export default function SidebarMinimal() {
  return (
    <Sidebar>
      <SidebarIcon as={FaHome} />
      <SidebarIcon as={FaUser} />
      <SidebarIcon as={FaCog} />
    </Sidebar>
  );
}
