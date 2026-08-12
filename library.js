// AIZAT WORLD — Library data
// Add a new object to this array for every zine, book, game, app, or archive
// item and it will automatically appear on the shelves in the Library section.
//
// Fields:
//   type        "zine" | "book" | "game" | "app" | "archive" | "essay"
//   title       shown on the book spine + modal
//   description shown under the title + in the modal
//   cover       path to the cover image (falls back to a generated cover if missing)
//   link        path/URL to the PDF, page, or app — opens in a new tab (PDF/external)
//               or in the in-page overlay (if it ends in .html)

window.libraryItems = [
  {
    type: "zine",
    title: "This Is the End of the Day",
    description: "A pocket collage zine of gentle permission — affirmations for letting the body rest, the mind ease, and today be enough.",
    cover: "covers/this-is-the-end-of-the-day.png",
    link: "zines/this-is-the-end-of-the-day.pdf"
  },
  {
    type: "zine",
    title: "i am dolphins",
    description: "A fill-in-the-blank zine of self-affirmations — i am, i wonder, i hope, i dream — worked around a hand-cut dolphin and palm.",
    cover: "covers/i-am-dolphins.png",
    link: "zines/i-am-dolphins.pdf"
  },
  {
    type: "zine",
    title: "Wake Up Musolini, Wake Up!",
    description: "A doodled comic about a sleepy cat named Musolini, morning coffee, and choosing a joyful, abundant day.",
    cover: "covers/wake-up-musolini.png",
    link: "zines/wake-up-musolini.pdf"
  },
  {
    type: "zine",
    title: "Berat",
    description: "A Malay-English poetry collage on weight, the Big Bang, and being made of stardust — asking whether we're just carbon, or something sentient reading its own light.",
    cover: "covers/berat.png",
    link: "zines/berat.jpg"
  },
  {
    type: "zine",
    title: "LET THEM MAKE ZINE",
    description: "A manifesto zine of JOMBUATZINE app.",
    cover: "covers/let-them-make-zine.jpg",
    link: "zines/let-them-make-zine.pdf"
  },
  {
    type: "book",
    title: "LINES TO LIVE BY",
    description: "LINES TO LIVE BY — Ariana Grande. Say 'thank you, next' to the bad vibes and live your best life.",
    cover: "covers/LINES-TO-LIVE-BYARIANA.png",
    link: "books/LINES-TO-LIVE-BYARIANA.pdf"
  },
  {
    type: "archive",
    title: "AI Untuk Rakyat",
    description: "This article explores decentralized AI access, human autonomy, and equality by arguing for open-weighted models as public technological empowerment.",
    cover: "covers/ai-untuk-rakyat.png",
    link: "books/AI-Untuk-Rakyat.pdf"
  },
  {
    type: "essay",
    title: "The Infinite Library",
    description: "A Zine#13 expansion pack.",
    cover: "covers/infinite-cover.png",
    link: "infinite-library.html"
  },
  {
    type: "zine",
    title: "Adakah AI bertentangan dengan Socratic Method dan Bloom's Taxonomy",
    description: "Would Socrated and Benjamin Bloom Be Anti-AI?",
    cover: "covers/ai-cover.PNG",
    link: "zines/ai.pdf"
  },
  {
    type: "zine",
    title: "VIRTUE SIGNALLING",
    description: "A RM50 thrift tee that says \"D.I.Y. DO NOT USE AI\" becomes the starting point for eight questions about selective ignorance — if artificiality is the problem, where exactly does the rejection begin, and which artificial things have we decided we can afford to reject?",
    cover: "covers/virtue-signalling.jpg",
    link: "zines/virtue-signalling.pdf"
  }
];
