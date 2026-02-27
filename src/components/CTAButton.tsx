import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

interface CTAButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href = '/contact',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-500 to-primary-700 text-dark-900 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02]',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10',
    outline:
      'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const cls = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (onClick) {
    return (
      <button className={cls} onClick={onClick}>
        {children}
        <ChevronRight size={16} />
      </button>
    );
  }

  return (
    <Link href={href}>
      <a className={cls}>
        {children}
        <ChevronRight size={16} />
      </a>
    </Link>
  );
}