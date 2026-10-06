import { useState } from 'react';

/**
 * Image that sits on a neutral surface until it loads, and stays neutral
 * (instead of showing a broken-image icon) if the file fails to load.
 */
export default function SmartImage({ alt, className = '', loading = 'lazy', ...props }) {
  const [state, setState] = useState('loading'); // 'loading' | 'ready' | 'error'

  if (state === 'error') {
    return <div role="img" aria-label={alt} className={`bg-surface ${className}`} />;
  }

  return (
    <img
      alt={alt}
      loading={loading}
      onLoad={() => setState('ready')}
      onError={() => setState('error')}
      className={`transition-opacity duration-500 ${state === 'ready' ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    />
  );
}
