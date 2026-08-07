function onLoad() {

    var newIcon = document.createElement("link");

    newIcon.rel = "icon";
    newIcon.type = "image/x-icon";
    newIcon.href = "/images/transparent-logo.png"

    document.head.appendChild(newIcon);



    var newTitle = document.createElement("h1");

    newTitle.id = "title";

    newTitle.innerHTML = "Warwick Comedy";

    document.body.insertBefore(newTitle, document.body.firstChild)

    makeSocialsBar();


    for(var item of document.getElementsByClassName("standup-room")) {
        item.innerHTML = "FAB0.23"
    }
    for(var item of document.getElementsByClassName("sketch-room")) {
        item.innerHTML = "OC0.05"
    }


    document.body.style.opacity = 1;

    window.addEventListener("scroll", function() {
        let proportion = this.scrollY / (this.document.body.offsetHeight - this.window.innerHeight);
        if(proportion > 0.5) {
            this.document.documentElement.style.backgroundColor = "var(--background1)";
        }
        else {
            this.document.documentElement.style.backgroundColor = "var(--background2)";
        }
        console.log(proportion);
    });

}

function makeSocialsBar() {

    var newSocialBar = document.createElement("div");

    newSocialBar.id = "socials-bar";

    newSocialBar.innerHTML = String.raw`<a href='https://www.instagram.com/comedywarwick/'><img src='/images/instagram-logo.png'>comedywarwick</a>
    <span class='spacer'></span>
    <a href='https://linktr.ee/comedy_at_warwick'><img src='/images/linktree-white-icon.webp'>comedywarwick</a>
    <span class='spacer'></span>
    <a href='https://www.youtube.com/@warwickcomedysociety4800'><img src='/images/youtube-logo.webp' style='border-radius: 5px'>Warwick Comedy Society</a>
    <span class='spacer'></span>
    <a href='https://www.warwicksu.com/societies-sports/societies/comedy/'><img src='/images/su-logo-header.png' style='border-radius: 5px'>SU Page</a>
    <br><br>
    <b><a href='/fringe2026' style="color: var(--item2);">Fringe 2026</a></b>
    <span class='spacer'></span>
    <a href='/index'>Home</a>
    <span class='spacer'></span>
    <a href='/exec'>Exec</a>
    <span class='spacer'></span>
    <a href='/sketches'>Sketches</a>
    <span class='spacer'></span>
    <!--
    <a href='/gallery'>Gallery</a>
    <span class='spacer'></span>
    <a href='/newsletter'>Newsletter</a>
    <span class='spacer'></span>
    <a href='/contact'>Contact Us</a>
    <span class='spacer'></span>
    -->
    `;

    const names = {
        "index": "home",
        "exec": "exec",
        "sketches": "sketches",
        "gallery": "gallery",
        "contact": "contact us",
        "": "home",
        "fringe2026": "fringe"
    }

    var currentPage = window.location.pathname.substring(1).replace(".html", "").replace("-", " ");
    for(var item of newSocialBar.childNodes) {
        if(item.innerHTML != undefined && item.innerHTML.toLowerCase().indexOf(names[currentPage]) > -1)
            item.style.color = "var(--item1)";
    }

    document.body.insertBefore(newSocialBar, document.getElementsByClassName("mainParagraph")[0]);
}