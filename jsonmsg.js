
    document.addEventListener("DOMContentLoaded", function() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('title').textContent = data.title;
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
