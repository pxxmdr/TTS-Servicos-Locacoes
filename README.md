# TTS Serviços e Locações Industriais

Site institucional da **TTS**, empresa de São Paulo fundada em 2009 que atua com locação de máquinas de corte e solda, terraplanagem, estruturas metálicas e manutenção industrial.

O objetivo do site é apresentar a empresa e **levar o visitante ao contato direto pelo WhatsApp**, com mensagens prontas conforme o serviço de interesse.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sem back-end](https://img.shields.io/badge/arquitetura-front--end%20est%C3%A1tico-1F1857)

---

## Conceito visual

A direção de arte se chama **CHAPA**: peso, escala e a linguagem de chapas de aço e portões industriais.

- **Abertura em portão:** dois painéis de aço com rebites e uma linha amarela se abrem ao carregar a página, revelando o título, a foto e os detalhes em sequência.
- **Tipografia monumental:** títulos em caixa alta e escala grande, sempre alinhados à esquerda.
- **Capítulos alternados:** seções em azul profundo se alternam com chapas de creme e de amarelo, para dar descanso visual.
- **Iluminação cinematográfica:** fotos industriais com tratamento em tons de azul e faíscas, em contraste com o fundo escuro.

### Paleta (baseada no brandbook da TTS)

| Cor | Hex | Uso | Variável CSS |
| --- | --- | --- | --- |
| Azul profundo | `#1F1857` | Chapas e painéis | `--n2` |
| Azul-noite | `#100C3A` | Fundo principal | `--n1` |
| Azul mais escuro | `#0A0826` | Rodapé e detalhes | `--n0` |
| Amarelo industrial | `#FBC21F` | Botões, destaques e luz | `--y` |
| Creme | `#FFE6A6` | Títulos e seções de descanso | `--c` |
| Creme claro | `#FFF3D1` | Texto corrido | `--ct` |
| Vermelho | `#FE5048` | Uso pontual (sinal de atendimento) | `--r` |

### Tipografia

O brandbook define **Cardinel** (títulos) e **Anantason** (textos). Como são fontes que podem não ter licença para web, o site usa substitutas próximas do Google Fonts:

- Títulos: **Big Shoulders Display**
- Textos: **Barlow**

---

## Funcionalidades

- **Botões de WhatsApp** com mensagem pré-preenchida, usando o link oficial `wa.me`. Há uma mensagem geral e uma mensagem específica para cada serviço (estruturas metálicas, manutenção, terraplanagem e locações).
- **Barra fixa de WhatsApp no celular**, que aparece depois da primeira tela.
- **Menu em tela cheia no celular**, com transição e fechamento pelo toque ou pela tecla `Esc`.
- **Revelações durante a rolagem**: textos que sobem e fotos reveladas por máscara, usando `IntersectionObserver`.
- **Paralaxe leve** na foto do topo e **barra de progresso** de leitura.
- **Microinterações**: botões com preenchimento animado, links com sublinhado desenhado, linhas de serviço que acendem ao passar o mouse.
- **Botão de copiar e-mail**, com confirmação visual e alternativa para navegadores que bloqueiam a cópia automática.
- **Parceiros e fornecedores** exibidos em blocos próprios na seção Sobre.

### Acessibilidade e desempenho

- Link "Ir para o conteúdo", `aria-label` e `aria-expanded` no menu, foco visível e textos alternativos nas imagens.
- Respeita a preferência do sistema por **menos movimento** (`prefers-reduced-motion`).
- Funciona sem JavaScript para leitura (o conteúdo é exibido sem as animações).
- Sem frameworks nem dependências, animações baseadas em `transform`, `opacity` e `clip-path`, imagens otimizadas e carregamento preguiçoso (`lazy`) nas fotos abaixo da primeira tela.
- Layout responsivo, pensado primeiro para o celular.

---

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, `clip-path`, animações e transições)
- JavaScript puro (ES6+), sem bibliotecas
- Google Fonts (Big Shoulders Display e Barlow)

Não há back-end, banco de dados nem etapa de build. O botão de WhatsApp é um link comum e não exige servidor.

---

## Estrutura do projeto

```text
tts-site/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── imagens/
    ├── logo-tts-branco.png
    ├── hero-solda.jpg
    ├── locacao-solda.jpg
    ├── escavadeira-obra.jpg
    ├── logos-parceiros.jpg
    └── logos-fornecedores.jpg
```

---

## Como rodar localmente

1. Abra a pasta do projeto no **VS Code** (`Arquivo > Abrir Pasta`).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Também é possível abrir o `index.html` direto no navegador. É necessária conexão com a internet para carregar as fontes.

---

## Como personalizar

### Número e mensagens do WhatsApp

Tudo fica no topo de `js/script.js`:

```js
const WA = '5511948661405'; // 55 + DDD + número, somente dígitos
const MSG = { def: '...', loc: '...', est: '...', man: '...', ter: '...', lcs: '...' };
```

| Chave | Onde é usada |
| --- | --- |
| `def` | Mensagem geral: cabeçalho, topo, contato e barra do celular |
| `loc` | Botão da seção de locação |
| `est` | Linha "Estruturas metálicas" |
| `man` | Linha "Manutenção" |
| `ter` | Linha "Terraplanagem" |
| `lcs` | Linha "Locações" |

Para criar um novo botão, use o atributo `data-wa` com uma das chaves. O script monta o link e codifica a mensagem automaticamente:

```html
<a class="btn" data-wa="def">Solicitar pelo WhatsApp<b></b></a>
```

### Cores e tamanhos

Edite as variáveis do bloco `:root` no início de `css/style.css`.

### Textos e seções

Edite o `index.html`. Os blocos de imagem que podem ser trocados estão marcados com comentários do tipo `FOTO: trocar a imagem aqui`.

### Fotos

As fotos ficam em `imagens/`. Para trocar, salve a nova imagem com o mesmo nome ou altere o `src` no `index.html`. Recomendação: JPEG com até cerca de 1500 px de largura.

---

## Direitos e uso

A marca, os logotipos, os textos e as imagens pertencem à TTS e aos respectivos titulares, e não devem ser reutilizados sem autorização.

---

## Desenvolvedor

| Nome | GitHub | LinkedIn |
| --- | --- | --- |
| Pedro Henrique Martins dos Reis | [@pxxmdr](https://github.com/pxxmdr) | [Perfil](https://www.linkedin.com/in/pedro-reis-00a601324/) |
| Raul Victor de Oliveira Assis | [@usuario-do-raul](https://github.com/raulvictor11) | [Perfil](https://www.linkedin.com/in/raul-assis-353a31430/) |
