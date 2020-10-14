const inputElement = document.getElementById('roster');

inputElement.addEventListener("change", handleFiles, false);

function handleFiles () {
    const file = this.files[0];

    const reader = new FileReader();

    const parser = new DOMParser();

    reader.onload = (e) => {
        const dom = parser.parseFromString(e.target.result, 'text/html');
        document.body = dom.body;
    };
    reader.readAsText(file)

    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = './pretty-print-styles.css';
    document.head.appendChild(styles);

}
