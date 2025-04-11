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
        { id: 'item2', qty: 'qty2', name: 'Croissant' },
        { id: 'item3', qty: 'qty3', name: 'Chleba' },
        { id: 'item4', qty: 'qty4', name: 'Celzn.bageta' },
        { id: 'item5', qty: 'qty5', name: 'Jablka' },
        { id: 'item6', qty: 'qty6', name: 'Hrušky' },
        { id: 'item7', qty: 'qty7', name: 'Pomeranče' },
        { id: 'item8', qty: 'qty8', name: 'Mandarinky' },
        { id: 'item9', qty: 'qty9', name: 'Blumy' },
        { id: 'item10', qty: 'qty10', name: 'Citrony' },
        { id: 'item11', qty: 'qty11', name: 'Banány' },
        { id: 'item12', qty: 'qty12', name: 'Pórek' },
        { id: 'item13', qty: 'qty13', name: 'Mrkev' },
        { id: 'item14', qty: 'qty14', name: 'Petržel' },
        { id: 'item15', qty: 'qty15', name: 'Cibule' },
        { id: 'item16', qty: 'qty16', name: 'Brambory' },
        { id: 'item17', qty: 'qty17', name: 'Ledový salát' },
        { id: 'item18', qty: 'qty18', name: 'Kysané zelí' },
        { id: 'item19', qty: 'qty19', name: 'Kyselé okurky' },
        { id: 'item20', qty: 'qty20', name: 'Cereálie' },
        { id: 'item21', qty: 'qty21', name: 'Kešu' },
        { id: 'item22', qty: 'qty22', name: 'Mandle' },
        { id: 'item23', qty: 'qty23', name: 'Buráky' },
        { id: 'item24', qty: 'qty24', name: 'Sušenky' },
        { id: 'item25', qty: 'qty25', name: 'Maso' },
        { id: 'item26', qty: 'qty26', name: 'Šunku' },
        { id: 'item27', qty: 'qty27', name: 'Párky' },
        { id: 'item28', qty: 'qty28', name: 'Klobásky' },
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