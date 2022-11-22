import Header from '../../components/Header'
import HeaderImage from '../../images/header.png'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam quia esse quod aliquid, omnis impedit molestias aperiam magni fuga laborum atque, perspiciatis fugit nulla velit unde, eaque ullam. Explicabo.

      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target='_blank' rel="noreferrer noopener"><MdEmail /></a>
            <a href="htttps://m.me/khedertaleb" target='_blank' rel="noreferrer noopener"><BsMessenger /></a>
            <a href="https://wa.me/+963996275091" target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact