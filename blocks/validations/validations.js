import Validation from "../validation/validation.js";

export default function decorate(block) {
   const validations = getValidations(block);

}



const response = fetch('http://localhost:8080/api/validations')
    .then((response) => response.json())
    .then((validation) => {
        return validation;
    });



const getValidations = (block) => {
    const list = document.createElement("ul");
    let validations=[];
    response.then((validationResponse) => {
        validationResponse['_embedded']["validations"].forEach(element => {
            console.log(element)
            validations.push(element);
            let child = document.createElement("li");
            child.innerHTML = "Validation id:" + element["validationId"] + " | " + "programId:" + element["programId"] + " | " + "environmentId:" + element["environmentId"] + " | " + "status:" + element["status"];

            list.appendChild(child)

            console.log(child);
        });

        
    }).then(() => {
        block.appendChild(list)
    })
    
    return validations;
}