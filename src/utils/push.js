export default function push(href) {
    if (window.location.pathname === href) return;

    window.location.href = href;
}
