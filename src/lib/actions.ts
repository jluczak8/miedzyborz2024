"use server";

import React from "react";
import { Resend } from "resend";
import { IContactDataError } from "./definitions";
import { validateContactData } from "./utils";
import ContactFormEmail from "@/ui/kontakt/contact-form-email";

const resend: Resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData): Promise<IContactDataError | null> => {
  const senderEmail: FormDataEntryValue | null = formData.get("senderEmail");
  const message: FormDataEntryValue | null = formData.get("message");

  if(!validateContactData(senderEmail, 320)) {
    return {
      error: "Invalid sender email."
    };
  };
  if(!validateContactData(message, 9999)) {
    return {
      error: "Invalid message."
    };
  };

  const data = await resend.emails.send({
    from: "Międzybórz 2024 <onboarding@resend.dev>",
    to: "miedzyborz2024@gmail.com",
    subject: "Wiadomość z formularza kontaktowego",
    reply_to: senderEmail as string,
    react: React.createElement(ContactFormEmail, {
      senderEmail: senderEmail as string,
      message: message as string
    })
  });

  if(data.error !== null) {
    return {
      error: data.error.message
    };
  } else {
    return null;
  };
};