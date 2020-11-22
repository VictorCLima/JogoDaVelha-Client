export default function removeElementsChilds(element) {
    while (element.firstChild) {
        const firstChild = element.firstChild;

        element.removeChild(firstChild);
    }
}
