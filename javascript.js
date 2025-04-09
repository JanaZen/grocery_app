function generateShareLink() {
    const exportedListUrl = "seznam.html"; // Změňte na url vašeho seznamu
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


function exportList() {
    const output = [];
    const items = [
        { id: 'item1', qty: 'qty1', name: 'Rohlíky' },
        { id: 'item2', qty: 'qty2', name: 'Chleba' },
        { id: 'item3', qty: 'qty3', name: 'Cel.bageta' },
        { id: 'item4', qty: 'qty4', name: 'Jablka' },
        { id: 'item5', qty: 'qty5', name: 'Hrušky' },
        { id: 'item6', qty: 'qty6', name: 'Pomeranče' },
        { id: 'item7', qty: 'qty7', name: 'Mandarinky' },
        { id: 'item8', qty: 'qty8', name: 'Blumy' },
        { id: 'item9', qty: 'qty9', name: 'Citrony' },
    ];

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const quantity = document.getElementById(item.qty).value;
        if (checkbox.checked && quantity > 0) {
            output.push(`${item.name}: ${quantity}`);
        }
    });

    lastOutput = output.length ? output.join('\n') : 'Žádné položky nebyly vybrány.'; 

    // Nový kód pro otevření nové stránky
    const encodedOutput = encodeURIComponent(lastOutput);
    window.open(`seznam.html?list=${encodedOutput}`, '_blank');
}