import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { IContactFormEmailProps } from "@/lib/definitions";

export default function ContactFormEmail({
  senderEmail,
  message
}: IContactFormEmailProps): JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>Nowa wiadomość z formularza kontaktowego strony Międzybórz 2024.</Preview>
      <Body>
        <Container>
          <Section>
            <Heading as="h2">Otrzymałeś nową wiadomość z formularza kontaktowego strony Międzybórz 2024.</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>Nadawca wiadomości: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};