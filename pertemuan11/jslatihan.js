
function createProductFragment(products) {
    const fragment = document.createDocumentFragment();
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = generateProductHTML(product);
        fragment.appendChild(div);
    });
    return fragment;
}


function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}
const debouncedRender = debounce(renderProducts, 300);