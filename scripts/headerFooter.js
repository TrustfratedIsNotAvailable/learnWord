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

    //index.html: Load the header and footer dynamically
    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');

    //learn.html:
    loadHTML('header.html', 'header-placeholder-learn');
    loadHTML('footer.html', 'footer-placeholder-learn');

    //FAQ.html
    loadHTML('header.html', 'header-placeholder-FAQ');
    loadHTML('footer.html', 'footer-placeholder-FAQ');

