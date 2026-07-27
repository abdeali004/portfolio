/**
 * Shared cross-page helpers.
 *
 * installInspectDeterrent() blocks the right-click context menu and the
 * common "open devtools" keyboard shortcuts. This is a cosmetic deterrent
 * only, NOT a security control: client-side HTML/CSS/JS is downloaded to
 * and executed by the visitor's own browser, so it is mechanically
 * impossible to hide it from anyone who actually wants to read it
 * (view-source, a proxy, disabling JS, devtools opened before the page
 * loads, etc. all trivially bypass this). It stops casual right-click
 * curiosity, nothing more — it does not replace real practices (no
 * secrets client-side, input validation/escaping where relevant).
 *
 * Deliberately narrow scope: only the context menu and devtools shortcuts
 * are blocked. Text selection and Ctrl/Cmd+C are left untouched everywhere.
 */
(function installInspectDeterrent() {
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});

	document.addEventListener("keydown", function (e) {
		var key = e.key ? e.key.toUpperCase() : "";
		var blockCombo =
			key === "F12" ||
			((e.ctrlKey || e.metaKey) && e.shiftKey && (key === "I" || key === "J" || key === "C")) ||
			((e.ctrlKey || e.metaKey) && key === "U");

		if (blockCombo) {
			e.preventDefault();
		}
	});
})();
