let btnModal = document.querySelectorAll('button')
let modalBody = document.querySelectorAll(".myModal")


btnModal.forEach(element => {


    element.addEventListener("click", (e) => {

        let myBTN = e.target
        let myData = myBTN.getAttribute("data-SAAD-target")
        modalBody.forEach(element => {
            console.log(element);
            if (myData == element.getAttribute("id")) {
                element.classList.toggle("d-none")
                let myCloseBTN = element.querySelectorAll(".close")
                myCloseBTN.forEach(e => {
                    e.addEventListener("click", () => {
                        element.classList.toggle("d-none")

                    })
                });
                
                document.body.classList.toggle("overflow-y-hidden")
                
            }
        });
    })


});