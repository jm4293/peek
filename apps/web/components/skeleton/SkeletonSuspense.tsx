import { Card } from '../card';
import styles from './skeleton.module.css';

const skelton = (
  <div
    className={`w-full h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded ${styles.animateWave}`}
  />
);

export const SkeletonSuspense = () => {
  return (
    <>
      <Card.SECTION>{skelton}</Card.SECTION>

      <Card.SECTION>
        {skelton} {skelton}
      </Card.SECTION>
    </>
  );
};
