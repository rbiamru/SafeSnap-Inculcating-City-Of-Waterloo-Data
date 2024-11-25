import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, className, variant, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none';
  const variantClasses = {
    'outline-primary': 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    'primary': 'bg-blue-500 text-white hover:bg-blue-600',
  };

  return (
    <button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['outline-primary', 'primary']),
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
};

export default Button;
