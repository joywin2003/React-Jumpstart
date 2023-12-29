import React from "react";
import styles from "./FilterButton.module.css";
import { useState } from "react";

export default function FilterButton({title, onFormSubmit}) {
    const [expanded, setExpanded] = useState(false);
      
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

  return (
    <div className={styles.expandable_div}>
    <form onSubmit={onFormSubmit}>
      <div className={styles.title} onClick={toggleExpand}>
        {title}
        <span className={styles.arrow}>{expanded ? "▼" : "►"}</span>
      </div>
      {expanded && (
        <div className={styles.content}>
          <div className={styles.input_container}>
            <input type="text" id="textInput" name={`textInput-${title}`} placeholder="Work Address"/>
          </div>
          <div className={styles.checkbox_label}>
            <span>Public Tranportation</span>
            <input type="checkbox" id="item1" name={`item1-${title}`}/>
          </div>
          <div className={styles.checkbox_label}>
          <span>Cycling</span>
            <input type="checkbox" id="item2" name={`item2-${title}`}/>
          </div>
          <div className={styles.checkbox_label}>
          <span>Driving</span>
            <input type="checkbox" id="item3" name={`item3-${title}`}/>
          </div>
          <button className={styles.button}>Apply</button>
        </div>

      )}
      </form>
    </div>
  );
}
