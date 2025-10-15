import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'hr', 'es'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/pathnames': {
            es: '/pfadnamen'
        }
    }
});
