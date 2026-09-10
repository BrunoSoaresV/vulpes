const whatsappNumber = '5595984250254';

const createWhatsAppLink = (message?: string): string => {
  const baseUrl = `https://wa.me/${whatsappNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

export const contactAgent = createWhatsAppLink();

export const jouneyContact = createWhatsAppLink(
  'Olá! Gostaria de saber mais sobre as aulas de inglês da Vulpes'
);

export const overseasContact = createWhatsAppLink(
  'Olá! Gostaria de saber mais informações sobre o Overseas'
);

export const proAceContact = createWhatsAppLink(
  'Olá! Gostaria de saber mais informações sobre o Pro Ace'
);

export const proBusinessMasterClass =
  'https://chk.eduzz.com/1897833';

export const proConsultoriaVlps = createWhatsAppLink();
