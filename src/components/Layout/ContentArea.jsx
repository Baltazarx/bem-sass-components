import React, { useState } from "react";
import ButtonBasic from "@/components/Button/ButtonBasic";
import ButtonGradient from "@/components/Button/ButtonGradient";
import ButtonIcon from "@/components/Button/ButtonIcon";
import CardBadge from "@/components/Card/CardBadge";
import CardAction from "@/components/Card/CardAction";
import CardGradient from "@/components/Card/CardGradient";
import CardVariant from "@/components/Card/CardVariant";
import HeaderSimple from "@/components/Header/HeaderSimple";
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderNav from "@/components/Header/HeaderNav";
import FooterSimple from "@/components/Footer/FooterSimple";
import FooterSocial from "@/components/Footer/FooterSocial";
import FooterGrid from "@/components/Footer/FooterGrid";
import SidebarMinimal from "@/components/Sidebar/SidebarMinimal";
import SidebarFull from "@/components/Sidebar/SidebarFull";
import SidebarIcons from "@/components/Sidebar/SidebarIcons";
import CodePreview from "./CodePreview";
import styles from "./Layout.module.scss";

export default function ContentArea({ activeSection }) {
  const [clickedComponent, setClickedComponent] = useState(null);

  const ComponentWrapper = ({ component, codeFile }) => {
    const isClicked = clickedComponent === codeFile;
    
    return (
      <div className={styles.componentWrapper}>
        <div 
          className={`${styles.componentContainer} ${isClicked ? styles.componentContainerActive : ''}`}
          onClick={() => setClickedComponent(isClicked ? null : codeFile)}
        >
          {component}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.area}>
      <h2 className={styles.area__title}>Tampilkan Variant Component disini</h2>
      <div className={`${styles.area__items} ${activeSection === "header" || activeSection === "footer" ? styles["area__items--vertical"] : ""}`}>
        {activeSection === "button" && (
          <>
            <ComponentWrapper 
              component={<ButtonBasic label="Submit" />} 
              codeFile="ButtonBasic.jsx"
            />
            <ComponentWrapper 
              component={<ButtonIcon label="Search" />} 
              codeFile="ButtonIcon.jsx"
            />
            <ComponentWrapper 
              component={<ButtonGradient label="Explore" />} 
              codeFile="ButtonGradient.jsx"
            />
          </>
        )}

        {activeSection === "card" && (
          <>
            <ComponentWrapper 
              component={<CardBadge />} 
              codeFile="CardBadge.jsx"
            />
            <ComponentWrapper 
              component={<CardAction />} 
              codeFile="CardAction.jsx"
            />
            <ComponentWrapper 
              component={<CardGradient />} 
              codeFile="CardGradient.jsx"
            />
            <ComponentWrapper 
              component={
                <CardVariant 
                  variant="gradient"
                  image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  title="Gradient Card"
                  text="This is a beautiful gradient card with animation effects and modern design."
                  buttonText="Learn More"
                  onButtonClick={() => alert('Gradient card clicked!')}
                />
              } 
              codeFile="CardVariant.jsx"
            />
            <ComponentWrapper 
              component={
                <CardVariant 
                  variant="outline"
                  image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  title="Outline Card"
                  text="This card features a clean outline design with subtle hover effects."
                  buttonText="View Details"
                />
              } 
              codeFile="CardVariant.jsx"
            />
            <ComponentWrapper 
              component={
                <CardVariant 
                  variant="animated"
                  image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  title="Animated Card"
                  text="Experience the mesmerizing animated gradient background effect."
                  buttonText="Explore"
                />
              } 
              codeFile="CardVariant.jsx"
            />
          </>
        )}

        {activeSection === "header" && (
          <>
            <ComponentWrapper 
              component={<HeaderSimple />} 
              codeFile="HeaderSimple.jsx"
            />
            <ComponentWrapper 
              component={<HeaderLogo />} 
              codeFile="HeaderLogo.jsx"
            />
            <ComponentWrapper 
              component={<HeaderNav />} 
              codeFile="HeaderNav.jsx"
            />
          </>
        )}

        {activeSection === "footer" && (
          <>
            <ComponentWrapper 
              component={<FooterSimple />} 
              codeFile="FooterSimple.jsx"
            />
            <ComponentWrapper 
              component={<FooterSocial />} 
              codeFile="FooterSocial.jsx"
            />
            <ComponentWrapper 
              component={<FooterGrid />} 
              codeFile="FooterGrid.jsx"
            />
          </>
        )}

        {activeSection === "sidebar" && (
          <>
            <ComponentWrapper 
              component={<SidebarMinimal />} 
              codeFile="SidebarMinimal.jsx"
            />
            <ComponentWrapper 
              component={<SidebarFull />} 
              codeFile="SidebarFull.jsx"
            />
            <ComponentWrapper 
              component={<SidebarIcons />} 
              codeFile="SidebarIcons.jsx"
            />
          </>
        )}
      </div>
      {clickedComponent && (
        <div className={styles.codeContainer}>
          <CodePreview file={clickedComponent} />
        </div>
      )}
    </div>
  );
}
