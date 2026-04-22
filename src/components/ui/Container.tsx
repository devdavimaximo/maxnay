import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1440px]',
  full: 'max-w-full'
};

const Container = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  size = 'lg'
}: ContainerProps) => {
  const sizeClass = sizes[size] || sizes.lg;
  
  return (
    <Component className={`${sizeClass} mx-auto px-6 sm:px-8 lg:px-12 w-full ${className}`}>
      {children}
    </Component>
  );
};

export default Container;

