const prefixes = [
  ['ab-, abs-', 'Loin de', "abuser, aborigène, aberrant, absent, s'abstenir"],
  [
    'dé-, dés-, dis-',
    'Séparé de, différent',
    'Débrancher, désagréable, disjoint, discorde, dissuader, discontinu, discréditer, disparité',
  ],
  ['dia- ', '', 'Diamètre, diagonale'],
  ['extra-', '', 'Extraordinaire, extrapoler, extraterrestre, extraverti'],
  [
    'méta- trans-',
    'Au-delà de',
    'Métalangage, métamorphose, métaphore, métonymie Transparaitre, transpercer, transversal, transport, transcrire, transférer, transmettre, transgresser',
  ],
  ['ultra-', '', 'Ultrason, ultraviolet, ultraplat'],
  [
    'ex-, é-, en-',
    'Hors de',
    "Expatrier, extérieur, exportation, émerger, éruption S'enfuir, emporter, entrainer, envoler",
  ],
  [
    'TÉLÉ-',
    'Loi',
    'Télépathe, téléférique, téléphone, télescope, téléviser, télécharger',
  ],
  [
    'a-, ad-',
    '',
    'Amener, a(p)procher, a(c)crocher, a(t)taquer, adhérent, adjoindre',
  ],
  [
    'co',
    'Avec',
    'Coopérer, collaborer, communiquer, connaitre, correspondre, copain, compagnie',
  ],
  [
    'sy- ',
    'Avec, ensemble',
    'Syllabe, symbole, synonyme, symétrie, syntaxe, synthèse, sympathie',
  ],
  ['a-, an-', '', 'Apesanteur, amoral, anarchie, anesthésie analphabète'],
  [
    'anti-',
    'Contre, contraire',
    'Antipathique, antiphrase, antithèse, antipode, antonyme',
  ],
  ['dys-', 'Altéré', 'Dyslexie, dysfonctionnement'],
  ['e-, é-', 'Privé de', 'e(f)feuiller, e(f)facer, édenté, égorger'],
  [
    'in-, im-, il-, ir-',
    'Contraire',
    'Insupportable, impossible, illégal, illettré, irréversible',
  ],
  [
    'mal-, mau-, mé-',
    'Négation, mauvais',
    'Malpropre, maudire, médire, mésentente, méconnaissable',
  ],
  [
    'anté-, anti- pré-',
    'Avant',
    'Antécédent, antichambre, Préfixe, prévenir, préface, préambule, précéder, précurseur, prévoir',
  ],
  ['pro-', '', 'Prologue, programme, pronostic, prophète'],
  [
    'post',
    'Après',
    'Postérieur, postérité, postnatal, postopératoire, à posteriori',
  ],
  [
    'circon- péri- ',
    'Autour',
    'Circonférence, circonflexe, circonscription, circonstancié Périphrase, périscolaire, périmètre, périphérie',
  ],
  [
    'in- en- ',
    "À l'intérieur de",
    'Inflammable, intérieur, importer, immersion Enterrer (mettre dans la terre), encadrer, embrasser (prendre dans ses bras)',
  ],
  [
    'entre-, inter-',
    'Entre, réciproque',
    'Entrevue, interrompre, interclasse, intérim, interligne',
  ],
  [
    'ob-',
    "devant, à l'opposé de",
    'Objecter, obnubilé, obstacle, obstruer, o(p)pression',
  ],
  [
    'par-',
    "À travers, jusqu'au",
    'Parcourir, parcours, pardonner, parfait, parvenir',
  ],
  [
    'per- ,bout',
    'Pérenne, perdurer, perméable, perfection, permanent, perpétuer, persévérer, persister',
  ],
  [
    'para-',
    'à côté de',
    'Paragraphe, parallèle, paramédical, paramètre, paraphrase, parenthèse, paronyme',
  ],
  [
    'sub-, sou-, sous-',
    'Sous',
    'Subordonnée, submerger, soumission, sous-entendre',
  ],
  [
    'sup-',
    'sur, au-dessus',
    'Superflu, supérieur, superposer, superviser, supermarché',
  ],
  [
    'bi- di-',
    'Deux, double',
    '- Bigamie, bicolore, bilingue, bimensuel, binôme - Diptyque, dioxyde',
  ],
  ['hémi-', 'Demi, moitié', 'Hémistiche, hémisphère, hémiplégie, hémicycle'],
  [
    'super-, supra-, sur- hyper-',
    "Idée d'excès",
    'Supersonique, surproduction Hypersensible, hyperactif, hyperbole, hyperonyme',
  ],
  ['hypo-', "Idée d'insuffisance", 'Hypoglycémie, hyponyme, hypothèse'],
  [
    'r-, re-, ré',
    'De nouveau',
    'Remettre, réécrire, reprise, refaire, rechuter, redire, au revoir, récurrent',
  ],
  ['re-', 'Retour en arrière', 'Rentrer, retour, retrait, reculer, retourner'],
  [
    'rétro-',
    '',
    'Rétrocéder, rétrograder, rétroviseur, rétroactif, rétrospectif',
  ],
];

export default prefixes;
