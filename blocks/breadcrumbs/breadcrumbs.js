export default function decorateBlock(block) {
    let pathArray = window.location.pathname.split('/');

    for (let pathIndex in pathArray) {
        if (pathIndex != 0) {
            let div = document.createElement("div");
            let p = document.createTextNode(pathArray[pathIndex]);
            div.appendChild(p);
            block.appendChild(div);
            if (pathIndex != pathArray.length - 1) {
                let div2 = document.createElement("div");
                let arrowP = document.createTextNode("▶");
                div2.appendChild(arrowP);
                block.appendChild(div2);
            }
        }
    }
    console.log(pathArray);
}