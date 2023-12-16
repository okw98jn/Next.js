import React, { FC, memo } from 'react';
import styles from '../styles/loading.module.css'
import FadeLoader from "react-spinners/FadeLoader";
const Loading: FC = memo(() => (
    <div className={styles.loading}>
        <FadeLoader />
    </div>
));

Loading.displayName = 'Loading'
export default Loading;