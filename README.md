# Andersonnascimentoafsn Utils

`andersonnascimentoafsn-utils` é um pacote de funções utilitárias para Node.js que facilita a manipulação e formatação de dados em várias categorias, como datas e números.

## Instalação

Você pode instalar o pacote usando npm:

```bash
   npm install andersonnascimentoafsn-utils
```

## Uso

Atualmente, o pacote inclui utilitários para conversão entre formatos de tempo e valores decimais. A classe TimeConverter possui dois métodos estáticos para essas conversões:

## Métodos

 - decimalToTime(decimal): Converte um valor decimal em uma string de tempo formatada (HH:MM).
 - timeToDecimal(time): Converte uma string de tempo (HH:MM) em um valor decimal.

## Exemplos

#### Converter tempo em formato decimal para formato HH:MM

```js
   const { TimeConverter } = require('andersonnascimentoafsn-utils')

    let timeString = TimeConverter.decimalToTime(8.833)
    console.log(timeString) // Saída: "08:50"
```

#### Converter tempo em formato HH:MM para decimal
```js
  const { TimeConverter } = require('andersonnascimentoafsn-utils');

  let decimal = TimeConverter.timeToDecimal("08:50");
  console.log(decimal); // Saída: 8.833
```

## Contribuindo

Sinta-se à vontade para contribuir com o pacote adicionando mais funções de utilidades. Faça um fork do repositório, faça suas alterações e submeta um pull request para revisão.

## Licença
Este pacote está disponível sob a licença MIT.
