"use strict";

const QUIZZES = {
  reseau: {
    label: "Réseau",
    icon: "🌐",
    description:
      "Adressage IP, DNS et services essentiels : vérifiez vos fondamentaux réseau.",
    questions: [
      {
        question: "Combien de bits contient une adresse IPv4 ?",
        answers: ["16 bits", "32 bits", "128 bits"],
        correct: 1,
        explanation:
          "Une adresse IPv4 est codée sur 32 bits, généralement représentés par quatre octets en notation décimale pointée.",
        source: "https://datatracker.ietf.org/doc/html/rfc791"
      },
      {
        question: "Laquelle de ces adresses appartient à une plage IPv4 privée ?",
        answers: ["8.8.8.8", "172.20.10.5", "193.51.1.1"],
        correct: 1,
        explanation:
          "La plage 172.16.0.0/12 est réservée aux réseaux privés. Elle s’étend de 172.16.0.0 à 172.31.255.255.",
        source: "https://datatracker.ietf.org/doc/html/rfc1918"
      },
      {
        question: "Quel est le rôle principal du protocole DHCP ?",
        answers: [
          "Attribuer automatiquement une configuration IP",
          "Chiffrer les communications web",
          "Convertir un nom de domaine en adresse IP"
        ],
        correct: 0,
        explanation:
          "DHCP fournit automatiquement aux clients des paramètres réseau comme l’adresse IP, le masque, la passerelle et les serveurs DNS.",
        source: "https://datatracker.ietf.org/doc/html/rfc2131"
      },
      {
        question: "À quoi sert principalement le DNS ?",
        answers: [
          "À filtrer les paquets entrants",
          "À associer des noms à des informations comme des adresses IP",
          "À distribuer des adresses MAC"
        ],
        correct: 1,
        explanation:
          "Le DNS est un système de noms distribué. Il permet notamment de retrouver l’adresse IP associée à un nom de domaine.",
        source: "https://datatracker.ietf.org/doc/html/rfc1034"
      },
      {
        question: "Quel port est classiquement utilisé par le service DNS ?",
        answers: ["22", "53", "443"],
        correct: 1,
        explanation:
          "DNS utilise classiquement le port 53, en UDP pour de nombreuses requêtes et en TCP lorsque le protocole ou la taille de la réponse l’exige.",
        source: "https://datatracker.ietf.org/doc/html/rfc1035"
      }
    ]
  },

  systemes: {
    label: "Systèmes",
    icon: "🖥️",
    description:
      "Windows, Linux, annuaire et virtualisation : testez vos réflexes d’administration.",
    questions: [
      {
        question: "Quel est le rôle principal d’Active Directory Domain Services ?",
        answers: [
          "Compresser les fichiers utilisateurs",
          "Stocker et administrer les objets d’un réseau",
          "Remplacer tous les pare-feu du réseau"
        ],
        correct: 1,
        explanation:
          "AD DS organise les comptes, ordinateurs, groupes et autres objets dans un annuaire hiérarchique, avec authentification et contrôle d’accès.",
        source:
          "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview"
      },
      {
        question: "Pourquoi le DNS est-il essentiel dans un domaine Active Directory ?",
        answers: [
          "Il permet notamment aux clients de localiser les contrôleurs de domaine",
          "Il chiffre automatiquement tous les mots de passe",
          "Il remplace les stratégies de groupe"
        ],
        correct: 0,
        explanation:
          "Les clients et contrôleurs de domaine utilisent DNS pour se localiser, notamment lors de l’authentification et des recherches dans le domaine.",
        source:
          "https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-overview"
      },
      {
        question: "À quoi sert la commande Windows « sfc /scannow » ?",
        answers: [
          "Analyser et réparer les fichiers système protégés",
          "Créer un nouvel utilisateur local",
          "Afficher uniquement la configuration IP"
        ],
        correct: 0,
        explanation:
          "System File Checker vérifie l’intégrité des fichiers système protégés et tente de remplacer ceux qui sont incorrects.",
        source:
          "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sfc"
      },
      {
        question: "Qu’est-ce qu’un hyperviseur ?",
        answers: [
          "Un service de résolution de noms",
          "Une technologie permettant d’exécuter et d’isoler des machines virtuelles",
          "Un format de partition de disque"
        ],
        correct: 1,
        explanation:
          "Un hyperviseur fournit les ressources virtualisées nécessaires à l’exécution de plusieurs machines virtuelles isolées sur un même hôte.",
        source:
          "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview"
      },
      {
        question: "Sous Linux, quelle commande modifie les permissions d’un fichier ?",
        answers: ["chmod", "pwd", "ping"],
        correct: 0,
        explanation:
          "La commande chmod modifie les bits de permission d’un fichier ou d’un répertoire pour le propriétaire, le groupe et les autres utilisateurs.",
        source:
          "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html"
      }
    ]
  },

  cybersecurite: {
    label: "Cybersécurité",
    icon: "🛡️",
    description:
      "Hameçonnage, authentification et bonnes pratiques : adoptez les bons réflexes.",
    questions: [
      {
        question: "Quel est l’objectif habituel d’une attaque par hameçonnage ?",
        answers: [
          "Améliorer la qualité du réseau",
          "Tromper une personne pour obtenir des données ou déclencher une action",
          "Mettre à jour automatiquement un logiciel"
        ],
        correct: 1,
        explanation:
          "Le phishing imite une source de confiance pour pousser la victime à révéler des informations, ouvrir une pièce jointe ou suivre un lien malveillant.",
        source:
          "https://support.microsoft.com/en-us/security/protect-yourself-from-phishing"
      },
      {
        question: "Pourquoi utiliser une authentification multifacteur ?",
        answers: [
          "Pour ajouter une preuve d’identité supplémentaire",
          "Pour supprimer tous les mots de passe du réseau",
          "Pour accélérer la connexion Internet"
        ],
        correct: 0,
        explanation:
          "L’authentification multifacteur combine plusieurs catégories de facteurs. Un mot de passe compromis ne suffit alors plus nécessairement à se connecter.",
        source:
          "https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe"
      },
      {
        question: "Que signifie le principe du moindre privilège ?",
        answers: [
          "Donner les droits administrateur à tous les utilisateurs",
          "Accorder uniquement les droits nécessaires au besoin réel",
          "Supprimer tous les comptes utilisateurs"
        ],
        correct: 1,
        explanation:
          "Chaque compte ne doit disposer que des droits nécessaires à ses missions, afin de limiter l’impact d’une erreur ou d’une compromission.",
        source:
          "https://messervices.cyber.gouv.fr/guides/recommandations-pour-ladministration-securisee-des-si-reposant-sur-ad"
      },
      {
        question: "Face à un message inattendu demandant une action urgente, quel réflexe adopter ?",
        answers: [
          "Cliquer rapidement avant l’expiration du délai",
          "Transférer le message à tous ses contacts",
          "Vérifier l’expéditeur et passer par un canal officiel indépendant"
        ],
        correct: 2,
        explanation:
          "L’urgence artificielle est un signal fréquent du phishing. Il faut vérifier la demande sans utiliser directement le lien ou le numéro fourni dans le message.",
        source:
          "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
      },
      {
        question: "Pourquoi appliquer régulièrement les correctifs de sécurité ?",
        answers: [
          "Pour corriger des vulnérabilités connues",
          "Pour augmenter automatiquement la mémoire vive",
          "Pour empêcher toute erreur humaine"
        ],
        correct: 0,
        explanation:
          "Les mises à jour corrigent notamment des vulnérabilités pouvant être exploitées. Elles font partie des mesures fondamentales d’hygiène informatique.",
        source:
          "https://cyber.gouv.fr/publications/guide-dhygiene-informatique"
      }
    ]
  },

  ia: {
    label: "Intelligence artificielle",
    shortLabel: "IA",
    icon: "◈",
    description:
      "IA générative, hallucinations, données et biais : développez un regard critique.",
    questions: [
      {
        question: "Que désigne principalement une IA générative ?",
        answers: [
          "Un système uniquement chargé de sauvegarder des fichiers",
          "Un système capable de créer des contenus comme du texte ou des images",
          "Un protocole de routage dynamique"
        ],
        correct: 1,
        explanation:
          "Une IA générative produit de nouveaux contenus : textes, images, code, sons, vidéos ou autres formats.",
        source:
          "https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative"
      },
      {
        question: "Qu’appelle-t-on une « hallucination » d’une IA générative ?",
        answers: [
          "Une réponse plausible en apparence mais inexacte ou inventée",
          "Une panne matérielle de l’écran",
          "Une réponse systématiquement trop courte"
        ],
        correct: 0,
        explanation:
          "Une IA peut produire une information convaincante mais fausse. Les faits importants doivent donc être vérifiés auprès de sources fiables.",
        source:
          "https://linc.cnil.fr/le-discours-bien-reel-des-contenus-artificiels-13"
      },
      {
        question: "Quel réflexe adopter avant de transmettre des données personnelles à une IA ?",
        answers: [
          "Tout transmettre pour obtenir une réponse plus précise",
          "Vérifier le cadre d’utilisation et limiter les données au strict nécessaire",
          "Remplacer uniquement les majuscules"
        ],
        correct: 1,
        explanation:
          "Il faut connaître les règles applicables à l’outil, éviter les données inutiles ou confidentielles et respecter les principes de protection des données.",
        source:
          "https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative"
      },
      {
        question: "Pourquoi une validation humaine reste-t-elle importante ?",
        answers: [
          "Parce qu’une IA ne peut jamais produire de texte",
          "Parce que les résultats peuvent comporter des erreurs ou des biais",
          "Uniquement pour ralentir le traitement"
        ],
        correct: 1,
        explanation:
          "Les systèmes d’IA peuvent se tromper, manquer de contexte ou reproduire des biais. L’humain doit contrôler les résultats selon leur niveau de risque.",
        source:
          "https://www.cnil.fr/fr/intelligence-artificielle/intelligence-artificielle-de-quoi-parle-t-on"
      },
      {
        question: "D’où peuvent notamment provenir les biais d’un système d’IA ?",
        answers: [
          "De données d’entraînement non représentatives",
          "Uniquement de la vitesse du processeur",
          "Seulement de la taille de l’écran"
        ],
        correct: 0,
        explanation:
          "Des données déséquilibrées ou non représentatives peuvent conduire le système à produire des résultats discriminatoires ou moins fiables pour certains publics.",
        source:
          "https://www.cnil.fr/fr/intelligence-artificielle/intelligence-artificielle-de-quoi-parle-t-on"
      }
    ]
  },

  "green-it": {
    label: "Green IT",
    icon: "🌱",
    description:
      "Cycle de vie, sobriété et écoconception : mesurez l’impact de vos choix numériques.",
    questions: [
      {
        question: "Selon les données ADEME publiées en 2022, quelle phase dominait l’empreinte carbone du numérique en France ?",
        answers: [
          "La fabrication des équipements",
          "Le transport des courriels uniquement",
          "La fin de vie des câbles uniquement"
        ],
        correct: 0,
        explanation:
          "L’ADEME indiquait que 78 % de l’impact sur les émissions de gaz à effet de serre était associé à la fabrication des équipements.",
        source:
          "https://infos.ademe.fr/magazine-avril-2022/faits-et-chiffres/numerique-quel-impact-environnemental/"
      },
      {
        question: "Quel geste réduit généralement le mieux l’impact d’un équipement encore fonctionnel ?",
        answers: [
          "Le remplacer chaque année",
          "Prolonger sa durée d’utilisation",
          "Augmenter systématiquement la luminosité"
        ],
        correct: 1,
        explanation:
          "Allonger la durée de vie évite ou retarde la fabrication d’un nouvel équipement, phase particulièrement consommatrice de ressources.",
        source:
          "https://agirpourlatransition.ademe.fr/particuliers/mieux-consommer/numerique/prolonger-vie-telephone-portable"
      },
      {
        question: "Quel choix d’achat est cohérent lorsqu’un matériel neuf n’est pas indispensable ?",
        answers: [
          "Choisir un équipement reconditionné adapté au besoin",
          "Choisir systématiquement le modèle le plus puissant",
          "Acheter deux équipements identiques par précaution"
        ],
        correct: 0,
        explanation:
          "Un équipement reconditionné et correctement dimensionné évite une partie des impacts liés à la fabrication d’un produit neuf.",
        source:
          "https://agirpourlatransition.ademe.fr/particuliers/agir-bureau/agir-entreprise/limiter-impact-numerique-bureau"
      },
      {
        question: "Que cherche à réduire l’écoconception d’un service numérique ?",
        answers: [
          "Uniquement le nombre de développeurs",
          "Les ressources informatiques et énergétiques mobilisées sur tout le cycle de vie",
          "Uniquement la taille du logo"
        ],
        correct: 1,
        explanation:
          "L’écoconception considère le service dans son ensemble : terminaux, réseaux, centres de données, fonctionnalités, contenus et durée de vie des équipements.",
        source:
          "https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
      },
      {
        question: "Quelle question doit être posée avant même de développer un nouveau service numérique ?",
        answers: [
          "Le service répond-il à un besoin réel et est-il nécessaire ?",
          "Peut-on ajouter le plus d’animations possible ?",
          "Peut-on imposer le renouvellement du matériel ?"
        ],
        correct: 0,
        explanation:
          "Le RGESN invite d’abord à interroger la raison d’être du service et la possibilité d’une solution plus sobre, voire non numérique.",
        source:
          "https://ecoresponsable.numerique.gouv.fr/docs/2023/rgesn-referentiel-general-ecoconception-v1.0.1.pdf"
      }
    ]
  }
};

const themeOrder = ["reseau", "systemes", "cybersecurite", "ia", "green-it"];
const params = new URLSearchParams(window.location.search);
let activeTheme = QUIZZES[params.get("theme")] ? params.get("theme") : "reseau";
let questionIndex = 0;
let score = 0;
let answered = false;

const elements = {
  title: document.querySelector("#quiz-title"),
  description: document.querySelector("#quiz-description"),
  themes: document.querySelector("#quiz-themes"),
  counter: document.querySelector("#question-counter"),
  liveScore: document.querySelector("#live-score"),
  progressTrack: document.querySelector("#progress-track"),
  progressBar: document.querySelector("#progress-bar"),
  questionView: document.querySelector("#question-view"),
  questionIcon: document.querySelector("#question-icon"),
  questionCategory: document.querySelector("#question-category"),
  questionText: document.querySelector("#question-text"),
  answerList: document.querySelector("#answer-list"),
  feedback: document.querySelector("#answer-feedback"),
  feedbackIcon: document.querySelector("#feedback-icon"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackExplanation: document.querySelector("#feedback-explanation"),
  sourceLink: document.querySelector("#source-link"),
  nextButton: document.querySelector("#next-question"),
  result: document.querySelector("#quiz-result"),
  resultIcon: document.querySelector("#result-icon"),
  resultTitle: document.querySelector("#result-title"),
  resultMessage: document.querySelector("#result-message"),
  finalScore: document.querySelector("#final-score"),
  restartButton: document.querySelector("#restart-quiz")
};

function renderThemeNavigation() {
  elements.themes.replaceChildren();

  themeOrder.forEach((key) => {
    const theme = QUIZZES[key];
    const link = document.createElement("a");
    link.href = `quiz.html?theme=${key}`;
    link.className = `quiz-theme-link${key === activeTheme ? " active" : ""}`;

    if (key === activeTheme) {
      link.setAttribute("aria-current", "page");
    }

    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = theme.icon;

    const label = document.createElement("b");
    label.textContent = theme.shortLabel || theme.label;

    link.append(icon, label);
    elements.themes.append(link);
  });
}

function startQuiz() {
  questionIndex = 0;
  score = 0;
  answered = false;

  const theme = QUIZZES[activeTheme];
  document.title = `${theme.label} — Learning Arcade`;
  elements.title.textContent = `Quiz ${theme.label}`;
  elements.description.textContent = theme.description;
  elements.result.hidden = true;
  elements.questionView.hidden = false;

  renderThemeNavigation();
  renderQuestion();
}

function renderQuestion() {
  const theme = QUIZZES[activeTheme];
  const question = theme.questions[questionIndex];
  const currentNumber = questionIndex + 1;

  answered = false;
  elements.feedback.hidden = true;
  elements.feedback.classList.remove("correct", "incorrect");
  elements.answerList.replaceChildren();
  elements.questionIcon.textContent = theme.icon;
  elements.questionCategory.textContent = theme.label;
  elements.questionText.textContent = question.question;
  elements.counter.textContent = `Question ${currentNumber} sur ${theme.questions.length}`;
  elements.liveScore.textContent = `Score : ${score}`;
  elements.progressTrack.setAttribute("aria-valuenow", String(currentNumber));
  elements.progressBar.style.width = `${(currentNumber / theme.questions.length) * 100}%`;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";

    const marker = document.createElement("span");
    marker.className = "answer-marker";
    marker.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = answer;

    button.append(marker, text);
    button.addEventListener("click", () => selectAnswer(index));
    elements.answerList.append(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = QUIZZES[activeTheme].questions[questionIndex];
  const buttons = Array.from(elements.answerList.querySelectorAll(".answer-button"));
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) score += 1;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("incorrect");
    }
  });

  elements.liveScore.textContent = `Score : ${score}`;
  elements.feedback.hidden = false;
  elements.feedback.classList.add(isCorrect ? "correct" : "incorrect");
  elements.feedbackIcon.textContent = isCorrect ? "✓" : "×";
  elements.feedbackTitle.textContent = isCorrect
    ? "Bonne réponse"
    : `Réponse incorrecte — la bonne réponse était ${String.fromCharCode(65 + question.correct)}.`;
  elements.feedbackExplanation.textContent = question.explanation;
  elements.sourceLink.href = question.source;
  elements.nextButton.innerHTML =
    questionIndex === QUIZZES[activeTheme].questions.length - 1
      ? 'Voir mon résultat <span aria-hidden="true">→</span>'
      : 'Question suivante <span aria-hidden="true">→</span>';
  elements.feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  if (!answered) return;

  if (questionIndex < QUIZZES[activeTheme].questions.length - 1) {
    questionIndex += 1;
    renderQuestion();
    elements.questionText.focus({ preventScroll: true });
    return;
  }

  showResult();
}

function showResult() {
  const total = QUIZZES[activeTheme].questions.length;
  const ratio = score / total;

  elements.questionView.hidden = true;
  elements.result.hidden = false;
  elements.finalScore.textContent = `${score}/${total}`;

  if (ratio === 1) {
    elements.resultIcon.textContent = "🏆";
    elements.resultTitle.textContent = "Sans faute !";
    elements.resultMessage.textContent =
      "Excellent résultat : vos fondamentaux sont solides.";
  } else if (ratio >= 0.6) {
    elements.resultIcon.textContent = "👏";
    elements.resultTitle.textContent = "Très bon résultat";
    elements.resultMessage.textContent =
      "Vous maîtrisez l’essentiel. Les ressources proposées vous aideront à consolider les derniers points.";
  } else {
    elements.resultIcon.textContent = "💡";
    elements.resultTitle.textContent = "Continuez à apprendre";
    elements.resultMessage.textContent =
      "Chaque erreur est une occasion d’apprendre. Reprenez le quiz et consultez les explications.";
  }

  elements.result.focus({ preventScroll: false });
}

elements.nextButton.addEventListener("click", nextQuestion);
elements.restartButton.addEventListener("click", startQuiz);

startQuiz();
