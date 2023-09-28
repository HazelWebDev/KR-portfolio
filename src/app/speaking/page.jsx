import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Resume',
  description:
    'A web developer who loves the artistry that goes into creating websites that leave a lasting impression.',
}

export default function Speaking() {
  return (
    <main className="lg:order-first lg:row-span-2 mt-24 p-8">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 px-8">
        
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <div className="overflow-hidden rounded-lg">
              <div className="p-6">
                <h2 className="text-xl tracking-tight text-secondary text-zinc-800 dark:text-green-400 sm:text-5xl">
                I’m Kristen Roggero
                </h2>
                <div>
                <h2 className='text-lg tracking-tight text-zinc-800 italic dark:text-cyan-400 sm:text-xl'>
                  A Web Developer</h2>
                </div>
                <div className="p-3">
                  <h3 className='text-lg tracking-tight dark:underline decoration-green-400 text-zinc-800 dark:text-cyan-400 sm:text-xl'>
                    My Goal</h3>
                  <p className='p-3 tracking-tight dark:text-zinc-100'>
                    To secure a challenging position in a reputable organization to
                    expand my learning knowledge and skill, as well incorporate art and design
                    into the evergrowing techical world. My main goal is to create remarkable and stunning 
                    web applications with powerful technologies like React.
                  </p>
                </div>
            <div className="p-3">
              <h2 className='text-lg tracking-tight dark:underline decoration-green-400 text-zinc-800 dark:text-cyan-400 sm:text-xl'>
                Education</h2>
              <h4 className='pt-3 text-md tracking-tight italic text-zinc-800 dark:text-cyan-500 sm:text-md'>
                California State University, East Bay</h4>
                <h6 className='text-sm  text-zinc-800 dark:text-zinc-300'>September 2017 - May 2021</h6>
              <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                <li className='list-inside'>Aquired a Bachelor's Degree from four years of rigorous study.</li>
                <li className='list-inside'>Two time recipient of Dean's List from a stellar academic grade point average.</li>
              </ul>
            </div>


            <div className="p-3">
              <h2 className='text-xl tracking-tight dark:underline decoration-green-400 text-zinc-800 dark:text-cyan-400 sm:text-xl'>Experience</h2>
              <h3 className='text-md tracking-tight italic text-zinc-800 dark:text-cyan-500 sm:text-md pt-3'>Infosys - Front End Developer</h3>
                <h6 className='text-sm text-zinc-800 dark:text-zinc-300'>August 2022 to Present</h6>
                  <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                    <li className='list-inside'>
                      Collaborate with peers and mentors to create lively, engaging and stylish user interfaces with 
                      HTML, CSS, JavaScript and React.
                    </li>
                    <li className='list-inside'>
                      Overcome code challenges and/or bugs through persistence in problem solving and bug testing both independently
                      and in a collaborative setting.
                    </li>
                    <li className='list-inside'>Collaborate with cohorts and leaders to ensure the design and creation of React applications are at its upmost
                    potential, making front-end applications the absolute best they can be</li>
                  </ul>


                  <div className='pt-2'>
                  <h3 className='text-md tracking-tight italic text-zinc-800 dark:text-cyan-500 sm:text-md'>
                    Revature - Full Stack Developer</h3>
                  <h6 className='text-sm text-zinc-800 dark:text-zinc-300'>
                    March 2022 to August 2022</h6>
                    <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                      <li className='list-inside'>
                        Actively engaged in web creative design and development by following the software development life cycle.</li>
                      <li className='list-inside'>Utilized Java to create a full stack shopping application similar to Amazon, with checkout functions, add to cart, and more.</li>
                      <li className='list-inside'>Conducted code reviews and consistent practice of the most effective design and implementation choices.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <div className="overflow-hidden rounded-lg p-6">
            <div className='pt-2'>
              <h2 className='text-lg tracking-tight text-zinc-800 dark:underline decoration-cyan-400 dark:text-green-400 sm:text-xl'>Projects</h2>
              <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                  <li className='list-inside'><a className='underline decoration-cyan-400' href='https://kristenroggero.com/'>Click here</a> for a link to my first ever portfolio and see the ways I have grown since then! This site is created with React
                  and some fancy animations.</li>
                  <li className='list-inside'><a className='underline decoration-cyan-400' href='https://kristenroggero.com/'>This link</a> leads to the GitHub repository of my blog project with Next.JS and GraphCMS.</li>
              </ul>
            </div>
            <div className='pt-2'>
              <h2 className='text-lg tracking-tight text-zinc-800 dark:underline decoration-cyan-400 dark:text-green-400 sm:text-xl'>
                Technical Skills </h2>
                
                  <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                    <li className='list-inside'>HTML5</li>
                    <li className='list-inside'>CSS3</li>
                    <li className='list-inside'>JavaScript(ES6+)</li>
                    <li className='list-inside'>React.js</li>
                    <li className='list-inside'>GitHub</li>
                    <li className='list-inside'>Bootstrap</li>
                    <li className='list-inside'>Tailwind CSS</li>
                  </ul>
                </div>
                <div className='pt-2'>
                <h2 className='text-lg tracking-tight text-zinc-800 dark:underline decoration-cyan-400 dark:text-green-400 sm:text-xl'>Soft Skills</h2>
                  <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                    <li className='list-inside'>Reading and Writing</li>
                    <li className='list-inside'>Time Management</li>
                    <li className='list-inside'>Problem Solving</li>
                    <li className='list-inside'>Communication and Collaboration</li>
                  </ul>
                </div>
            <div className='pt-2'>
              <h2 className='text-lg tracking-tight text-zinc-800 dark:underline decoration-cyan-400 dark:text-green-400 sm:text-xl'>Hobbies</h2>
              <ul className='list-disc p-3 tracking-tight dark:text-zinc-100'>
                <li className='list-inside'>Crocheting</li>
                <li className='list-inside'>Playing chess</li>
                <li className='list-inside'>Coding</li>
                <li className='list-inside'>Exploring</li>
              </ul>
            </div>
           
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  )
}
