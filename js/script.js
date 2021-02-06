function verifySpaces(){
    const name = document.getElementById('name').value //nombre
    const lastName = document.getElementById('lastName').value //apellido
    const numCard = document.getElementById('numCard').value // numero tarjeta de credito
    const endDate = document.getElementById('endDate').value // fecha de vencimiento
    const cvvCode = document.getElementById('cvvCode').value //codigo CVV

    const array = [name, lastName, numCard, endDate, cvvCode]

    let banderita = true //verdaderos o falsos

    for(let contador = 0; contador <= array.length; contador++){
        if (array[contador] === ""){
            console.log(contador)
            console.log(array[contador])
            banderita = false
        }
    }

    if (banderita === true){
        swal({
            title: "Transaccion Exitosa!",
            text: "Diligenciado correctamente",
            icon: "success",
          });
    } else {
        swal({
            title: "Error",
            text: "Diligencie todos los campos",
            icon: "error",
          });
    }

}