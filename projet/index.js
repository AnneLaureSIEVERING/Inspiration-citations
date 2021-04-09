let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let button = document.querySelector('#new-quote');

let latest = 0;
let randomNumber = 0;
let quoteList = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["La première étape consiste à se convaincre que quelque chose est possible, alors il y aura plus de probabilités que cela arrive.", "Elon Musk"],
  ["Tout le monde devrait faire ce que son cœur lui dicte.", "Mickael Jackson"],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
  ["Il est dur d'échouer; Mais il est pire de n'avoir jamais tenté de réussir.", "Franklin Delano Roosevelt"],
  ["Gardez toujours à l'esprit que votre propre décision de réussir est plus importante que n'importe quoi d'autre.", "Abraham Lincoln"],
  ["Pour réussir, retenez bien ces trois maximes : voir c'est savoir, vouloir c'est pouvoir, oser c'est voir.", "Alfred de Musset"],
  ["Chaque bonne réalisation, grande ou petite, connait ses périodes de corvées et de triomphes; un début, un combat et une victoire.", "Gandhi"],
  ["Il ne faut pas penser à l'objectif à atteindre, il faut seulement penser à avancer. C'est ainsi, à force d'avancer, qu'on atteint ou qu'on double ses objectifs sans même s'en apercevoir.", "Bernard Werber"],
  ["Le commencement est beaucoup plus que la moitié de l'objectif.", "Aristote"],
  ["Il faut tendre vers l'impossible: les grands exploits à travers l'histoire ont été la conquête de ce qui semblait impossible.", "Charlie Chaplin"],
  ["Il y a bien des manières de ne pas réussir, mais la plus sûre est de ne jamais prendre de risques.", "Benjamin Franklin"],
  ["Le plus difficile est de se décider à agir, le reste n'est que de la ténacité.", "Amélia Earhart"],
  ["Le plus grand échec est de ne pas avoir le courage d'oser.", "l'Abbé Pierre"],
  ["Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.", "Martin Luther King"],
  ["Faites ce que vous pouvez, là où vous êtes, avec ce que vous avez.", "Teddy Roosevelt"],
  ["Je recrute des hommes capables d'ignorer la phrase 'ce n'est pas possible'.", "Steve Jobs"],
  ["Dans un moment de décision, la meilleure chose à faire est de prendre la bonne. La pire, de n'en prendre aucune.", "Colin Powell"],
  ["Une fourmi qui avance en fait plus qu'un boeuf qui dors.", "Lao Tseu"],
  ["La chute n'est pas un échec. L'échec c'est de rester là où on est tombé.", "Socrate"]
];

function choiceNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

button.addEventListener('click', () => {
  do {
    randomNumber = choiceNumber(quoteList.length);
  } while (randomNumber == latest)
    
  quote.textContent = quoteList[randomNumber][0];
  author.textContent= quoteList[randomNumber][1];
  latest            = randomNumber;
});





