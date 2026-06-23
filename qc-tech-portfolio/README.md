# DigitalLoom Portfolio

Portfolio Next.js 16 avec App Router.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Envoi de mail

Le formulaire de contact envoie ses données vers `/api/contact`.
Cette route s'exécute côté serveur sur Netlify et relaie le message à EmailJS.

Variables d'environnement à configurer côté Netlify :

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_PRIVATE_KEY` ou `EMAILJS_ACCESS_TOKEN` si le compte EmailJS l'utilise
