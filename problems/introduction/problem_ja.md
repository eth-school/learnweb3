このワークショップで使うディレクトリを作りましょう。

次のコマンドを実行して、`learnweb3` ディレクトリを作ります。

```bash
mkdir learnweb3
```

`learnweb3` ディレクトリに移動しましょう。

```bash
cd learnweb3
```

次のコマンドで `introduction.js` ファイルを作成します。

```bash
touch introduction.js
```
 (Windowsを使っているのであれば `type NUL > introduction.js`)

お好みのエディタでファイルを開きます。次の文を書き足しましょう。

```js
console.log('hello');
```

ファイルを保存します。次のコマンドを実行し、あなたのプログラムが正しく動くか確認しましょう。

```bash
learnweb3 verify introduction.js
```

