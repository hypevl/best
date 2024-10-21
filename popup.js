document.getElementById('findMarkup').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getLowestMarkup' }, (response) => {
            if (response) {
                const { item, markup } = response;
                const url = `https://www.csgoroll.com/top-up/steam/csgo?skin=${encodeURIComponent(item)}`;
                document.getElementById('result').innerText = `Lowest Markup: ${markup}%`;
                window.open(url, '_blank'); // Redirect to the new URL
            } else {
                document.getElementById('result').innerText = 'No markup data found.';
            }
        });
    });
});
