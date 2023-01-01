/*

args1: Title
args2: Texte
args3: Code
args4: Lang
args5: Time (write each letter)
args6: Id of <code>
args7: Id of <h1>title</h1>
args8: Id of <div>describle</div>

*/

const frames = [
    new Create(
        "Introduction",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">C\'est quoi l\'objective c ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Objective-C est un langage de programmation orienté objet qui a été créé dans les années 1980. Il a été développé pour être utilisé sur les systèmes d\'exploitation macOS et iOS d\'Apple, ainsi que sur Linux. Objective-C est basé sur le langage de programmation C, mais ajoute des concepts de programmation orientée objet comme les classes et les méthodes. Il est souvent utilisé pour développer des applications pour Mac et iPhone.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Quand tu auras fini l\'apprentissage de ce langage. Tu connaîtras aussi les bases du langage c (presque pareil)</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Dans se tutoriel (simplifier) tu apprendras les bases du langages et comment manipuler ton arduino</p>',
        ],
        [

        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Introduction",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Comment créer un commentaire ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Un commentaire est un bout de texte qui servira à documenter ton code. Le programme va ignorer cette partie</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Ici comme dans presque tous les langages, il existe 2 façons de crée un commentaire.</p>',
          '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>Un court (sur une seul ligne)</li><li>Un long (sur plusieurs ligne)</li></ul>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Le court se fera avec deux barres obliques "//"</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Le long se fera avec une barre oblique suivie de deux astérisques et d\'une barre oblique "/**/"</p>',
        ],
        [
            "// ceci est un commentaire court sur une ligne",
            "",
            "/* ceci est un commentaire long sur une seul ligne */",
            "",
            "/*",
            "  ceci est un commentaire long sur plusieurs ligne",
            "  hello",
            "  world",
            "  etc...",
            "*/"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Introduction",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">C\'est quoi la structure du code arduino ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">En utilisant le arduino, tu utiliseras plusieurs fonctions pour exécuter ton code de différente façon</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Voici les principaux fonctions:</p>',
          '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>setup(), exécuté au démarage une seul fois</li><li>loop(), exécuté en boucle</li></ul>',
        ],
        [
            "void setup() {",
            "    // Code exécuté une seul fois. Utile quand tu veux configurer quelque chose.",
            "}",
            "",
            "void loop() {",
            "    // Code exécuté en boucle. Utile quand tu veux faire des changements (exemple: Changé le mode d\'une broche)",
            "}",
            "",
            "// plus tard dans le tutoriel, il y aura des explications plus détaillé sur les fonctions"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Chapitre #1</h2>',
          '<h1 style="color: rgb(204, 204, 204); font-family: sans-serif; text-align: center;">Les Variables</h1>'
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 1/10",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">C\'est quoi une variable ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Une variable est une donnés variable que l\'on stocke dans la mémoire de l\'ordinateur. Grâce à son nom, nous pouvons aller rechercher sa valeur. Comme une adresse d\'une maison.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;">Pour pouvoir déclarer une variable en objective-c. On aura besoin de mettre un type, un nom et une valeur.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif;">(voir code gauche)</p>'
        ],
        [
          "int years = 10;",
          "",
          "// type: int",
          "// nom: 'years'",
          "// =",
          "// valeur: 10"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 2/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les types</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Un type de variable est une caractéristique d\'une variable qui définit le genre de données que cette variable peut contenir. Est-ce-que c\'est un nombre ? Un nombre à virgule ? Une chaine de caratère ? [...]</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Voici les principaux types que l\'on peut retrouver dans le langage objective-c:</p>',
            '<table><tr><th>Types</th><th>Definition</th><th>Syntaxe</th></tr><tr><td>Nombre</td><td>Nombre positif et négatif</td><td>int</td></tr><tr><td>Nombre à virgule court</td><td>Nombre qui peut avoir 7 chiffre apprès la virgule</td><td>float</td></tr><tr><td>Nombre à virgule long</td><td>Nombre qui peut avoir 15 chiffre apprès la virgule</td><td>double</td></tr><tr><td>Booléenne</td><td>Valeur qui représente vrai ou faux (true, false)</td><td>bool</td></tr><tr><td>Lettre</td><td>Valeur qui contient 1 seule lettre</td><td>char</td></tr><tr><td>Chaine de caractère</td><td>Valeur qui contient des lettres (phrase, mot, etc...)</td><td>String</td></tr></table>',
            '',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>!important, pour crée un "string" il existe 2 façons différentes (méthode #1 et méthode #2)</p>',
        ],
        [
            "int years = 17;",
            "float pi = 3.14;",
            "double angle = 17.802318712078201;",
            "bool isOpen = true;",
            "char symbol = '#';",
            "",
            'String name1 = String("wolf"); // methode #1',
            'char name2[] = "Hello World"; // methode #2',
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 3/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">À propos du bool...</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Une variable qui a une valeurs de type bool (true et false) est aussi un nombre (int, short, long)</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Pourquoi ? Car "true" représente 1 et "false" représente 0</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Le bool sont une façon plus clair de représenter 2 états (vrai ou faux)</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il y aura plus de détail dans le chapitre des conditions</p>',
        ],
        [
            "// les 2 veulent dire la même chose",
            "bool a = true;",
            "int a = 1;",
            "",
            "bool b = false",
            "int b = 0",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 4/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les noms</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il y a plusieurs règles à suivre lors de la dénomination des variables:</p>',
            '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>doivent commencer par une lettre ou par un underscore (_). Ils ne peuvent pas commencer par un chiffre.</li><li>ne peuvent pas être des mots réservés du langage (objective-c).</li><li>ne doivent pas contenir d\'espaces ni de caractères spéciaux, Sauf pour l\'underscore (_).</li></ul>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Plusieurs bonnes et mauvaises versions sont représenter à gauche</p>',
        ],
        [
            "// Variables qui sont valide",
            "",
            "int years = 10;",
            "",
            "float angle_du_coin = 4.83;",
            "",
            "char discordBotPrefix = '!';",
            "",
            "// Variables qui ne sont pas valide",
            "",
            "int 10years = 10; // Il commence par un chiffre",
            "",
            "float angle-du^ = 10; // Il contient des caractères spéciaux",
            "",
            "char if = 10; // Il contient un mot réservé au langage informatique (objective-c)",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 5/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les valeurs</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il est important de respecter le type. Par exemple, on ne peut pas mettre un chiffre à virgule dans un type "int"</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Si une valeur n\'est pas avec le bon type il y aura une erreur</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 15px;"><br>Oublie pas le ";" à la fin de chaque ligne ;)</p>',
        ],
        [
            "// correcte",
            "int years = 10;",
            "",
            "// incorrecte",
            "char num = 5; // si tu veux mettre un nombre dans un char fait : char num = '5';"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 6/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Obtimisation...</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Pour plus d\'obtimisation on peut rajouter des mots clefs pour spécifier l\'espace utiliser dans la mémoire pour les variables de type int</p>',
            '<table><tr><th>mot</th><th>bits</th><th>nombre max et min</th></tr><tr><td>short</td><td>16 bits</td><td>-32768 à 32767</td></tr><tr><td>long</td><td>32 bits</td><td>-2147483648 à 2147483647</td></tr><tr><td>long long</td><td>64 bits</td><td>-9223372036854775808 à 9223372036854775807</td></tr></table>'
        ],
        [
            "// differente façon de faire un int (pas obligatoire d'utiliser le short ou long. Tu peux choisir de toujours utilisé le int)",
            "int a = 10;",
            "short int a = 32767;",
            "long int a = 2147483647;",
            "long long int a = 9223372036854775807;",
            "",
            "// Nous somme pas obligé de mettre le mot clef 'int' quand il y a un short ou long (tu choisis)",
            "short a = 32767;",
            "long a = 2147483647;",
            "long long a = 9223372036854775807;",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables 7/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Astuce de déclaration de variable</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Quand tu déclare une variable, tu peux la déclarer en 2 parties</p>',
            '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>Type, Nom</li><li>Nom, Égale, Valeur</li></ul>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Option que tu choisis, si tu préfères le faire en une seul partie ou en 2 parties, c\'est à toi à décider.</p>',
        ],
        [
            "// Type Nom",
            "int num;",
            "float angle;",
            "char letter;",
            "",
            "// Nom, Égale, Valeur",
            "num = 10;",
            "angle = 36.45",
            "letter = 'b'",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables  8/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Privé et Globale</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Une chose à faire attentions quand tu déclares une variable...</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Les variables qui sont créé dans une fonctions ne peuvent pas être utilisé en dehors de celle-ci.</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Pour déclarer une variable "globale" qui peut être utilisé partout. On n\'a juste à le mettre en dehors d\'une fonction</p>',
        ],
        [
            "// Déclaration d'une variable 'globale'",
            "int i;",
            "",
            "void setup() {",
            "  i = 5;",
            "",
            "  // Déclaration d'une variable 'privé'",
            "  char letter = 'a';",
            "}",
            "",
            "void loop() {",
            "  i++;",
            "  // ici on ne peut pas appeler la variable 'letter' car elle est déclaré dans une autre fonction",
            "}"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables  9/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Calcule et Manipulation #1</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>On peut utiliser des signes pour faire des opérations. Celle-ci:</p>',
            '<table><tr><th>Symbole</th><th>Definition</th><th>Exemple</th></tr><tr><td>+</td><td>Addition</td><td>a + b</td></tr><tr><td>-</td><td>Soustraction</td><td>a - b</td></tr><tr><td>*</td><td>Multiplication</td><td>a * b</td></tr><tr><td>/</td><td>Division</td><td>a / b</td></tr><tr><td>%</td><td>Modulo (reste d\'une division)</td><td>a % b</td></tr></table>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Malheureusement il n\'y a pas d\'exposant ou de racine carré. Plus tard dans le tutoriel, dans les fonctions, je vais montrer comment faire un exposant ou racine carré</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Avec les variables on peut augmenter sa valeur (incrémentation) ou la diminuer (décrémentation) avec le signe "operateur="</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Voir exemple à coté</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Dans les exemples j\'utilise par exemple "a += 1;" qui est equivalent à "a = a + 1;"</p>',
        ],
        [
            "int a = 1;",
            "a += 5; // augmente la valeur de 5: donc 1 + 5 = 6",
            "",
            "// racourci seulement disponible pour faire +1 ou -1",
            "a++; // augmente la valeur de +1",
            "a--; // diminue la valeur de -1",
            "",
            "int b = 0;",
            "b += 3;   // 0 + 3 = 3",
            "b -= 1;   // 3 - 1 = 2",
            "b *= 3;   // 2 * 3 = 6",
            "b /= 2;   // 6 / 2 = 3",
            "",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables  10/10",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Calcule et Manipulation #2</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br><br>Maintenant que tu as compris les variables et les opérateurs, essyons de jouer avec en les mélengeants enssembles.</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>!important le resultat de l\'opération doit respecter le type. Voir Exemple dans le code.</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>On peut tout additioner. Variable (nombre) avec nombre, nombre avec nombre, variable (nombre) avec variable (nombre), etc..</p>'
        ],
        [
            "int a = 4;",
            "float b = 2.5;",
            "double result = (a + b) * 2; // (4 + 2.5) * 2 = '13'",
            "/*",
            "   Vu que le resultat est un nombre (int), le float (ou double) va le convertir en nombre a virgule",
            "   Ici le resultat est 13, donc il sera transformer en 13.00",
            "*/",
            "",
            "// l'inverse ((double ou float) -> (int, short, long)) est possible aussi, car le resultat n'est pas un nombre à virgule.",
            "int result = (a + b) * 2;",
            "",
            "// un peut plus de difficulté..",
            "float num1 = 1.5;",
            "float num2 = 0.5;",
            "int addition = num1 + num2; // 1.5 + 0.5 = 2",
            "int num3 = 3;",
            "short num4 = 2;",
            "",
            "long int result = addition * (num4 + num3); // 2 * (2 + 3) = 10",
            "",
            "// si je fais 'int valeur = 1.5 + 1' c'est incorrecte car le resultat est 2.5 et c'est un nombre a virgule. Les (int, short, long) n'accepte pas celle-ci",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Chapitre 1 terminer</h2>',
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Chapitre #2</h2>',
          '<h1 style="color: rgb(204, 204, 204); font-family: sans-serif; text-align: center;">Les Conditions</h1>'
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 1/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">C\'est quoi une condition ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>une condition est une instruction qui permet de vérifier si une certaine expression est vraie ou fausse. Si l\'expression est vraie, alors une certaine portion de code sera exécutée. Si l\'expression est fausse, alors une autre portion de code (optionnelle) sera exécutée.</p>',
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 2/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Exemple</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>(voir les codes à gauche)</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Ici dans l\'exemple #1, on vérifie si le nombre 5 est inférieurs au nombre 10</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>C\'est vrai !! Donc on exécute le code en dessous.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Ici dans l\'exemple #2, on vérifie si le nombre 2 est supérieurs au nombre 3</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>C\'est faux !! Donc on n\'exécute pas le code en dessous.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Donc si on prend cette logique on peut comprendre l\'exemple #3 et #4</p>',
        ],
        [
            "// Exemple #1 (vrai)",
            "if (5 < 10) {",
            "  // code...",
            "}",
            "",
            "// Exemple #2 (faux)",
            "if (2 > 3) {",
            "  // code",
            "}",
            "",
            "",
            "// Exemple #3 et #4 (Inutile mais necéssaire pour la compréhension)",
            "if (true) {",
            "  // code executer",
            "}",
            "",
            "if (false) {",
            "  // code jamais executer",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 3/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Mais comment faire pour executer du code si c\'est faux ???</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Pour exécuter du code si la condition est fausse on peut utiliser le mot clef "else" (pour l\'utiliser toujours avoir un if au dessus)</p>',
        ],
        [
            "if (2 > 3) {",
            "  // code ici",
            "}",
            "else {",
            "  // code ici",
            "}",
            "",
            "// 'si' 2 est supérieurs a 3: execute le code si-dessous",
            "// 'sinon': execute le code si-dessous"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 4/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Mais comment faire pour mettre un autre if qui suit la condition ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Pour rajouter un autre if qui suit la condition (sinon si). On peut mettre le mot clef "else" et "if" enssemble.</p>',
        ],
        [
            "if (2 > 3) {",
            "  // code ici",
            "}",
            "",
            "else if (2 < 3) {",
            "  // code ici",
            "}",
            "",
            "else {",
            "  // code ici",
            "}",
            "// 'si' 2 est supérieurs à 3: execute le code si-dessous",
            "// 'sinon si' 2 est inférieurs à 3: execute le code si-dessous",
            "// 'sinon': execute le code si-dessous"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 5/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les opérateurs de comparaison</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il existe plusieurs opérateurs de comparaison pour les conditions</p>',
          '<table><tr><th>symbole</th><th>definition</th></tr><tr><td>==</td><td>égale à</td></tr><tr><td>!=</td><td>différent de</td></tr><tr><td>></td><td>strictement supérieur à</td></tr><tr><td>>=</td><td>supérieurs ou égale à</td></tr><tr><td><</td><td>strictement inférieur à</td></tr><tr><td><=</td><td>inférieurs ou égale à</td></tr></table>',
        ],
        [
            "if (1 == 1) {",
            "  // code ici",
            "}",
            "",
            "if (2 != 1) {",
            "  // code ici",
            "}",
            "",
            "if (3 > 4) {",
            "  // code ici",
            "}",
            "",
            "if (3 >= 3) {",
            "  // code ici",
            "}",
            "",
            "if (5 < 10) {",
            "  // code ici",
            "}",
            "",
            "if (3 <= 2) {",
            "  // code ici",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 6/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Mettre des conditions dans une condition</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Si tu as plusieurs chose a comparer en même temps qui on un lien il existe des opérateurs pour ça:</p>',
          '<table><tr><th>symbole</th><th>definition</th></tr><tr><td>||</td><td>ou</td></tr><tr><td>&&</td><td>et</td></tr><tr><td>!</td><td>non (inverse une condition, vrai devient faux, faux devient vrai)</td></tr></table>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Voir code gauche pour des exemples</p>',
        ],
        [
            "// si les 2 conditions sont vrai, donc execute le code si-dessous",
            "if (5 > 0 && 5 < 10) {",
            "  // code ici",
            "}",
            "",
            "// si une des 3 condition si-dessous est vrai, donc execute le code si-dessous",
            "if (5 >= 0 || 4 != 5 || 6 != 6 ) {",
            "  // code ici",
            "}",
            "",
            "// si inverse de faux (vrai) est vrai, donc execute le code si-dessous",
            "if (!false) {",
            "  // code ici",
            "}",
            "",
            "// si inverse de vrai (faux) est vrai, donc execute le code si-dessous",
            "if (!true) {",
            "  // code ici",
            "}",
            "",
            "// si inverse de 4 < 5 (faux) est vrai, donc execute le code si-dessous",
            "if (!(4 < 5)) {",
            "  // code ici",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 7/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Et les variables ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Bien évidemment si on ne pourrais pas rajouté de variable (valeur qui varie), les conditions ne servirait à rien.</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Voici quelques exemples...</p>',
        ],
        [
            "int a = 1;",
            "int b = 2;",
            "int c = 3;",
            "",
            "// si la valeur b est plus grand que a et plus petit que c: alors change sa valeurs par 0",
            "if (b > a && b < c) {",
            "  b = 0;",
            "}",
            "else {",
            "  b = 1;",
            "}",
            "",
            "if (!(b != 1)) { // ne pas oublier les parentaise !( <condition> )",
            "  b = 2",
            "}",
            "",
            "// si b est egale a 0 ou a 2: alors change la valeurs de a par b",
            "if (b == 0 || b == 2) {",
            "  a = b",
            "}",
            "else if (b >= 0) {",
            "  b = c",
            "}",
            "else if (b < 0) {",
            "  c = a",
            "}",
            "else {",
            "  a = c",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 8/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les autres type de variable</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>On peut aussi comparer des char, short, bool, float, etc..</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>!important, si vous essayez de comparer 2 types different, exemple: \'a\' et 2, cela va toujours donner faux</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Ecxeption du float \'.00\' qui est égale à sont int, short, long (ex: 2 == 2.00)</p>',
        ],
        [
            "char l_1 = 'a'",
            "char l_2 = 'b'",
            "bool value = true;",
            "",
            "if (l_1 != l_2) {",
            "  // code",
            "}",
            "else {",
            "  // code",
            "}",
            "",
            "// if (true) {}",
            "if (value) { // ici on peut faire 'value == true' mais puisque c'est un bool (vrai ou faux) on peut le mettre sans a avoir a comparer",
            "  // code",
            "}",
            "else if (!value && l_1 == 'a') { // !value = !true = false",
            "  // code",
            "}",
            "else {",
            "  // code",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),
    new Create(
        "Les Conditions 9/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Raccouci pour un cas spécial...</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Si dans la suite de condition (if, else if, else if, else if, etc) c\'est toujours la même valeur qui est comparer, on peut utilisé les mots clefs "switch" et "case"</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>On rajoute le mot clef "break" à la fin de chaque condition pour pouvoir sortir du "switch" (fin de la condition)</p>',
        ],
        [
            "// normal (trop long...)",
            "int num = 5;",
            "",
            "if (num == 1) {",
            "  // code",
            "}",
            "else if (num == 2) {",
            " // code",
            "}",
            "else if (num == 3) {",
            " // code",
            "}",
            "else if (num == 4) {",
            " // code",
            "}",
            "else if (num == 5) {",
            " // code",
            "}",
            "else {",
            "  // code",
            "}",
            "",
            "// racoucci (plus rapide)",
            "int num = 5",
            "",
            "switch (num) {",
            "  case 1: // if num == 1",
            "    // code",
            "    break;",
            "",
            "  case 2: // if num == 2",
            "    // code",
            "    break;",
            "",
            "  case 3: // if num == 3",
            "    // code",
            "    break;",
            "",
            "  case 4: // if num == 4",
            "    // code",
            "    break;",
            "",
            "  case 5: // if num == 5",
            "    // code",
            "    break;",
            "",
            "  default: // else",
            "    // code",
            "    break;",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions 10/10",
        [
          '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Et si on ne met pas le "break" à la fin de chaque case (et default) ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Sa va executer le restant des cases si on oublie le "break"</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il y a une utlité à ne pas mettre le mot clef "break"...</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>(voir code gauche pour un exemple)</p>',
        ],
        [
            "// sa permet de faire un 'ou'",
            "int a = 3;",
            "",
            "if (a == 1 || a == 2 || a == 3) {",
            "  // code",
            "}",
            "",
            "switch (a) {",
            "  case 1:",
            "  case 2:",
            "  case 3:",
            "    // code",
            "    break",
            "}",
            "",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Conditions",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Chapitre 2 terminer</h2>',
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Chapitre #2</h2>',
          '<h1 style="color: rgb(204, 204, 204); font-family: sans-serif; text-align: center;">Les Fonctions</h1>'
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 1/9",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">C\'est quoi une fonction ?</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Une fonction est une portion de code qui effectue une tâche spécifique et qui peut être appelée à partir d\'autres parties du programme. Les fonctions permettent de structurer et de modulariser le code, ce qui peut le rendre plus lisible et plus facile à maintenir</p>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Une fonction en objective-c à besoin de 4 élements pour bien fonctionner:</p>',
          '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>Un Type</li><li>Un Nom</li><li>Des arguments (si il y en a besoin)</li><li>Du code</li></ul>',
        ],
        [
            "int addition(int num1, int num2) {",
            "  return num1 + num2;",
            "}",
            "",
            "// Type: int",
            "// Nom: 'addition'",
            "// Arguments: num1, num2",
            "// Code: [...]",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 2/9",
        [
            '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Les Types</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Comme les varriable, les fonctions ont besoin d\'un type</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Ce type représente la valeur que celle-ci va retourner</p>',
            '<table><tr><th>Types</th><th>Definition</th><th>Syntaxe</th></tr><tr><td>Nombre</td><td>Nombre positif et négatif</td><td>int</td></tr><tr><td>Nombre à virgule court</td><td>Nombre qui peut avoir 7 chiffre apprès la virgule</td><td>float</td></tr><tr><td>Nombre à virgule long</td><td>Nombre qui peut avoir 15 chiffre apprès la virgule</td><td>double</td></tr><tr><td>Booléenne</td><td>Valeur qui représente vrai ou faux (true, false)</td><td>bool</td></tr><tr><td>Lettre</td><td>Valeur qui contient 1 seule lettre</td><td>char</td></tr><tr><td>Chaine de caractère</td><td>Valeur qui contient des lettres (phrase, mot, etc...)</td><td>String</td></tr></table>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Comme les opérations dans les variables. Il faut savoir d\'avance quel type sera retourné</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Par exemple, dans ma fonction "number_2()", à coté du mot clef "return" il y a la valeur 2, qui est un int</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Dans les types de fonction, il y a un nouveau type, le void. (Voir le code gauche)</p>',
            
        ],
        [
            "Le int est le type de la valeur 2",
            "int number_2() {",
            "  return 2;",
            "}",
            "",
            "",
            "// Quand on met le type void, sa veux dire que la fonction retourne rien (le void)",
            "void setup() {",
            "  // code (sans le mot clef 'return')",
            "}",
            "",
            "",
            "// Le type des fonctions indique aussi quel type utiliser pour la variable (récupération du résultat)",
            "int add(int a, int b) {",
            "  return a + b",
            "}",
            "",
            "int result = add(1, 2)",
            "",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 3/9",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Le nom</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il y a exactement les mêmes règles pour nommé une fonction qu\'une variable</p>',
          '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>doivent commencer par une lettre ou par un underscore (_). Ils ne peuvent pas commencer par un chiffre.</li><li>ne peuvent pas être des mots réservés du langage (objective-c).</li><li>ne doivent pas contenir d\'espaces ni de caractères spéciaux, Sauf pour l\'underscore (_).</li></ul>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Plusieurs bonnes et mauvaises versions sont représenter à gauche</p>',
        ],
        [
            "// Correcte",
            "",
            "void func() {}",
            "int additionOfTwoNumbers(int a, int b) {}",
            "char create_discord_tocken() {}",
            "",
            "// Incorrecte",
            "",
            "void for() {} // nom d'un mot clef qui appatient au langages",
            "int 2number(int a, int b) {} // commence par un chiffre",
            "char create-discord@tocken() {} // contient des chaines de caratères spéciaux",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 4/9",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Les arguments</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>un argument dans une fonction est une valeur ou une variable qui est passée à la fonction lors de son appel. Lors de la déclaration de la fonction, vous pouvez spécifier le type et le nom de chaque argument (comme des variable qui non aucune valeur). On peut déclarer une fonction sans argument, si on a pas besoin</p>',
        ],
        [
            "// les arguments sont des variables qui seront utiliser a l'interieur de la fonction",
            "void func(int number, char letter, bool isOpen, float angle) {",
            "  // code",
            "}",
            "",
            "func(10, 'a', true, 33.45);",
            "",
            "",
            "// sans argument",
            "void func2() {",
            "  // code",
            "}",
            "",
            "func2();",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 5/9",
        [
          '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Le code</h2>',
          '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Le code qu\'on met à l\'intérieurs d\'une fonction c\'est le code qui sera exécuté à chaque fois qu\'elle sera appellé.</p>',
        ],
        [
            "int additionInt(int a, int b) {",
            "  return a + b;",
            "}",
            "",
            "int result1 = additionInt(1, 2); // 1 + 2 = 3",
            "int result2 = additionInt(4, 2); // 4 + 2 = 6",
            "int result3 = additionInt(8, 1); // 8 + 1 = 9",
            "int result4 = additionInt(2, 2); // 2 + 2 = 4",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 6/9",
        [
            '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Les fonctions par défaut</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Dans le langage objective c pour le Arduino, il y a des fonctions déjà disponible comme:</p>',
            '<ul style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><li>Serial.println()</li><li>digitalWrite()</li><li>digitalRead()</li><li>pinMode()</li><li>etc...</li></ul>'
        ],
        [
            "void setup() {",
            "  pinMode(12, OUTPUT);",
            "}",
            "",
            "void loop() {",
            "  digitalWrite(12, HIGH);",
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 7/9",
        [
            '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">Serial.println()</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>La fonctions Serial.prinln() sert à afficher une ligne de texte. Elle prend en argument toute les valeurs</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>(voir code gauche)</p>',
        ],
        [
            "void setup() {",
            '  Serial.println("Démarage de l\'Arduino...");',
            '  Serial.println(100);',
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 8/9",
        [
            '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">pinMode()</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>La fonctions pinMode() sert à changer le mode d\'une broche. Elle prend 2 arguments: le numéro de broche et le mode (OUTPUT, INPUT)</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>(voir code gauche)</p>',
        ],
        [
            "void setup() {",
            '  pinMode(12, OUTPUT); // Il y aura du courant qui va sortir de la broche 12.',
            '  pinMode(11, INPUT); // La broche 11 va servir à détecter le courant qui y rentre.',
            "}",
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Fonctions 9/9",
        [
            '<h2 style="color: rgb(224, 26, 79); font-family: sans-serif; text-align: center;">digitalRead() && digitalWrite()</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>La fonctions digitalRead() sert à récupérer un bool (true, false) sur si il y a du courant dans la broche selectionner</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>La fonctions digitalWrite() sert à laisser passer le courrant dans la broche selectionner (HIGH ou LOW)</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>(voir code gauche)</p>',
        ],
        [
            "void setup() {",
            "  pinMode(2, INPUT);",
            "  pinMode(3, OUTPUT);",
            "}",
            "",
            "void loop() {",
            "  bool pin2 = digitalRead(2);",
            "  if (pin2) {",
            "    digitalWrite(3, HIGH);",
            "  }",
            "}"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),
]
///////////////////
// frame -1  = START

let framesIdx = -1;

//
////////////////////

function leftFrame() {
    if (frames[framesIdx].writeCode.finish) {
        if ((framesIdx-1) >= 0) {
            document.getElementById("page").style.animation = "closeFrame forwards .3s";
            framesIdx--;
            setTimeout(() => {
                document.getElementById("page").style.animation = "openFrame forwards .3s";
                frames[framesIdx].start();
            }, 300);
        }
    }

}

function rightFrame() {
    if (framesIdx == -1) {
        document.getElementById("page").style.animation = "closeFrame forwards .3s";
        framesIdx++;
        setTimeout(() => {
            document.getElementById("page").style.animation = "openFrame forwards .3s";
            frames[framesIdx].start();
        }, 300);
    }
    else if (frames[framesIdx].writeCode.finish) {
        if ((framesIdx+1) <= (frames.length-1)) {
            document.getElementById("page").style.animation = "closeFrame forwards .3s";
            framesIdx++;
            setTimeout(() => {
                document.getElementById("page").style.animation = "openFrame forwards .3s";
                frames[framesIdx].start();
            }, 300);
        }
    }
}
