((document, mdc, Pro) => {

    let turbo = window.Turbolinks !== null;
    if (turbo && navigator.userAgent.match(/Firefox\/(\d+)\./)) {
        Turbolinks.supported = false;
    }

    function ready() {
        /*const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
        // list.wrapFocus = true;
        const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
        topAppBar.listen('MDCTopAppBar:nav', () => drawer.open = !drawer.open);
        document.querySelectorAll('.mdc-ripple-surface').forEach(el =>
            (mdc.ripple.MDCRipple.attachTo(el)).unbounded = true
        );*/

        new Pro('.is-active, .is-active > a, a[href="#"]').deactive();
        Pro
            .lazyload()
            .lightbox('[data-lightbox]')
            .scroll()
    }


    function load() {}


    Pro
        .onready(ready)
        .onload(load);

    if (turbo) {
        document.addEventListener('turbolinks:visit', () => {
            turbo = 'visit';
        });
        document.addEventListener('turbolinks:load', () => {
            if (turbo === 'visit') {
                ready();
                load()
            }
        });
        document.addEventListener('turbolinks:before-cache', () => {
        })
    }

})(document, mdc, Pro);
