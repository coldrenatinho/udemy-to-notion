// ==UserScript==
// @name        Udemy to Notion Master
// @namespace   Violentmonkey Scripts
// @match       https://www.udemy.com/course/*/learn/*
// @grant       GM_setClipboard
// @version     11.0
// @author      Renato Araujo da Silva (https://github.com/coldrenatinho)
// @description Expande automaticamente todas as seções do curso da Udemy e copia a grade curricular em formato Markdown para o Notion, com formatação limpa.
// @icon        https://www.google.com/s2/favicons?sz=64&domain=udemy.com
// @license     MIT
// ==/UserScript==
(function() {
    'use strict';

    const btn = document.createElement('button');
    btn.innerHTML = '🚀 COPIAR PARA NOTION';

    btn.style = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        padding: 12px 20px;
        background: #a435f0;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Sf Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: transform 0.2s ease;
    `;

    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    document.body.appendChild(btn);

    btn.onclick = async () => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '⏳ Abrindo seções...';
        btn.style.background = '#2d2e2f';

        // 1. Abre todas as seções fechadas
        const togglers = document.querySelectorAll('.js-panel-toggler[aria-expanded="false"]');
        togglers.forEach(t => t.click());

        // 2. Aguarda renderização
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. Monta a tabela Markdown
        const sections = document.querySelectorAll('[data-purpose^="section-panel-"]');
        let markdown = "| Seção / Aula | Status | Links & Mídia | Anotações |\n| :--- | :---: | :--- | :--- |\n";
        let hasContent = false;

        sections.forEach((section) => {
            const sectionTitle = section.querySelector('.ud-accordion-panel-title span')?.innerText.trim();
            if (sectionTitle) {
                // Linha de seção: célula de status vazia, sem links/anotações
                markdown += `| **${sectionTitle.replace(/\|/g, "-")}** | - | - | - |\n`;
            }

            const lectures = section.querySelectorAll('li');
            lectures.forEach((lecture) => {
                const title = lecture.querySelector('[data-purpose="item-title"]')?.innerText.trim();
                if (title) {
                    hasContent = true;
                    const cleanTitle = title.replace(/\|/g, "-");
                    markdown += `| ${cleanTitle} | ⬜ Pendente | | |\n`;
                }
            });
        });

        if (hasContent) {
            GM_setClipboard(markdown);
            btn.innerHTML = '✅ COPIADO!';
            btn.style.background = '#1c843c';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#a435f0';
            }, 3000);
        } else {
            alert("Erro: Certifique-se de que a barra lateral de conteúdo está visível.");
            btn.innerHTML = '❌ ERRO';
            btn.style.background = '#b32d2e';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#a435f0';
            }, 3000);
        }
    };
})();
