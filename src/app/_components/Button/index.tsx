import classNames from 'classnames';
import { ReactNode } from 'react';

interface ButtenProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}: ButtenProps) => {
  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-500 bg-gray-500 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-500 bg-yellow-500 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-500': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    },
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
