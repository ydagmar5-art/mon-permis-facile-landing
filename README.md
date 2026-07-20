# Mon Permis Facile — Landing page

Landing page mono-page orientée conversion pour l'auto-école **Mon Permis Facile**
(formation accélérée : Code + Conduite + NEPH, 1900€).

Objectif unique : envoyer les visiteurs contacter via **WhatsApp**.

## Stack

Site statique — aucun build nécessaire.

- `index.html` — structure de la page
- `styles.css` — design (couleurs, typo Bricolage Grotesque + Hanken Grotesk)
- `script.js` — reveal au scroll, count-up, accordéon FAQ
- `assets/` — favicon

## Développer en local

```bash
# n'importe quel serveur statique, ex :
npx serve .
# ou
python3 -m http.server 3000
```

Puis ouvrir http://localhost:3000

## Déploiement

Déployé sur **Vercel** (site statique, sans configuration).
Chaque push sur `main` déclenche un nouveau déploiement.

## À personnaliser

- **Numéro WhatsApp** : rechercher `33745248254` dans `index.html`.
- **Avis clients** : la section « Avis » contient des témoignages *illustratifs*
  (mention indiquée dans le footer). À remplacer par de vrais avis quand disponibles.
