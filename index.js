
const text = fetch('util/lorem.txt')
      .then(response => response.text())
      .then(text => {
        const paragraphs = text.split('\n\n');
        const formattedText = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
        document.getElementById('content').innerHTML = formattedText;
      })
      .catch(error => console.error('Error loading text file:', error));

      const dropdown = document.addEventListener('DOMContentLoaded', function () {
        const dropdownButton = document.getElementById('dropdownButton');
        const dropdownContent = document.getElementById('dropdownContent');
    
        dropdownButton.addEventListener('click', function () {
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', function (event) {
            if (!event.target.matches('#dropdownButton')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    });
    