# Fatima Jafari – Portfolio (React + Tailwind + Framer Motion)

## 1. Run it
```
npm install
npm run dev        # open the address shown in the terminal
npm run build      # for Vercel: build command = npm run build, output = dist
```

## 2. Pictures
Already included in `public/images/`: Fatima.jpeg, apple-touch-icon.png and the project mockups in `public/images/projects/`.

**Missing: the bag advertisement banner (project 3).** Save it as
`public/images/projects/bag-banner.jpg` (any size, JPG). Until then the card shows a soft placeholder.

## 3. Certificate pictures
TOEFL and ICDL (diploma + transcript) are already added. To add the other two (English Diploma, Talk and Talk):
1. Put the files in `public/images/certificates/`
2. Open `src/data/content.js`, find `CERTIFICATES`, and write the file name:
   `{ id: "c1", from: "edu2", image: "english-diploma.jpg" }`

## 4. Change text, dates, projects
Everything is in `src/data/content.js`:
- `T.en` / `T.fa`  -> all English and Dari texts
- `EDUCATION`      -> add dates, e.g. `dates: "2019 – 2022"`
- `PROJECTS`       -> project images and program names (target audience and texts are in `T.en` / `T.fa`)

## Colors
Only the 9 colors in `tailwind.config.js` are used.
