// Načtení formuláře
const form = document.getElementById('frm');
const jmeno = document.getElementById('name');
const email = document.getElementById('email');
const zprava = document.getElementById('message');
const vystup = document.getElementById('output');

// Přidání funkce na tlačítko "Odeslat"
function odeslat() {
    // Vytvoření nového div elementu pro zobrazení zprávy
    const obsah = document.createElement('div');
    obsah.innerHTML = '<p>' + jmeno.value + '</p>' + '<p>' + email.value + '</p>' + '<p>' + zprava.value + '</p>';

    // Přidání nově vytvořeného div elementu do výstupního divu
    vystup.appendChild(obsah);

    // Vyčištění formuláře po odeslání
    jmeno.value = '';
    email.value = '';
    zprava.value = '';
};
