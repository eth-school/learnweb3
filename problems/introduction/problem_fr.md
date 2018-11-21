Pour rester organisé, créons un dossier pour ce TP.

Exécutez cette commande pour créer un dossier nommé `learnweb3` (ou quelque chose d'autre si vous préférez) :

```bash
mkdir learnweb3
```

Allez dans le dossier `learnweb3` avec cette commande :

```bash
cd learnweb3
```

Créez un fichier nommé `introduction.js` :

```bash
touch introduction.js
```

ou si vous êtes sur Windows :
```bash
type NUL > introduction.js
```
( `type` fait partie de la commande ! )

Ouvrez le fichier dans votre éditeur favori, et ajoutez ce texte :

```js
console.log('hello');
```

Sauvegardez le fichier, puis vérifiez si votre programme s'exécute correctement avec cette commande :

```bash
learnweb3 verify introduction.js
```

Au passage, tout au long de ce tutoriel, vous pouvez donner nommer les fichiers comme bon vous semble, donc si vous voulez utiliser quelque chose comme `lesChatsSontGeniaux.js` comme nom de fichier pour tous les exercices, vous pouvez. Assurez-vous juste d'exécuter :

```bash
learnweb3 verify lesChatsSontGeniaux.js
```

