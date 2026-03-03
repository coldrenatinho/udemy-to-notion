# 🚀 Udemy to Notion Master

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-10.0-blueviolet.svg)](#)
[![Greasy Fork](https://img.shields.io/greasyfork/v/568180?color=red)](https://greasyfork.org/pt-BR/scripts/568180)

Uma automação profissional para estudantes que utilizam o **Notion** para organizar seus estudos na Udemy. Este script extrai toda a grade curricular de um curso, incluindo seções, títulos das aulas e duração, formatando tudo em uma tabela Markdown pronta para ser convertida em um banco de dados.

---

## 📸 Como funciona?

O script adiciona um botão inteligente no canto inferior esquerdo da tela da Udemy. Ao clicar:
1. Ele **expande automaticamente** todas as seções do curso (mesmo as que estão fechadas).
2. Captura os títulos e durações.
3. Limpa caracteres especiais que quebram tabelas.
4. Copia o resultado direto para sua área de transferência.

## 🛠️ Instalação

1. Instale uma extensão de UserScripts no seu navegador:
   - [Violentmonkey](https://violentmonkey.github.io/) (Recomendado)
   - [Tampermonkey](https://www.tampermonkey.net/)
2. [Clique aqui para instalar o script](https://greasyfork.org/pt-BR/scripts/568180-udemy-to-notion-master)
3. Salve e recarregue a página do curso na Udemy.

## 📋 Como usar no Notion

1. Na página do curso na Udemy, clique no botão **🚀 COPIAR PARA NOTION**.
2. Aguarde as seções serem expandidas e a mensagem de confirmação aparecer.
3. Vá para o seu Notion e dê um `Ctrl + V`.
4. **O segredo:** Após colar a tabela, clique no ícone de 6 pontos ao lado dela e selecione **"Turn into database"**.

## 🚀 Script Code

O código fonte completo está disponível em [udemy-to-notion.user.js](./udemy-to-notion.user.js).

---

## 👤 Autor

Desenvolvido por **Renato Araujo da Silva** - GitHub: [@coldrenatinho](https://github.com/coldrenatinho)

---
*Nota: Este script não possui vínculo oficial com a Udemy. Use para fins de organização pessoal de estudos.*
