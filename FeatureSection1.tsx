import React, { useState } from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const tsxCode = `
import React from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Stay on top of customer support</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>📧</div>
            <h2>Unlimited inboxes</h2>
            <p>Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <h2>Manage team members</h2>
            <p>Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🗑</div>
            <h2>Spam report</h2>
            <p>Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.</p>
            <a href="/">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection1;
  `;

  const cssCode = `
.featureSectionContainer {
  background-color: #1e293b;
  color: #fff;
  padding: 50px 20px;
  border-radius: 8px;
}

.textContainer {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #334155;
  padding: 20px;
  border-radius: 8px;
  flex: 1 1 calc(33.333% - 20px);
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

a {
  color: #38bdf8;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
  `;

  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Stay on top of customer support</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>📧</div>
            <h2>Unlimited inboxes</h2>
            <p>Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequuntur dolores incidunt.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <h2>Manage team members</h2>
            <p>Vero eum voluptatem aliquid nostrum voluptates. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🗑</div>
            <h2>Spam report</h2>
            <p>Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.</p>
            <a href="/">Learn more →</a>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🗑</div>
            <h2>Spam report</h2>
            <p>Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.</p>
            <a href="/">Learn more →</a>
          </div>
        </div>
      </div>
      <div className={styles.codeToggle}>
        <button
          className={`${styles.toggleButton} ${showTSX ? styles.active : ''}`}
          onClick={handleToggle}
        >
          TSX
        </button>
        <button
          className={`${styles.toggleButton} ${!showTSX ? styles.active : ''}`}
          onClick={handleToggle}
        >
          CSS
        </button>
      </div>
      <div className={styles.codeSection}>
        <pre>{showTSX ? tsxCode : cssCode}</pre>
        <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(showTSX ? tsxCode : cssCode)}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default FeatureSection1;
