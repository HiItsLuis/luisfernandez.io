import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoReact from '@/images/logos/react.svg'
import logoAngular from '@/images/logos/angular.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoVue from '@/images/logos/vue.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoNext from '@/images/logos/next.svg'
import { Container } from '@/components/Container'
import Link from 'next/link'

const services = [
  {
    name: 'Javascript SEO',
    description:
      'Crawlea, renderiza, indexa y posiciona sitios webs programados en JS.',
    link: { href: '/javascript-seo' },
    logo: logoJavascript,
  },
  {
    name: 'Next JS SEO',
    description:
      'Utilizado por algunas de las mayores empresas del mundo optimizado para el SEO.',
    link: { href: '/next-js-seo'},
    logo: logoNext,
  },
  {
    name: 'React SEO',
    description:
      'El mayor framework de Javascript del mundo',
    link: { href: '/#'},
    logo: logoReact,
  },
  {
    name: 'Angular SEO',
    description:
      'Desarollado por Google y descontinuado en enero de 2022.',
    link: { href: '/#'},
    logo: logoAngular,
  },
  {
    name: 'Vue SEO',
    description:
      'Framework de JS open source amado por la comunidad.',
    link: { href: '/#'},
    logo: logoVue,
  },
  {
    name: 'SEO Programático',
    description:
      'Aumento del tráfico orgánico mediante la publicación de URLs a gran escala.',
    link: { href: '/#'},
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Servicios - Luis Fernández</title>
        <meta
          name="description"
          content="Cosas que hago intentando hacer mella en el universo."
        />
      </Head>
   
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Servicios especializados
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Consultoría SEO estratégica especializada. <Link className='font-semibold text-zinc-800 dark:text-zinc-100' href='https://calendar.app.google/3yNLx8kUUvhR7GBHA'>Ponte en contacto conmigo</Link>.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
