// ad.js
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://raw.githubusercontent.com/quangthylove/code/master/chatai/ad.css';
    document.head.appendChild(style);

    const adPlaceholder = document.getElementById('ad-placeholder');

    const adContainer = document.createElement('div');
    adContainer.id = 'ad-container';

    const adContent = document.createElement('div');
    adContent.id = 'ad-content';
    adContent.innerHTML = `
        <p>
            <iframe
                src="https://play.thietkeweb30s.org/p/chatdemo.html"
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </p>
        <button id="close-ad">&times;</button>
    `;

    const openAdButton = document.createElement('button');
    openAdButton.id = 'open-ad';
    openAdButton.textContent = '+';

    adContainer.appendChild(adContent);
    adContainer.appendChild(openAdButton);
    adPlaceholder.appendChild(adContainer);

    const closeAdButton = document.getElementById('close-ad');
    closeAdButton.addEventListener('click', function() {
        adContent.style.display = 'none';
        openAdButton.style.display = 'block';
    });

    openAdButton.addEventListener('click', function() {
        adContent.style.display = 'flex';
        openAdButton.style.display = 'none';
    });
});
