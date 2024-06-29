// ad.js
document.getElementById('open-ad').addEventListener('click', function() {
            var adContent = document.getElementById('ad-content');
            var iframe = document.createElement('iframe');
            iframe.src = 'https://play.thietkeweb30s.org/p/chatdemo.html';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.style.border = '0';
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';

            adContent.querySelector('p').appendChild(iframe);
            adContent.style.display = 'block';
        });

        document.getElementById('close-ad').addEventListener('click', function() {
            var adContent = document.getElementById('ad-content');
            adContent.style.display = 'none';
            adContent.querySelector('p').innerHTML = ''; // Remove the iframe
        });
