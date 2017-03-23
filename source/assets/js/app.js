/**
 * Simple App JS Launcher
 * deps: jQuery
 *
 */
(function() {
    var method;
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

if (window.jQuery) {
    $(document).ready(function() {
        testJS.init({});
    });
} else {
    console.log('%c jQuery dependecy is not loaded, please check the order of your source and concatenation.', 'background: #black; color: #00FFF3');
}