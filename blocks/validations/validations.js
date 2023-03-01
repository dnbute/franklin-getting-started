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
            let listChild = document.createElement("li");
            const validation = new Validation(element["validationId"], element["environmentId"], element["programId"], element["status"]);

            listChild.innerHTML = "<p>" + validation.toString() + "</p>";
            
            list.appendChild(listChild)

            console.log(listChild);
        });

        
    }).then(() => {
        block.appendChild(list)
    })
    
    return validations;
}