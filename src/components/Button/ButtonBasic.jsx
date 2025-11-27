import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects, buttons, iconSize } from "../../styles/tokens/themes";

const Button = styled.button`
  font-family: ${typography.fontFamily};
  border: none;
  cursor: pointer;
  font-weight: ${typography.fontWeight.semibold};
  transition: ${effects.transitionBase};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, ${colors.primary} 0%, rgba(229, 115, 115, 0.95) 100%);
  color: ${textColors.light};
  padding: ${buttons.padding.lg};
  border-radius: ${borderRadius.md};
  font-size: 15px;
  box-shadow: ${shadows.md} rgba(229, 115, 115, 0.25),
              0 2px 6px rgba(229, 115, 115, 0.15);
  backdrop-filter: ${effects.backdropBlur};
  min-width: ${buttons.minWidth};
  min-height: ${buttons.minHeight};
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 100%);
    transform: translateY(-3px);
    box-shadow: ${shadows.lg} rgba(229, 115, 115, 0.35),
                0 4px 10px rgba(229, 115, 115, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${shadows.md} rgba(229, 115, 115, 0.25);
  }

  @media (max-width: 768px) {
    padding: ${buttons.padding.md};
    font-size: 15px;
    min-height: ${buttons.minHeight};
    min-width: 160px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: ${buttons.padding.sm};
    font-size: 15px;
    min-height: ${buttons.minHeight};
    min-width: 140px;
    border-radius: ${borderRadius.md};
  }
`;

const Icon = styled(FaCheck)`
  font-size: 15px;
`;

export default function ButtonBasic({ label = "Submit", onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon />
      <span>{label}</span>
    </Button>
  );
}
