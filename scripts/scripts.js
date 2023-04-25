window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY >= 55);
    var body = this.document.querySelector("body");
    body.classList.toggle("fixedbg", window.scrollY >= 55);
    if (this.window.scrollY >= 55) {
        this.document.getElementById("sec_logo").style.height = "32px";
        this.document.getElementById("sec_logo").style.paddingRight = "10px";
    }
    else {
        this.document.getElementById("sec_logo").style.height = "24px";
        this.document.getElementById("sec_logo").style.paddingRight = "20px";
    }
});