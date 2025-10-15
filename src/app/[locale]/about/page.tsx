import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'My Mission',
  description:
    'Welcome to Powerella Pilgrim, a heartfelt space dedicated to empowering Christian women on their unique spiritual journeys.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Powerella Pilgrim: Your Journey to Strength, Humility, and Faith
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              <b>Our Name, Our Mission:</b>
              <br/><br/>

              The name PowerellaPilgrim beautifully encapsulates the essence of our mission.
              <br/><br/>

              Poverello, meaning little poor one, was the humble epithet for Saint Francis of Assisi, a figure whose
              radical humility and deep love for God and creation continue to inspire millions. Our Powerella embodies
              the spirit of a humble woman who, like Saint Francis, finds immense strength and spiritual power not in
              worldly possessions or ego, but in profound humility and a heart devoted to Christ.
              Pilgrim represents the universal journey of faith, the spiritual quest we all undertake. It signifies
              the dedication to following a sacred path, embracing both the physical travel to holy sites and the inner
              pilgrimage of the soul towards deeper connection with God.
              <br/><br/>

              At PowerellaPilgrim, we believe that true strength blossoms from a humble spirit, and that every step of
              faith, whether in daily life or on a sacred journey, is a pilgrimage towards divine grace.
              <br/><br/>

              <b>What You will Discover Here:</b>
              <br/><br/>

              PowerellaPilgrim is your comprehensive guide and companion on this spiritual adventure:
              <br/><br/>

              Inspiring Articles & Reflections: Dive into our rich collection of articles and blog posts exploring
              various facets of Christian and Catholic spirituality. From timeless Franciscan wisdom to practical
              guidance for modern faith, we aim to nourish your soul and illuminate your path.
              Transformative Pilgrimages: Join us on expertly curated pilgrimages to sacred destinations. These journeys
              are more than just travel; they are opportunities for profound spiritual renewal, communal prayer, and
              personal encounters with the divine in holy places. We facilitate experiences that connect you deeply with
              centuries of faith.
              Meaningful Spiritual Gifts: Our thoughtfully selected webshop offers a unique collection of spiritual
              gifts and souvenirs. Each item is chosen to uplift, inspire, and serve as a tangible reminder of your
              faith journey or a cherished gift for a loved one.
              <br/><br/>

              <b>Our Story & Vision:</b>
              <br/><br/>

              PowerellaPilgrim was born from a deep personal conviction and a decade of experience in crafting digital
              experiences. As a senior web developer from Croatia, I have seen firsthand the power of technology to
              connect, inspire, and serve. This platform is my personal pilgrimage – a culmination of my faith, my
              passion for the spiritual journey, and my expertise in building seamless online experiences.
              <br/><br/>

              My vision is to create a vibrant, supportive community where women can explore, learn, and grow in their
              Christian faith. Whether you are seeking daily spiritual nourishment, yearning for a sacred pilgrimage, or
              searching for a meaningful gift, PowerellaPilgrim is here to accompany you.
              <br/><br/>

              <b>Join Our Journey:</b>

              We invite you to explore our articles, consider joining an upcoming pilgrimage, and discover beautiful
              gifts that resonate with your spirit. May PowerellaPilgrim be a source of strength, humility, and
              unwavering faith on your sacred path.
            </p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
