let quotesList = [
  {
    quote: "Freedom = Life.",
    author: "<span>Muhammad</span><span> Abdulhamid</span>",
  },
  {
    quote:
      "In the face of impossible odds, people who love this country can change it.",
    author: "<span>Barack</span><span> Obama</span>",
  },
  {
    quote:
      "Better to die fighting for freedom than be a prisoner all the days of your life.",
    author: "<span>Bob</span><span> Marley</span>",
  },
  {
    quote: "Freedom is what we do with what is done to us.",
    author: "<span>Jean-Paul</span><span> Sartre</span>",
  },
  {
    quote:
      "The secret of happiness is freedom, the secret of freedom is courage.",
    author: "<span>Carrie</span><span> Jones</span>",
  },
  {
    quote:
      "You can have peace. Or you can have freedom. Don't ever count on having both at once.",
    author: "<span>Robert</span><span> Heinlein</span>",
  },
  {
    quote:
      "If freedom of speech is taken away, then dumb and silent we may be led, like sheep to the slaughter.",
    author: "<span>George</span><span> Washington</span>",
  },
  {
    quote:
      "Freedom is not something that anybody can be given. Freedom is something people take, and people are as free as they want to be.",
    author: "<span>James</span><span> Baldwin</span>",
  },
  {
    quote: "He who is brave is free.",
    author: "<span>Lucius</span><span> Annaeus Seneca</span>",
  },
  {
    quote:
      "True patriotism springs from a belief in the dignity of the individual, freedom and equality not only for Americans but for all people on earth.",
    author: "<span>Eleanor</span><span> Roosevelt</span>",
  },
  {
    quote: "He who is brave is free.",
    author: "<span>Lucius</span><span> Annaeus Seneca</span>",
  },
  {
    quote:
      "True patriotism springs from a belief in the dignity of the individual, freedom and equality not only for Americans but for all people on earth.",
    author: "<span>Eleanor</span><span> Roosevelt</span>",
  },
  {
    quote: "Liberty, when it begins to take root, is a plant of rapid growth.",
    author: "<span>George</span><span> Washington</span>",
  },
  {
    quote: "Freedom is nothing but a chance to be better.",
    author: "<span>Albert</span><span> Camus</span>",
  },
  {
    quote: "Freedom lies in being bold.",
    author: "<span>Robert</span><span> Frost</span>",
  },
  {
    quote: "Those who deny freedom to others, deserve it not for themselves.",
    author: "<span>Abraham</span><span> Lincoln</span>",
  },
  {
    quote:
      "For to be free is not merely to cast off one’s chains, but to live in a way that respects and enhances the freedom of others.",
    author: "<span>Nelson</span><span> Mandela</span>",
  },
  {
    quote:
      "I am no bird; and no net ensnares me; I am a free human being with an independent will.",
    author: "<span>Charlotte</span><span> Brontë</span>",
  },
  {
    quote: "The function of freedom is to free someone else.",
    author: "<span>Toni</span><span> Morrison</span>",
  },
  {
    quote:
      "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
    author: "<span>Winston</span><span> Churchill</span>",
  },
  {
    quote: "Freedom is something that dies unless it’s used.",
    author: "<span>Hunter</span><span> S.Thompson</span>",
  },
];

let quoteElement = document.getElementById("Quote");
let authorElement = document.getElementById("Author");
let button = document.getElementById("Btn");
let numberOfQuotes = quotesList.length;
let previousIndex = null;
let newIndex = null;

function getRandomIndex() {
  do {
    newIndex = Math.floor(Math.random() * numberOfQuotes);
  } while (newIndex === previousIndex);

  previousIndex = newIndex;

  return newIndex;
}
function updateQuote() {
  let randomIndex = getRandomIndex();
  quoteElement.innerHTML = quotesList[randomIndex].quote;
  authorElement.innerHTML = quotesList[randomIndex].author;
}
button.onclick = function () {
  updateQuote();
};
