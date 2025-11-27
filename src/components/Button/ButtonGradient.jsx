import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
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
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 50%, rgba(244, 143, 177, 0.95) 100%);
  color: ${textColors.light};
  padding: ${buttons.padding.lg};
  border-radius: ${borderRadius.xl};
  letter-spacing: ${typography.letterSpacing.wide};
  font-size: 15px;
  box-shadow: 0 6px 20px rgba(229, 115, 115, 0.3),
              0 3px 8px rgba(244, 143, 177, 0.2);
  backdrop-filter: ${effects.backdropBlur};
  position: relative;
  overflow: hidden;
  min-width: ${buttons.minWidth};
  min-height: ${buttons.minHeight};
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: ${effects.transitionSlow};
  }

  &:hover {
    background: linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 50%, ${colors.accent} 100%);
    box-shadow: 0 10px 30px rgba(229, 115, 115, 0.4),
                0 5px 12px rgba(244, 143, 177, 0.25);
    transform: translateY(-3px);

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(229, 115, 115, 0.3);
  }

  @media (max-width: 768px) {
    padding: ${buttons.padding.md};
    font-size: 15px;
    min-height: ${buttons.minHeight};
    min-width: 160px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: ${buttons.padding.sm};
    font-size: 15px;
    min-height: ${buttons.minHeight};
    min-width: 140px;
    border-radius: ${borderRadius.xl};
    gap: 10px;
  }
`;

const Icon = styled(FaArrowRight)`
  font-size: 15px;
  transition: transform 0.3s ease;
`;

export default function ButtonGradient({ label = "Explore", onClick }) {
  return (
    <Button onClick={onClick}>
      <span>{label}</span>
      <Icon />
    </Button>
  );
}
