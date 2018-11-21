For å holde ting organisert kan vi lage en ny katalog for denne workshopen.

Kjør denne kommandoen for å lage en katalog som heter `learnweb3` (eller noe annet om du ønsker):

```bash
mkdir learnweb3
```

Bytt til `learnweb3` katalogen:

```bash
cd learnweb3
```

Lag en fil som heter `introduction.js`:

```bash
touch introduction.js
```
 eller hvis du bruker Windows,

```bash
type NUL > introduction.js
```
(`type` er en del av kommandoen!)

Åpne filen i din favoritt editor og legg til følgende tekst:

```js
console.log('hello');
```

Lagre filen, deretter sjekker du om programmet er korrekt ved å kjøre følgende kommando:

```bash
learnweb3 verify introduction.js
```
