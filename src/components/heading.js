import './heading.css'

class Heading {

  create(text){
    const heading = document.createElement("h1");

    heading.innerHTML = text;

    heading.classList.add("titulo");

    document.body.appendChild(heading);
  }
}


export { Heading };