import {type Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

import {Providers} from '@/app/providers';
import {Layout} from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
    title: {
        template: '%s - Powerella Pilgrim',
        default: 'Powerella Pilgrim: Your Journey to Strength, Humility, and Faith',
    },
    description:
        'Inspired by the spirit of Poverello, Powerella Pilgrim empowers women to discover their inherent strength through humble faith and meaningful spiritual journeys.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
};

function PageLayout({
    children,
    locale,
    messages,
}: {
    children: React.ReactNode;
    locale: string;
    messages: any;
}) {
    return (
        <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
                <div className="flex w-full">
                    <Layout>{children}</Layout>
                </div>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export default async function RootLayout({
                                       children,
                                       params: paramsPromise,
                                   }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const params = await paramsPromise;
    const messages = await import(`../../../messages/${params.locale}.json`);

    return (
        <PageLayout locale={params.locale} messages={messages.default}>
            {children}
        </PageLayout>
    );
}
