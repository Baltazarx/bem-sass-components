import React, { useEffect, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import styles from "./Layout.module.scss";
import { getStandaloneCode } from "@/utils/generateStandaloneHTML";

export default function CodePreview({ file }) {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState("standalone"); // 'standalone' or 'react'

  useEffect(() => {
    // Cek apakah ada standalone code untuk file ini
    const standalone = getStandaloneCode(file);
    
    if (standalone && viewMode === "standalone") {
      setCode(standalone.codeSnippet);
    } else {
      // Fallback ke React code
      fetch(`/components/${file}`)
        .then((res) => res.text())
        .then(setCode)
        .catch(() => setCode("// Kode tidak ditemukan."));
    }
  }, [file, viewMode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const standalone = getStandaloneCode(file);
  const hasStandalone = !!standalone;

  return (
    <div className={styles.codePreviewWrapper}>
      <div className={styles.codePreviewHeader}>
        {hasStandalone && (
          <div className={styles.viewModeToggle}>
            <button
              className={`${styles.viewModeBtn} ${viewMode === "standalone" ? styles.active : ""}`}
              onClick={() => setViewMode("standalone")}
            >
              HTML/CSS
            </button>
            <button
              className={`${styles.viewModeBtn} ${viewMode === "react" ? styles.active : ""}`}
              onClick={() => setViewMode("react")}
            >
              React
            </button>
          </div>
        )}
        <button className={styles.copyButton} onClick={handleCopy} title="Copy code">
          {copied ? (
            <>
              <FaCheck className={styles.copyIcon} />
              <span className={styles.copyText}>Copied!</span>
            </>
          ) : (
            <>
              <FaCopy className={styles.copyIcon} />
              <span className={styles.copyText}>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className={styles.codePreview}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
