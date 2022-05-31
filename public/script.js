function loadNav(){
    var myNav = document.getElementById('myNav')
    myNav.innerHTML = 
    `
    <nav class="nav">
        <ul class="nav_ul">
            <li class="nav_li">
                <a class="nav_icon" href="./index.html">
                    <img src="./img/succulent-icon.png" alt="HOME" style="width: 35px; height: 35px;">
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_a nav_active_home" href="./index.html">HOME</a>
            </li>
            <li class="nav_li">
                <a class="nav_a" href="#">
                    TYPE
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_a" href="./gallery.html">
                    GALLERY
                </a>
            </li>
            <li class="nav_li">
                <a class="nav_a" href="./articles.html">
                    ARTICLES
                </a>
            </li>

        </ul>
    </nav>
    `

}