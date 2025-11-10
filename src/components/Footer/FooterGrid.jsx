import React from "react";
import styled from "styled-components";
import { colors, textColors, borderRadius, typography, spacing, shadows, effects } from "../../styles/tokens/themes";

const Footer = styled.footer`
  width: 100%;
  color: ${textColors.light};
  text-align: center;
  padding: ${spacing["2xl"]};
  font-family: ${typography.fontFamily};
  border-radius: ${borderRadius.sm};
  background-color: ${colors.accent};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing["2xl"]};
  text-align: left;
  box-shadow: ${shadows.sm} rgba(244, 143, 177, 0.3);

  @media (max-width: 768px) {
    padding: ${spacing["2xl"]} ${spacing.xl};
    border-radius: ${borderRadius.md};
    grid-template-columns: 1fr;
    gap: ${spacing["2xl"]};
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: ${spacing.xl} ${spacing.md};
    border-radius: ${borderRadius.sm};
    gap: ${spacing.xl};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  font-size: ${typography.fontSize.md};

  h4 {
    font-weight: ${typography.fontWeight.semibold};
    margin-bottom: ${spacing.xs};
    color: ${textColors.light};
    font-size: ${typography.fontSize.base};
  }

  a {
    color: ${colors.light};
    text-decoration: none;
    transition: ${effects.transitionBase};
    padding: ${spacing.xs} 0;

    &:hover {
      color: ${textColors.light};
      padding-left: ${spacing.xs};
    }
  }

  @media (max-width: 768px) {
    gap: ${spacing.sm};

    h4 {
      font-size: ${typography.fontSize.lg};
      margin-bottom: ${spacing.sm};
    }

    a {
      padding: ${spacing.sm} 0;
      font-size: ${typography.fontSize.md};
    }
  }

  @media (max-width: 480px) {
    gap: ${spacing.xs};

    h4 {
      font-size: ${typography.fontSize.base};
      margin-bottom: ${spacing.xs};
    }

    a {
      padding: ${spacing.sm} 0;
      font-size: ${typography.fontSize.sm};
    }
  }
`;

export default function FooterGrid() {
  return (
    <Footer>
      <FooterSection>
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
      </FooterSection>
      <FooterSection>
        <h4>Support</h4>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
        <a href="#">Help Center</a>
      </FooterSection>
      <FooterSection>
        <h4>Legal</h4>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
      </FooterSection>
    </Footer>
  );
}
