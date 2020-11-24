export default function createElement(
    elementName,
    options = {},
    children = [],
) {
    const element = document.createElement(elementName);

    const optionKeys = Object.keys(options);
    optionKeys.forEach(key => {
        const value = options[key];

        element[key] = value;
    });

    children.forEach(child => {
        element.appendChild(child);
    });

    return element;
}
