
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_6c0kidl'; // Replace with your EmailJS Service ID
const TEMPLATE_ID = 'template_spz689o'; // Replace with your EmailJS Template ID
const PUBLIC_KEY = 'qi4JkSyQlJ24A6E7-'; // Replace with your EmailJS Public Key

export const sendEmail = async (form: HTMLFormElement): Promise<void> => {
  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email.');
  }
};
