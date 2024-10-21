const extractLowestMarkup = () => {
    const items = Array.from(document.querySelectorAll('.your-selector-for-item')); // Update this selector
    const markups = items.map(item => {
        const price = parseFloat(item.querySelector('.your-selector-for-price').innerText.replace('%', '').trim());
        return { item: item.innerText, markup: price };
    });

    const lowestMarkup = markups.reduce((min, current) => (current.markup < min.markup ? current : min));
    return lowestMarkup;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getLowestMarkup') {
        const lowestMarkup = extractLowestMarkup();
        sendResponse(lowestMarkup);
    }
});
