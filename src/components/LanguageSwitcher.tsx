'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="mx-2 align-top group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <option value="en">English</option>
      <option value="hr">Hrvatski</option>
      <option value="es">Español</option>
    </select>
  );
}
