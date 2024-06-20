// FooterTwo.tsx

import React from 'react';
import styles from './FooterTwo.module.css';
import { GlobeAltIcon, HeartIcon, MoonIcon, ShareIcon,  } from '@heroicons/react/24/solid';
import { MusicNote } from '@mui/icons-material';

const FooterTwo: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className="icons">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className={styles.iconLink}>
              <span className="sr-only">Twitter</span>
              <HeartIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#" className={styles.iconLink}>
              <span className="sr-only">Facebook</span>
              <MoonIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#" className={styles.iconLink}>
              <span className="sr-only">Instagram</span>
              <MusicNote className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#" className={styles.iconLink}>
              <span className="sr-only">Mail</span>
              <ShareIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#" className={styles.iconLink}>
              <span className="sr-only">Website</span>
              <GlobeAltIcon className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.copyright}>
        <li>&copy; Untitled</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>
  );
}

export default FooterTwo;
