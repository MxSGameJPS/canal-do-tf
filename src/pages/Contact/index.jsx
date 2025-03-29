import React, { useState } from "react";
import styled from "styled-components";
import AnimatedPage from "../../components/AnimatedPage";

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const ContactHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--border-color);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;

  @media (max-width: 992px) {
    padding: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  flex: 0 0 350px;
  background-color: var(--primary-color);
  padding: 2rem;
  border-left: 1px solid var(--border-color);

  @media (max-width: 992px) {
    border-left: none;
    border-top: 1px solid var(--border-color);
    flex: 1;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(255, 204, 0, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  transition: var(--transition);
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(255, 204, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const InfoTitle = styled.h3`
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 204, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--secondary-color);
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  margin: 0 0 0.3rem 0;
  color: var(--text-color);
  font-size: 1rem;
`;

const InfoText = styled.p`
  margin: 0;
  color: var(--text-color);
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--secondary-color);
  transition: var(--transition);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 2rem;

  h3 {
    color: var(--success-color);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio do formulário
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormSubmitted(false);
  };

  return (
    <AnimatedPage>
      <ContactContainer>
        <ContactHeader className="animate-on-mount">
          <ContactTitle>Entre em Contato</ContactTitle>
          <ContactDescription>
            Tem alguma dúvida, sugestão ou quer fazer uma parceria? Preencha o
            formulário abaixo ou use os canais de contato direto.
          </ContactDescription>
        </ContactHeader>

        <ContactContent>
          <ContactForm className="animate-on-mount delay-1">
            {formSubmitted ? (
              <ThankYouMessage>
                <h3>Mensagem Enviada!</h3>
                <p>
                  Obrigado por entrar em contato. Responderemos o mais breve
                  possível.
                </p>
                <SubmitButton onClick={resetForm}>
                  Enviar outra mensagem
                </SubmitButton>
              </ThankYouMessage>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Mensagem</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </SubmitButton>
              </form>
            )}
          </ContactForm>

          <ContactInfo className="animate-on-mount delay-2">
            <InfoTitle>Informações de Contato</InfoTitle>

            <InfoItem>
              <InfoIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Localização</InfoLabel>
                <InfoText>Rio de Janeiro, RJ - Brasil</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="currentColor"
                  />
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>contato@canaldotf.com.br</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Telefone</InfoLabel>
                <InfoText>+55 (21) 99999-9999</InfoText>
              </InfoContent>
            </InfoItem>

            <SocialLinks>
              <SocialLink
                href="https://www.youtube.com/@CANALDOTF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/canaldotf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://twitter.com/canaldotf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </AnimatedPage>
  );
};

export default Contact;
