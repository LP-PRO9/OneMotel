export interface Suite {
  id: string;
  bloco: string;
  numero: string;
  titulo: string;
  tags: string[];
  preco: string;
  specs: string[];
  descricao: string;
  amenidades: string[];
  imgs: string[];
  proxima: string;
}

export const BLOCO_PRECOS: Record<string, string> = {
  SIJI: "R$ 139,00",
  EGY: "R$ 204,00",
  EVAC: "R$ 235,00",
  ONE: "R$ 539,00",
};

export const SUITES: Record<string, Suite> = {

  "one-101": {
    id: "one-101",
    bloco: "ONE",
    numero: "101",
    titulo: "ONE 101",
    tags: ["piscina"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte do Bloco ONE com piscina privativa para momentos especiais a dois. Ambiente moderno, com ar-condicionado, frigobar, sistema de som e acesso a Netflix, Spotify e YouTube. Privacidade total e check-in disponível 24 horas.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "Sistema de som", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes ONE/101/11517F5E-2F99-49C3-A650-4FED13BD5357.png",
      "IMG/Suites imgs/Suítes ONE/101/484FCA87-F5D9-42D8-B499-4CB58B43EB4E.png",
      "IMG/Suites imgs/Suítes ONE/101/499E1175-6F9C-4C9E-8CE2-5FBBA81E89A4.png",
      "IMG/Suites imgs/Suítes ONE/101/766D7DCC-2A6F-4EAD-8ACF-5EB87288541E.png",
      "IMG/Suites imgs/Suítes ONE/101/839B4530-C404-43E8-8E98-581617839480.png",
      "IMG/Suites imgs/Suítes ONE/101/C7975CAC-594D-46E0-BFA4-79BCA4424D68.png",
      "IMG/Suites imgs/Suítes ONE/101/E227FEB4-76B6-430A-86F1-B94C5BCA1713.png"
    ],
    proxima: "one-104"
  },

  "one-104": {
    id: "one-104",
    bloco: "ONE",
    numero: "104",
    titulo: "ONE 104",
    tags: ["piscina"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Espaço exclusivo do Bloco ONE com piscina privativa e decoração contemporânea. Conta com frigobar, ar-condicionado, Wi-Fi, sistema de som e streaming para completar a experiência. Ideal para casais que buscam conforto e discrição.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "Sistema de som", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes ONE/104/17ED8322-AE1E-4347-9A6D-572264921DA8.png",
      "IMG/Suites imgs/Suítes ONE/104/C5A695A7-49C5-4358-8C61-0CCF07602CA5.png",
      "IMG/Suites imgs/Suítes ONE/104/DD29D103-21CF-42CB-AA8A-7C93DFAB25B3.png",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3556.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3560.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3564.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3577.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3581.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_3587.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6094.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6111.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6124.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6138.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6141.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6146.jpg",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6449.PNG",
      "IMG/Suites imgs/Suítes ONE/104/IMG_6451.PNG"
    ],
    proxima: "egy-102"
  },

  "egy-102": {
    id: "egy-102",
    bloco: "EGY",
    numero: "102",
    titulo: "EGY 102",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte do Bloco EGY com hidromassagem privativa para relaxar em casal. Ambiente aconchegante, com frigobar, ar-condicionado, Wi-Fi e entretenimento via Netflix, Spotify e YouTube. Check-in 24h para maior comodidade.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EGY/102/0A2BEC95-33EE-423F-9B0E-B0FD615735C7.png",
      "IMG/Suites imgs/Suítes EGY/102/3760095F-E11E-48EF-8B89-EE2A732898FF.png",
      "IMG/Suites imgs/Suítes EGY/102/EB858C05-1636-40FC-8064-9CC041DAB298.png",
      "IMG/Suites imgs/Suítes EGY/102/IMG_8592.jpg"
    ],
    proxima: "egy-103"
  },

  "egy-103": {
    id: "egy-103",
    bloco: "EGY",
    numero: "103",
    titulo: "EGY 103",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Conforto e intimidade no Bloco EGY, com hidromassagem exclusiva para dois. Equipada com frigobar, ar-condicionado, TV a cabo e streaming. Um refúgio discreto no One Motel, com atendimento a qualquer hora.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EGY/103/AC7DBA5C-572F-4537-AEFF-130277844669.png",
      "IMG/Suites imgs/Suítes EGY/103/DF1123E7-99B3-4E0A-89AB-4DD7C6DACDE1.png",
      "IMG/Suites imgs/Suítes EGY/103/EB7AA2AD-70D9-4497-9C8E-23E56E2F996F.png",
      "IMG/Suites imgs/Suítes EGY/103/IMG_8559.jpg",
      "IMG/Suites imgs/Suítes EGY/103/IMG_8565.jpg",
      "IMG/Suites imgs/Suítes EGY/103/IMG_8568.jpg",
      "IMG/Suites imgs/Suítes EGY/103/IMG_8569.jpg"
    ],
    proxima: "evac-301"
  },

  "evac-301": {
    id: "evac-301",
    bloco: "EVAC",
    numero: "301",
    titulo: "EVAC 301",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte do Bloco EVAC com hidromassagem privativa e ambiente bem cuidado. Frigobar, ar-condicionado, Wi-Fi e acesso a plataformas de streaming inclusos. Perfeita para desconectar a dois com total privacidade.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EVAC/301/1E39B655-C6A3-4D2D-AA60-F5285ED929FE.png",
      "IMG/Suites imgs/Suítes EVAC/301/5531BC32-DF4C-418A-A6F9-FB789A5F3C89.png",
      "IMG/Suites imgs/Suítes EVAC/301/7F8FF63C-761A-4D48-B7F4-66DD1672F0A8.png",
      "IMG/Suites imgs/Suítes EVAC/301/IMG_8344.jpg",
      "IMG/Suites imgs/Suítes EVAC/301/IMG_8345.jpg",
      "IMG/Suites imgs/Suítes EVAC/301/IMG_8364.jpg",
      "IMG/Suites imgs/Suítes EVAC/301/IMG_8365.jpg"
    ],
    proxima: "evac-302"
  },

  "evac-302": {
    id: "evac-302",
    bloco: "EVAC",
    numero: "302",
    titulo: "EVAC 302",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Espaço intimista no Bloco EVAC, destacando-se pela hidromassagem para casais. Conta com frigobar, ar-condicionado, TV a cabo e entretenimento digital. Check-in 24 horas para encaixar no seu ritmo.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EVAC/302/3A0316A9-A9B0-4C60-AE6D-5848EC174CEC.png",
      "IMG/Suites imgs/Suítes EVAC/302/55554295-A4C6-45BE-96E8-62C0B853C19B.png",
      "IMG/Suites imgs/Suítes EVAC/302/764E5695-349C-4CF2-ADB2-00A01E1992E3.png",
      "IMG/Suites imgs/Suítes EVAC/302/IMG_8692.jpg"
    ],
    proxima: "evac-303"
  },

  "evac-303": {
    id: "evac-303",
    bloco: "EVAC",
    numero: "303",
    titulo: "EVAC 303",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte acolhedora do Bloco EVAC com hidromassagem exclusiva. Ambiente climatizado, frigobar abastecido e Wi-Fi de qualidade, além de Netflix e Spotify à disposição. Conforto e discrição em cada detalhe.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EVAC/303/2E0E272D-3FAD-438D-B710-8ECC5E194028.png",
      "IMG/Suites imgs/Suítes EVAC/303/3F30A827-808C-4F3C-B1C0-43DFAE38BC17.png",
      "IMG/Suites imgs/Suítes EVAC/303/71CE9705-12AB-479D-989B-9C514CEB4D83.png",
      "IMG/Suites imgs/Suítes EVAC/303/7803B5D8-7E03-4ED2-B6CD-447BC2FFC789.png"
    ],
    proxima: "evac-305"
  },

  "evac-305": {
    id: "evac-305",
    bloco: "EVAC",
    numero: "305",
    titulo: "EVAC 305",
    tags: ["hidromassagem"],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Refúgio no Bloco EVAC com hidromassagem privativa para momentos a dois. Equipada com frigobar, ar-condicionado, TV a cabo e streaming. Atendimento discreto e check-in disponível 24 horas.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes EVAC/305/1FD96D2B-1325-46F7-B9BC-59373CA5E234.png",
      "IMG/Suites imgs/Suítes EVAC/305/E328F262-2894-46C7-8B5E-6127FFFF80D1.png",
      "IMG/Suites imgs/Suítes EVAC/305/E895B652-2449-4662-B448-114E46208E14.png"
    ],
    proxima: "siji-201"
  },

  "siji-201": {
    id: "siji-201",
    bloco: "SIJI",
    numero: "201",
    titulo: "SIJI 201",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte confortável do Bloco SIJI, pensada para casais que valorizam privacidade e praticidade. Ambiente climatizado com frigobar, Wi-Fi, TV a cabo e acesso a Netflix, Spotify e YouTube. Check-in 24h no One Motel.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/201/13DBC0A8-F055-45A5-86BD-0CE3A3409914.png",
      "IMG/Suites imgs/Suítes SIJI/201/4D4494FB-8758-43CD-84A5-39276BC2CB8F.png",
      "IMG/Suites imgs/Suítes SIJI/201/IMG_8478.jpg"
    ],
    proxima: "siji-202"
  },

  "siji-202": {
    id: "siji-202",
    bloco: "SIJI",
    numero: "202",
    titulo: "SIJI 202",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Ambiente acolhedor no Bloco SIJI, ideal para momentos a dois com total discrição. Conta com ar-condicionado, frigobar, Wi-Fi e entretenimento via streaming. Conforto essencial sem abrir mão do requinte.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/202/1339BB03-C118-4068-824C-251A22BEF779.png",
      "IMG/Suites imgs/Suítes SIJI/202/BB211513-01DE-4910-97D5-E06BA42069FC.png",
      "IMG/Suites imgs/Suítes SIJI/202/D0B01E8E-C2F0-4595-8A06-C5D21D619C73.png"
    ],
    proxima: "siji-203"
  },

  "siji-203": {
    id: "siji-203",
    bloco: "SIJI",
    numero: "203",
    titulo: "SIJI 203",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Espaço intimista do Bloco SIJI, com tudo que você precisa para uma estadia relaxante. Frigobar, ar-condicionado, TV a cabo e plataformas de streaming inclusas. Atendimento disponível a qualquer hora.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/203/2C17CEA1-96E2-406B-AC51-1F9A10D05F37.png",
      "IMG/Suites imgs/Suítes SIJI/203/5833039E-0CD4-47E5-BDC7-EDC0C85D0DBD.png"
    ],
    proxima: "siji-204"
  },

  "siji-204": {
    id: "siji-204",
    bloco: "SIJI",
    numero: "204",
    titulo: "SIJI 204",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte bem equipada no Bloco SIJI para receber casais com conforto. Ar-condicionado, frigobar, Wi-Fi e acesso a Netflix e Spotify completam a experiência. Privacidade e praticidade em um só lugar.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/204/CB3D8CAB-26BF-414E-90B4-ADDF000CAE1F.png",
      "IMG/Suites imgs/Suítes SIJI/204/F40775D7-1B09-4D67-B1D4-3C063263B821.png",
      "IMG/Suites imgs/Suítes SIJI/204/IMG_8523.jpg",
      "IMG/Suites imgs/Suítes SIJI/204/IMG_8525.jpg"
    ],
    proxima: "siji-205"
  },

  "siji-205": {
    id: "siji-205",
    bloco: "SIJI",
    numero: "205",
    titulo: "SIJI 205",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Refúgio discreto no Bloco SIJI, com ambiente climatizado e decoração cuidadosa. Frigobar, TV a cabo, Wi-Fi e streaming para tornar a estadia ainda mais especial. Check-in 24 horas.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/205/115E35C1-FFB6-4ED3-9D6F-F4283F70AD57.png",
      "IMG/Suites imgs/Suítes SIJI/205/2BAEC7C7-791C-4A37-AA6E-198E78418289.png",
      "IMG/Suites imgs/Suítes SIJI/205/6840806E-81A2-41F2-8E77-4EDF8EB16C92.png",
      "IMG/Suites imgs/Suítes SIJI/205/EA4B11CC-1727-4BAB-927E-ACFDC6931861.png"
    ],
    proxima: "siji-206"
  },

  "siji-206": {
    id: "siji-206",
    bloco: "SIJI",
    numero: "206",
    titulo: "SIJI 206",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Conforto e intimidade definem esta suíte do Bloco SIJI. Equipada com frigobar, ar-condicionado, Wi-Fi e entretenimento digital. Uma opção equilibrada para quem busca qualidade e discrição.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/206/BA7EDCD9-DFD3-4D9B-8542-9EF0F2A7F011.png",
      "IMG/Suites imgs/Suítes SIJI/206/BD370309-6F52-42C0-A36C-5B1BD9C1CE5B.png",
      "IMG/Suites imgs/Suítes SIJI/206/IMG_6402.jpg",
      "IMG/Suites imgs/Suítes SIJI/206/IMG_8608.jpg"
    ],
    proxima: "siji-207"
  },

  "siji-207": {
    id: "siji-207",
    bloco: "SIJI",
    numero: "207",
    titulo: "SIJI 207",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte do Bloco SIJI com ambiente reservado e acolhedor para dois. Ar-condicionado, frigobar, TV a cabo e acesso a Netflix, Spotify e YouTube. Experiência prática e agradável no One Motel.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/207/115E35C1-FFB6-4ED3-9D6F-F4283F70AD57.png",
      "IMG/Suites imgs/Suítes SIJI/207/223537AA-D3BF-4BBE-9255-633B1D341C1C.png",
      "IMG/Suites imgs/Suítes SIJI/207/6994CDA3-8FF3-4457-961B-AD017AEB19C5.png",
      "IMG/Suites imgs/Suítes SIJI/207/7FD9EC18-A8B0-4CEF-85C9-8F4BA538BF2B.png"
    ],
    proxima: "siji-208"
  },

  "siji-208": {
    id: "siji-208",
    bloco: "SIJI",
    numero: "208",
    titulo: "SIJI 208",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Espaço confortável no Bloco SIJI, perfeito para relaxar em casal. Conta com frigobar, ar-condicionado, Wi-Fi e streaming. Discrição e comodidade do check-in ao check-out.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/208/084361B6-4BFC-4715-BA5A-80CB8DE7293C.png",
      "IMG/Suites imgs/Suítes SIJI/208/1339BB03-C118-4068-824C-251A22BEF779.png",
      "IMG/Suites imgs/Suítes SIJI/208/2BAEC7C7-791C-4A37-AA6E-198E78418289.png",
      "IMG/Suites imgs/Suítes SIJI/208/copy_5B239EF6-D6B2-441F-85B8-9CC4BD51A016.jpeg"
    ],
    proxima: "siji-209"
  },

  "siji-209": {
    id: "siji-209",
    bloco: "SIJI",
    numero: "209",
    titulo: "SIJI 209",
    tags: [],
    preco: "R$ ---",
    specs: ["Até 2 hóspedes", "Check-in 24h", "A partir de R$ ---"],
    descricao: "Suíte do Bloco SIJI que combina conforto, privacidade e praticidade. Ambiente climatizado com frigobar, TV a cabo, Wi-Fi e plataformas de streaming. Atendimento 24 horas para sua conveniência.",
    amenidades: ["TV a cabo", "Frigobar", "Ar-condicionado", "Wi-Fi", "Check-in 24h", "YouTube", "Netflix", "Spotify"],
    imgs: [
      "IMG/Suites imgs/Suítes SIJI/209/2BAEC7C7-791C-4A37-AA6E-198E78418289.png",
      "IMG/Suites imgs/Suítes SIJI/209/6674144D-1BC9-4988-B5FF-87609897FDA6.png",
      "IMG/Suites imgs/Suítes SIJI/209/75E1029A-883E-460A-A394-9E3564BD8AB2.png"
    ],
    proxima: "one-101"
  }

};

for (const suite of Object.values(SUITES)) {
  const preco = BLOCO_PRECOS[suite.bloco];
  if (preco) {
    suite.preco = preco;
    const specIdx = suite.specs.findIndex((s) => s.startsWith("A partir de"));
    if (specIdx >= 0) suite.specs[specIdx] = `A partir de ${preco}`;
  }
}
