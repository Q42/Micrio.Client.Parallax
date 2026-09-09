/**
 * Frame rate readout, shared by all the example pages.
 *
 * Two numbers, because they mean different things here:
 *
 *   fps      — how often the browser paints. Measured with its own
 *              requestAnimationFrame loop, which is the one thing on these
 *              pages that runs continuously: measuring frames costs a frame
 *              loop. Remove this script to get the pages' real idle behaviour.
 *   draws/s  — how many frames Micrio actually renders. Micrio draws on demand
 *              and stops when the image is still, so this drops to 0 the moment
 *              you let go, while fps keeps ticking along.
 *
 * A CSS transition or animation runs on the compositor and shows up in neither
 * number: an idle page whose doors are swinging reads 0 draws/s and full fps.
 */
(() => {
	const el = document.createElement('div');
	el.style.cssText = `
		position: fixed; top: 8px; left: 8px; z-index: 10;
		padding: 4px 8px; border-radius: 5px;
		background: #0b0b1acc; color: #c5ff5b;
		font: 11px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
		white-space: pre; pointer-events: none;
	`;
	el.textContent = '– fps';
	document.body.appendChild(el);

	let frames = 0, draws = 0, last = performance.now();

	document.querySelector('micr-io')?.addEventListener('draw', () => draws++);

	requestAnimationFrame(function tick(now) {
		requestAnimationFrame(tick);
		frames++;
		const elapsed = now - last;
		if (elapsed < 500) return;
		const secs = elapsed / 1000;
		el.textContent = `${Math.round(frames / secs)} fps · ${Math.round(draws / secs)} draws/s`;
		frames = draws = 0;
		last = now;
	});
})();
