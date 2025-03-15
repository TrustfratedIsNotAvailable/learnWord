    // Function to load HTML content from an external file
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading HTML:', error);
            });
    }

    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');