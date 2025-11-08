import React, { useState } from "react";
import ButtonBasic from "@/components/Button/ButtonBasic";
import ButtonGradient from "@/components/Button/ButtonGradient";
import ButtonIcon from "@/components/Button/ButtonIcon";
import CardPrimary from "@/components/Card/CardPrimary";
import CardOutline from "@/components/Card/CardOutline";
import CardShadow from "@/components/Card/CardShadow";
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
      <div className={styles.area__items}>
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
              component={<CardPrimary />} 
              codeFile="CardPrimary.jsx"
            />
            <ComponentWrapper 
              component={<CardOutline />} 
              codeFile="CardOutline.jsx"
            />
            <ComponentWrapper 
              component={<CardShadow />} 
              codeFile="CardShadow.jsx"
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
