export const validateContactData = (value: unknown, maxLength: number): boolean => {
  if(!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  };
  return true;
};

export const handleContactFormReset = (): void => {
  const contactForm: HTMLFormElement = (document.getElementById("contactForm") as HTMLFormElement);
  contactForm.reset();
};