export function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|ipad|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        return true;
    }

    if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
        return true;
    }

    return false;
}