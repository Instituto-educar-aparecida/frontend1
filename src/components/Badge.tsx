import React from 'react';

interface BadgeProps {
   children: React.ReactNode;
   variant?: 'success' | 'warning' | 'error' | 'primary' ;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const styles = {
    primary: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    error:   'bg-red-500/10 text-red-400 border-red-500/20',

  };
  
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${styles[variant]}`}>
      {children}
    </span>
  );
};
