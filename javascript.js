function generateShareLink() {
    const exportedListUrl = "vyslednyseznam/index.html"; // Změňte na url vašeho seznamu
    return exportedListUrl;
}


function shareList() {
    const link = generateShareLink();
    if (navigator.share) {
        navigator.share({
            title: 'Nákupní seznam',
            url: link
        })
        .then(() => console.log('Sdílení úspěšné'))
        .catch((error) => console.error('Chyba při sdílení:', error));
    } else {
        // Pokud sdílení není podporováno, zkopírujeme odkaz do schránky
        navigator.clipboard.writeText(link).then(() => {
            alert('Odkaz byl zkopírován do schránky: ' + link);
        });
    }
}