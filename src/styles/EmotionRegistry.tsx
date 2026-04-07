'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'bb' });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = (cache as any).inserted;
    if (!entries || Object.keys(entries).length === 0) return null;

    const names: string[] = [];
    const styles: string[] = [];

    for (const [name, style] of Object.entries(entries)) {
      names.push(name);
      styles.push(style as string);
    }

    // Clear inserted after flushing
    for (const name of names) {
      delete entries[name];
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles.join('') }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
