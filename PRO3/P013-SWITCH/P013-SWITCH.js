function spustit() {
    let tlacitko = document.getElementById("volba").value.toUpperCase();
    let zprava = "";
    switch (tlacitko) {
        case "Q":
            zprava = "Alex nemá rád lolko";
            break;
        case "W":
            zprava = "Bára Zajíčková vyrábí ošklivé hry";
            break;
        case "E":
            zprava = "Denis hraje Nekhoparu";
            break;
        case "R":
            zprava = "Bára Vomáčková má v ruce moc často telefon";
            break;
        default:
            zprava = "Nevím, co dělám";
            break;
    }
    document.getElementById("odpoved").innerHTML = zprava;
}
