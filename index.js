class backToTop {
    constructor(showOnPx = 700, selector = '#btn-back-to-top') {
        this.showOnPx = showOnPx;
        this.selector = selector;

        this.backToTopButton = document.querySelector(this.selector);
        this.backToTopButton.classList.add('backtotop-button');
        this.backToTopButton.classList.add('backtotop-hidden');

        document.addEventListener("scroll", () => {
            if (this.scrollContainer().scrollTop > this.showOnPx) {
                this.backToTopButton.classList.remove("backtotop-hidden");
            } else {
                this.backToTopButton.classList.add("backtotop-hidden");
            }
        });

        this.backToTopButton.addEventListener("click", this.goToTop);
    }

    scrollContainer() {
        return document.documentElement || document.body;
    };

    goToTop() {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };
}
