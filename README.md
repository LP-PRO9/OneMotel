# One Motel — Next.js

Site do One Motel migrado para Next.js 15 (App Router + TypeScript).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/suites` | Listagem de suítes com filtros |
| `/suite/[id]` | Detalhe da suíte |
| `/reservar/[id]` | Fluxo de reserva → WhatsApp |

## Variáveis de ambiente

Copie `.env.local` e ajuste:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=5595991711011
```

## Deploy (Vercel)

1. Conecte o repositório na Vercel
2. Root directory: `One motel`
3. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` nas Environment Variables
4. Deploy automático a cada push

## Assets

Imagens, stickers e vídeos ficam em `public/` (`IMG/`, `Stickers/`, `Videos/`).
