import styles from './skeleton.module.css';

interface Props {
  h?: number;
  variant?: 'default' | 'rounded' | 'circle';
  animation?: 'pulse' | 'wave' | 'shimmer';
  className?: string;
}

const animationStyles = {
  pulse: styles.animatePulse,
  wave: styles.animateWave,
  shimmer: styles.animateShimmer,
};

export const LineSkeleton = (props: Props) => {
  const { h = 1, variant = 'default', animation = 'wave', className = '' } = props;

  const variantStyles = {
    default: 'rounded',
    rounded: 'rounded-lg',
    circle: 'rounded-full',
  };

  return (
    <div
      className={`w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      style={{ height: `${h}rem` }}
    />
  );
};
