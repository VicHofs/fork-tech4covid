import React from 'react'
import cx from 'classnames'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import Link from 'next/link'

export interface FooterProps {
  readonly darkMode: boolean
  readonly className?: string
}

const Footer: React.FC<FooterProps> = ({ className, darkMode }) => {
  return (
    <div
      className={`${cx('py-12', className)}${
        darkMode ? ' bg-gray-900' : ' bg-gray-200'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <a
            href="/Termos de Voluntariado.pdf"
            download
            className={`hover:underline${
              darkMode
                ? ' text-gray-100 hover:text-primary-300'
                : ' text-black hover:text-primary-500'
            }`}
          >
            Termos & Condições
          </a>
          <Link href="/[slug]" as="/privacidade">
            <a
              className={`hover:underline${
                darkMode
                  ? ' text-gray-100 hover:text-primary-300'
                  : ' text-black hover:text-primary-500'
              }`}
            >
              Política de privacidade
            </a>
          </Link>
          <a
            href="https://atados.com.br"
            className={`hover:underline${
              darkMode
                ? ' text-gray-100 hover:text-primary-300'
                : ' text-black hover:text-primary-500'
            }`}
            target="__blank"
          >
            Atados <MdOpenInNew className="inline-block" />
          </a>
          <a
            href="https://tech4covid19.org"
            className={`hover:underline${
              darkMode
                ? ' text-gray-100 hover:text-primary-300'
                : ' text-black hover:text-primary-500'
            }`}
            target="__blank"
          >
            Tech4Covid19 Portugal <MdOpenInNew className="inline-block" />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-5 text-3xl">
          <a
            target="__blank"
            href="https://github.com/atados/tech4covid"
            className={`text-gray-600 transition duration-100${
              darkMode ? ' hover:text-primary-300' : ' hover:text-primary-500'
            }`}
          >
            <FaGithub />
          </a>
          <a
            target="__blank"
            href="https://instagram.com/atados"
            className={`text-gray-600 transition duration-100${
              darkMode ? ' hover:text-primary-300' : ' hover:text-primary-500'
            }`}
          >
            <FaInstagram />
          </a>
          <a
            target="__blank"
            href="https://www.facebook.com/atadosjuntandogenteboa/"
            className={`text-gray-600 transition duration-100${
              darkMode ? ' hover:text-primary-300' : ' hover:text-primary-500'
            }`}
          >
            <FaFacebook />
          </a>
        </div>
        <hr
          className={`my-6${
            darkMode ? ' border-gray-700' : ' border-gray-300'
          }`}
        />
        <p className="text-center text-gray-600 text-sm cursor-default">
          © {new Date().getFullYear()} Tech4Covid19 · A comunidade tecnológica
          no combate ao COVID19
        </p>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export { Footer }
export default Footer
