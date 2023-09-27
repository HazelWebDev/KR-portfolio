import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/pinkFlower.png'

function SocialLink({ className, href, children, icon: Icon }) {
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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Kristen Roggero. I live in Austin, where inspiration can be found everywhere.',
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
              className="aspect-square rotate-3 rounded-2xl bg-green-100 object-cover dark:bg-green-100"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary text-zinc-800 dark:text-green-400 sm:text-5xl">
          I’m Kristen Roggero. I live in Austin, where inspiration can be found everywhere.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As someone who was born in the nic of time right before the internet came to be,
              I pretty much grew up with computers. It was awesome! At least, except for one part of it: the art. 
              How can there be more art in the computer world? It turns out it was right under my nose the entire time.
            </p>
            <p>
              It took a few years for me to notice it, in the same way it takes some folks time
              to appreciate an artwork after trying to draw themselves. And so I started, beginning with simple 
              HTML and advancing ethusiastically into React frameworks. Through this training, I've learned not
              only how to create web applications, but to appreciate the works of art that they indeed are.
            </p>
            <p>
              Thus far in the coding journey, I've embarked on a few different projects. The first one is
              a personal portfolio using React and some fancy CSS animations. The second project is a blog website
              dedicated to posts about my favorite hobby of crochet. And the third project is this very application 
              that you're viewing right this moment!
            </p>
            <p>
              With the way things are currently going and the unstoppable evolution of technology, one can't help but 
              to feel thrilled about where it will advance in the near future. Web development is amazing for an <em>array</em> of 
              reasons, some of which are yet to be revealed. Until then, the opportunities are endless! 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/HazelWebDev" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/kristen-roggero/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:kristenroggero@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              kristenroggero@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
