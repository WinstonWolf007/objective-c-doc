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
        "Les Variables",
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
        "Les Variables",
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
        "Les Variables",
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
        "Les Variables",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Les valeurs</h2>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Il est important de respecter le type. Par exemple, on ne peut pas mettre un chiffre dans un type "float" ou "double"</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 20px;"><br>Si une valeur n\'est pas avec le bon type il y aura une erreur</p>',
            '<p style="color: rgb(204, 204, 204); font-family: sans-serif; font-size: 15px;"><br>Oublie pas le ";" à la fin de chaque ligne ;)</p>',
        ],
        [
            "// correcte",
            "int years = 10;",
            "",
            "// incorrecte",
            "char num = 5; // si tu veux mettre un int dans un char fait : char num = '5';"
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),

    new Create(
        "Les Variables",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Spécification...</h2>',
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
        "Les Variables",
        [
            '<h2 style="color: rgb(249, 194, 46); font-family: sans-serif; text-align: center;">Chapitre 1 terminer</h2>',
        ],
        [
        ],
        "objectivec", 10,
        "code", "title", "describle"
    ),
]

let framesIdx = -1;

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


