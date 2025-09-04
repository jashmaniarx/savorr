import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  variant?: 'default' | 'highlight' | 'feature';
  interactive?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  size = 'medium',
  variant = 'default',
  interactive = true
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2',
    wide: 'col-span-1 md:col-span-3 lg:col-span-4 row-span-1',
    tall: 'col-span-1 md:col-span-2 row-span-2'
  };

  const variantClasses = {
    default: 'bg-gradient-card border-card-border',
    highlight: 'bg-gradient-primary border-neon-purple shadow-neon',
    feature: 'bg-surface border-glass-border shadow-hover'
  };

  return (
    <div
      className={cn(
        // Base styles
        'relative rounded-lg border backdrop-blur-sm',
        'p-6 flex flex-col',
        'transition-all duration-300 ease-out',
        
        // Size classes
        sizeClasses[size],
        
        // Variant classes
        variantClasses[variant],
        
        // Interactive effects
        interactive && [
          'cursor-pointer group',
          'hover:scale-[1.02] hover:-translate-y-2',
          'hover:shadow-hover hover:border-neon-purple-dim',
          'active:scale-[0.98]'
        ],
        
        // Animation
        'animate-fade-in',
        
        className
      )}
    >
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 rounded-lg bg-glass-bg/20 backdrop-blur-sm -z-10" />
      
      {/* Hover glow effect */}
      {interactive && (
        <div className="absolute inset-0 rounded-lg bg-gradient-primary/0 group-hover:bg-gradient-primary/10 transition-all duration-300 -z-10" />
      )}
      
      {children}
    </div>
  );
};

export default BentoCard;