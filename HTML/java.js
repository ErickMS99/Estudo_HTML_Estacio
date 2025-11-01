function HabilitarCanpo(opcao){
    if(opcao){
        document.formulario.nome.disable = false;
}else{
    document.formulario.nome.value = "";
    document.formulario.nome.disable = true;
}
}