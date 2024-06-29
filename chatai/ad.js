// ad.js
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.textContent = `
        #ad-container {
            position: fixed;
            bottom: 20px;
            right: 0;
            margin: 20px;
            z-index: 99999;
        }

        #ad-content {
            display: none;
            position: fixed;
            align-items: center;
            justify-content: space-between;
            background-color: #eee;
            color: white;
            padding: 10px;
            border-radius: 5px;
            top: 20px;
            width: 90%;
            max-width: 380px;
            right: 10px;
            height: 90%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            z-index: 99999;
        }

        #ad-content button {
            background-color: red;
            color: white;
            border: none;
            padding: 5px;
            border-radius: 5px;
            position: absolute;
            cursor: pointer;
            width: 100px;
            top: 0px;
        }

        #ad-content button:hover {
            background-color: darkred;
        }

        #open-ad {
            display: block;
            background-color: blue;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
        }

        #open-ad:hover {
            background-color: darkblue;
        }

        #ad-content iframe {
            position: absolute;
            top: 20px;
            right: 0;
            height: 90%;
            width: 100%;
            border: 0;
        }
    `;
    document.head.appendChild(style);

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
        <button id="close-ad">TẮT</button>
    `;

    const openAdButton = document.createElement('button');
    openAdButton.id = 'open-ad';
    openAdButton.textContent = 'MỞ';

    adContainer.appendChild(adContent);
    document.body.appendChild(adContainer);
    document.body.appendChild(openAdButton);

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
