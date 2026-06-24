export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5595991711011";

export const CONTACT_PHONE_DISPLAY = "(95) 99171-1011";
export const CONTACT_PHONE_TEL = "+5595991711011";

export const INSTAGRAM_URL =
  "https://www.instagram.com/one_motel_?igsh=MWpwNGJzaW84M3Ricw==";
export const FACEBOOK_URL = "https://www.facebook.com/100064346071406/";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, gostaria de mais informações";

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
