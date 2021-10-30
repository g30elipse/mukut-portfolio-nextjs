import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        MUKUT BRAHMA.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Github&nbsp;
        <a
          target='_blank'
          href="https://github.com/g30elipse"
          className="underline hover:text-success duration-200 transition-colors"
        >
          @g30elipse
        </a>
      </h4>
    </section>
  )
}
