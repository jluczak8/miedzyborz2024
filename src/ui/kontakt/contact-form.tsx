"use client";

import toast from "react-hot-toast";
import { sendEmail } from "@/lib/actions";
import { IContactDataError } from "@/lib/definitions";
import { handleContactFormReset } from "@/lib/utils";

export default function ContactForm(): JSX.Element {
  return (
    <form
      id="contactForm"
      action={async (formData: FormData): Promise<void> => {
        const error: IContactDataError | null = await sendEmail(formData);

        if(error !== null) {
          toast.error(error.error);
          return;
        }
        toast.success("Wiadomość wysłana!");
        handleContactFormReset();
      }}
    >
      <input
        type="email"
        name="senderEmail"
        placeholder="ADRES E-MAIL"
        required
        maxLength={320}
      />
      <textarea
        name="message"
        placeholder="WPISZ WIADOMOŚĆ"
        required
        maxLength={9999}
        rows={10}
      />
      <button type="submit">WYŚLIJ</button>
    </form>
  );
};