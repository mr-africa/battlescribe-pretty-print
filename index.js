const inputElement = document.getElementById('roster');
const clearButton = document.createElement('button')
clearButton.classList = ['clear-button']
clearButton.textContent = 'clear'

inputElement.addEventListener('change', handleFiles, false);

clearButton.addEventListener('click', clearRoster)

function handleFiles () {
    const file = this.files[0];

    const reader = new FileReader();

    const parser = new DOMParser();


    reader.onload = (e) => {
        const dom = parser.parseFromString(e.target.result, 'text/html');
        document.body = dom.body;

        document.body.appendChild(clearButton)
    };
    reader.readAsText(file)

    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = './pretty-print-styles.css';
    document.head.appendChild(styles);
}

function clearRoster () {
    [...document.querySelectorAll('.summary')].forEach(item => item.remove());
    document.querySelector('h1').remove();
    document.querySelector('h2').remove();
    [...document.querySelectorAll('h3')].forEach(item => item.remove());
}
