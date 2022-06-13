function loadNav(){
    var myNav = document.getElementById('myNav')
    myNav.innerHTML = 
    `
    <nav>
        <ul class="nav_ul">
            <li class="nav_li">
                <a class="nav_icon" href="./index.html">
                    <img src="./img/succulent-icon.png" alt="HOME" style="width: 41px; height: 41px;">
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_padding" href="./index.html">
                    HOME
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_padding" href="./type.html">
                    TYPE
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_padding" href="./gallery.html">
                    GALLERY
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_padding" href="./articles.html">
                    ARTICLES
                </a>
            </li>

        </ul>
    </nav>
    `
}

function loadFooter(){
    var myNav = document.getElementById('myFooter')
    myNav.innerHTML = 
    `

    `
}