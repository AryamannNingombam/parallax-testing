import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/pages/parallax.module.css";

export default function ParallaxTestingPage() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center", zIndex: 5 }}
        >
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          style={{ ...alignCenter, justifyContent: "center", zIndex: 4 }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          sticky={{ start: 1, end: 2 }}
          style={{ ...alignCenter, justifyContent: "center", zIndex: 3 }}
        >
          <div className={`${styles.card}  ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.card}  ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
