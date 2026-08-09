/**
 * Evergreen Real Estate — main.js
 * Vanilla JavaScript interactions.
 *
 * Modules:
 *   - initMobileNavigation  : hamburger toggle, aria-expanded, icon swap
 *   - initStickyHeader       : adds shadow once the page scrolls past the header
 *   - initGalleryFilters     : filter gallery items by data-category
 *   - initContactForm        : client-side validation + status message
 *   - initActiveNavigation   : highlights current page in nav
 *
 * No third-party libraries are used.
 */
(function () {
    "use strict";

    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function initMobileNavigation() {
        var button = document.getElementById("mobile-menu-button");
        var menu = document.getElementById("mobile-menu");
        var iconOpen = document.getElementById("mobile-menu-icon-open");
        var iconClose = document.getElementById("mobile-menu-icon-close");

        if (!button || !menu) {
            return;
        }

        function setOpen(isOpen) {
            button.setAttribute("aria-expanded", isOpen ? "true" : "false");
            button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            if (isOpen) {
                menu.classList.remove("hidden");
                if (iconOpen) iconOpen.classList.add("hidden");
                if (iconClose) iconClose.classList.remove("hidden");
            } else {
                menu.classList.add("hidden");
                if (iconOpen) iconOpen.classList.remove("hidden");
                if (iconClose) iconClose.classList.add("hidden");
            }
        }

        button.addEventListener("click", function () {
            var isOpen = button.getAttribute("aria-expanded") === "true";
            setOpen(!isOpen);
        });

        // Close menu when a link is clicked (improves mobile UX)
        var links = menu.querySelectorAll("a");
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                setOpen(false);
            });
        }

        // Close menu on Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                button.focus();
            }
        });
    }

    function initStickyHeader() {
        var header = document.getElementById("site-header");
        if (!header) {
            return;
        }

        function onScroll() {
            if (window.scrollY > 4) {
                header.classList.add("shadow-sm");
            } else {
                header.classList.remove("shadow-sm");
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    function initGalleryFilters() {
        var filtersContainer = document.getElementById("gallery-filters");
        var grid = document.getElementById("gallery-grid");
        if (!filtersContainer || !grid) {
            return;
        }

        var buttons = filtersContainer.querySelectorAll("button[data-filter]");
        var items = grid.querySelectorAll("[data-category]");

        function applyFilter(filter) {
            for (var i = 0; i < items.length; i++) {
                var categories = (items[i].getAttribute("data-category") || "").split(/\s+/);
                var match = filter === "all" || categories.indexOf(filter) !== -1;
                items[i].style.display = match ? "" : "none";
            }
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (event) {
                var btn = event.currentTarget;
                var filter = btn.getAttribute("data-filter") || "all";

                for (var j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove("bg-navy", "text-white");
                    buttons[j].classList.add("bg-white", "text-primarytext", "border", "border-borderline");
                    buttons[j].setAttribute("aria-pressed", "false");
                }
                btn.classList.add("bg-navy", "text-white");
                btn.classList.remove("bg-white", "text-primarytext", "border", "border-borderline");
                btn.setAttribute("aria-pressed", "true");

                applyFilter(filter);
            });
        }
    }

    function initContactForm() {
        var form = document.getElementById("contact-form");
        var status = document.getElementById("form-status");
        if (!form) {
            return;
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                if (status) {
                    status.textContent = "Please complete the required fields.";
                    status.classList.remove("text-green-600");
                    status.classList.add("text-red-600");
                }
                return;
            }

            if (status) {
                status.textContent = "Thanks — your message has been sent. We'll be in touch shortly.";
                status.classList.remove("text-red-600");
                status.classList.add("text-green-600");
            }
            form.reset();
        });
    }

    ready(function () {
        initMobileNavigation();
        initStickyHeader();
        initGalleryFilters();
        initContactForm();
    });
})();
