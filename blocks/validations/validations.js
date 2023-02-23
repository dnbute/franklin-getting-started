export default function decorate(block) {
    let response = getResponse();

    console.log(response);
}



const getResponse = async () => {
    const response = await fetch('http://localhost:8080/api/validations');
    let myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    return myJson;
  }