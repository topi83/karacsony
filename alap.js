let szoveg=`
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">Logo</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="elso.html">Első</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="masodik.html">Második</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`

document.getElementById("menu").innerHTML=szoveg

function kattintas(){
    let vnev=document.getElementById("vezeteknev").value
    let knev=document.getElementById("keresztnev").value
    document.getElementById("kiiras").innerHTML=`Üdvözöllek ${vnev} ${knev} !!!`
}

function sarga(){
    document.getElementById("vezeteknev").style.backgroundColor="yellow"
}
function feher(){
    document.getElementById("vezeteknev").style.backgroundColor="white"
}