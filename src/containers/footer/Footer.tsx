import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterLogo,
  FooterText,
  SocialLinks,
  SocialLinksItens
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src="/images/logo.png" alt="Logo" />
      <SocialLinks>
        <SocialLinksItens
          href="https://github.com/PedroVDCampos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLinksItens>
        <SocialLinksItens
          href="https://www.instagram.com/o_ppedrinn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialLinksItens>
      </SocialLinks>
      <FooterText>
        efood é uma plataforma de delivery de comida pensada pra te conectar aos
        melhores restaurantes da cidade com praticidade e rapidez. Com poucos
        cliques, você escolhe seus pratos favoritos, personaliza o pedido e
        recebe tudo quentinho na porta da sua casa. Explore cardápios variados,
        aproveite promoções exclusivas e tenha uma experiência de entrega
        moderna, segura e eficiente. Se bateu a fome, já sabe: pede um efood!
      </FooterText>
    </FooterContainer>
  )
}
export default Footer
