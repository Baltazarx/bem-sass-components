import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects } from "../../styles/tokens/themes";

const Footer = styled.footer`
  width: 100%;
  color: ${textColors.light};
  text-align: center;
  padding: ${spacing.xl} ${spacing.md};
  font-family: ${typography.fontFamily};
  border-radius: ${borderRadius.sm};
  background: linear-gradient(135deg, ${colors.dark}, ${colors.primary});
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.xl};
  box-shadow: ${shadows.sm} rgba(194, 24, 91, 0.3);

  @media (max-width: 768px) {
    padding: ${spacing.xl} ${spacing.lg};
    border-radius: ${borderRadius.md};
    gap: ${spacing.xl};
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: ${spacing.lg} ${spacing.md};
    border-radius: ${borderRadius.sm};
    gap: ${spacing.lg};
  }
`;

const FooterIcon = styled.div`
  font-size: ${typography.fontSize["2xl"]};
  color: ${textColors.light};
  cursor: pointer;
  transition: ${effects.transitionBase};

  &:hover {
    transform: scale(1.3) translateY(-3px);
    color: ${colors.light};
  }

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.xl};
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.lg};
    min-width: 48px;
    min-height: 48px;
  }
`;

export default function FooterSocial() {
  return (
    <Footer>
      <FooterIcon as={FaFacebook} />
      <FooterIcon as={FaInstagram} />
      <FooterIcon as={FaTwitter} />
    </Footer>
  );
}
