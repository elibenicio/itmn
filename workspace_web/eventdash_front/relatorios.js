function recuperarInfo(){
    var userStr = localStorage.getItem("userDASH");
    if (!userStr){
        alert("Você deve fazer login antes de acessar esse item")
        window.location = "index.html";
    }

    var user = JSON.parse(userStr);

    document.getElementById("fotoUser").innerHTML = `<img src="${user.linkFoto}" width="100%">`;
    document.getElementById("bioUser").innerHTML = `<h4>${user.nome}</h4><hr>
            <strong>Racf: </strong> ${user.racf} <br>
            <strong>Email: </strong> ${user.email} <br>
            <strong>Ramal: </strong> ${user.ramal} <br>
            <strong>Departamento: </strong> ${user.departamento}<br>
            `;
    document.getElementById("menurel").innerHTML = `<div class="col-6 text-center">
    <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Selecione o relatório
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
        <li><button class="dropdown-item" type="button" onclick="abre_eventos()">Eventos por período</button></li>
        <li><button class="dropdown-item" type="button" onclick="abre_alarmes()">Alarmes/Equipamentos</button></li>
        </ul>
    </div>
</div>
<div class="col-6 text-center">
    <button type="button" class="btn btn-primary" onclick="logout()">logout</button>
</div>`;
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location= "index.html";
    
}

function abre_eventos(){
    window.location = "eventos.html";
}

function abre_alarmes(){
    window.location = "relalarme.html";
}