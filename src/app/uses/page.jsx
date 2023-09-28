import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'The tools, software, and utilities that make life easier.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools, resources, and features I often use."
      intro="In the big world of the internet, there's a plethora of tools that can assist with productivity! Here's a list of some of the resources I use, 
      from things to help with focus to creative websites."
    >
      <div className="space-y-20">
        <ToolsSection  className='text-lg tracking-tight text-zinc-800 dark:underline decoration-cyan-400 dark:text-green-400 sm:text-xl' title="Workstation">
          <Tool title="Slate MR PC">
            The rumors are true: I've got a gaming desktop pc, and it's a legendary piece of equipment! Although I don't 
            game very much lately, it is great for all things internet. 
          </Tool>
          <Tool title="Dual Monitors">
            Lately there's an argument about having two seperate monitors, or one ginormous one. Personally,
            I enjoy the dual monitor setup since it is easier to move tabs around and keep them organized rather than 
            overlapping in the center. Plus, movies and shows are a challenge when it comes to full screen on the giant
            monitors. The choice is yours!
          </Tool>
          <Tool title="50% Seedna Keyboard">
            Found this <em>little guy</em> on amazon for a fair price. Even though 50% keyboards are pretty small,
            it is perfect for my hands and the way I trained myself to type. Am I just a fan of the RBG color styles? Maybe...
          </Tool>
          <Tool title="Logitech Speakers">
            Before I got these amazingly clear speakers, I was stuck using those inexpensive, I'm-just-going-to-buy-them-for-convience speakers
            that you buy in a pinch. It made the sound of these wonderful speakers that much sweeter. No fuzziness or gain, only crystal clear melodies. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            There are lots of choices when it comes to your IDE, but VS Code is my favorite for all 
            the extra functionality and shortcuts it has. Not to mention, I adore all the extra themes they have to 
            color code your code. 
          </Tool>
          <Tool title="Nord VPN">
            Great for protecting yourself online. 
          </Tool>
          <Tool title="Tailwind CSS">
            I bought the TailwindCSS package to increase my productivity and inspire me to create stunning websites by 
            fusing different components, colors, and styles together. It's one big experiment with clear guidelines, and very
            fun to play around with.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Canva">
            Canva is home to endless designs, no matter what you might need. From wallpapers to social
            media videos, its a go-to for digital creativity. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Music">
            Music has a way of activating the creative and driven parts of my brain, helping to get
            the work rhythm movin'.
          </Tool>
          <Tool title="Discord">
            Joining different discord servers where developers like to gather and discuss all things tech, it is both a good
            way to meet likeminded people and get advice or critiques on your resume or projects. 
          </Tool>
          <Tool title="The Internet">
            Is this an obvious answer? Yes. But... there is an endless stream of information and power that the internet brings. You 
            can use W3Schools, JavaScript.info, The Odin Project, YouTube, and so many other educational and informative sites! The 
            internet is your osyter. 
          </Tool>
          
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
