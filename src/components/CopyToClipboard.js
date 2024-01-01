/**
 * CopyToClipboard is a React component that provides a clickable icon for copying text to the clipboard.
 *
 * Props:
 * - text: The text to be copied to the clipboard when the icon is clicked.
 *
 * State:
 * - copySuccess: A string that holds a success message if the text is successfully copied, or an error message if the copy fails.
 * - timeoutId: The ID of the timeout that clears the success message after a certain period of time.
 *
 * The component uses the useEffect hook to clear the timeout when the component unmounts, preventing a potential memory leak.
 *
 * The handleCopy function is called when the icon is clicked. It tries to copy the text to the clipboard, sets the success message, and starts a timeout to clear the message. If the copy fails, it sets an error message.
 *
 * The component returns a div that contains the copy icon and, if there is a success or error message, a span that displays the message.
 */
import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import "./CopyToClipboard.css";

function CopyToClipboard({ text }) {
  const [copySuccess, setCopySuccess] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleCopy = async () => {
    try {
      const code = text.replace(/^```[\s\S]*?\n|```$/g, "");
      await navigator.clipboard.writeText(code);
      setCopySuccess("Copied!");
      const id = setTimeout(() => setCopySuccess(""), 2000); // hide after 2 seconds
      setTimeoutId(id);
    } catch (err) {
      setCopySuccess("Failed to copy text");
    }
  };

  return (
    <div
      className={`copy-icon ${copySuccess ? "clicked" : ""}`}
      onClick={handleCopy}
    >
      <FaCopy />
      {copySuccess && <span>{copySuccess}</span>}
    </div>
  );
}

export default CopyToClipboard;
