import React from "react";
import styled from "styled-components";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects } from "../../styles/tokens/themes";

const Footer = styled.footer`
  width: 100%;
  color: ${textColors.light};
  text-align: center;
  padding: ${spacing.xl} ${spacing.md};
  font-family: ${typography.fontFamily};
  border-radius: ${borderRadius.sm};
  background-color: ${colors.primary};
  box-shadow: ${shadows.sm} rgba(229, 115, 115, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${spacing.xl} ${spacing.lg};
    border-radius: ${borderRadius.md};
  }

  @media (max-width: 480px) {
    padding: ${spacing.lg} ${spacing.md};
    border-radius: ${borderRadius.sm};
  }
`;

const FooterText = styled.p`
  font-size: ${typography.fontSize.base};
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.md};
    line-height: ${typography.lineHeight.normal};
  }

  @media (max-width: 480px) {
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.normal};
  }
`;

export default function FooterSimple() {
  return (
    <Footer>
      <FooterText>
        © 2025 Madebypasya. All Rights Reserved.
      </FooterText>
    </Footer>
  );
}
