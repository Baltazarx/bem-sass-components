import React, { useEffect, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import styles from "./Layout.module.scss";

export default function CodePreview({ file }) {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/components/${file}`)
      .then((res) => res.text())
      .then(setCode)
      .catch(() => setCode("// Kode tidak ditemukan."));
  }, [file]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={styles.codePreviewWrapper}>
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
      <pre className={styles.codePreview}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
