<a name="String"></a>
#字串
　- 注意事項
    - 字串請使用單引號 ''
    - 如果字串超過 100 個字元，請使用字串連接符號[ \ ]換行。
    - 過度的長字串連接可能會影響效能。
    - 當以程式方式建構字串時，請使用模板字串而不是字串連接。
    - 千萬不要在字串中使用 eval()，會造成許多XSS的漏洞。

  - 字串使用單引號

    ```JavaScript
    var name = 'Danny';
    ```
  - 如果字串超過 100 個字元，請使用字串連接符號[ \ ]換行。

    ```JavaScript
    var name = 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee\
                AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee'
    ```
  - 過度的長字串連接可能會影響效能。
  - 當以程式方式建構字串時，請使用模板字串而不是字串連接。

    ```JavaScript
    function setName(name) {
      return `Hello, ${name} !`;
    }
    console.log(setName('Danny'));
    ```
  - 千萬不要在字串中使用 eval()，會造成許多XSS的漏洞。
