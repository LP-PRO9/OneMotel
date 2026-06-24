import { WHATSAPP_NUMBER } from "@/lib/constants";

export function buildBookingMessage(params: {
  suiteTitle: string;
  dateLabel: string;
  time: string;
}): string {
  const { suiteTitle, dateLabel, time } = params;
  return encodeURIComponent(
    `Olá! Gostaria de reservar:\n\n*Suíte ${suiteTitle}*\nDia e Hora: ${dateLabel} às ${time}`
  );
}

export function bookingWhatsAppUrl(params: {
  suiteTitle: string;
  dateLabel: string;
  time: string;
}): string {
  const msg = buildBookingMessage(params);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
