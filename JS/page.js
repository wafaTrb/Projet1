document.addEventListener("DOMContentLoaded", () => {
    const svgObject = document.getElementById("monSvg");
    if (svgObject) {
        svgObject.addEventListener("load", () => {
            const svgDoc = svgObject.contentDocument;
            if (svgDoc) {
                const cercle = svgDoc.querySelector("#path1");
                if (cercle) {
                    cercle.style.fill ="green"
                    //console.log("cercle"); // Affiche l'élément dans la console
                } else {
                    console.error("L'élément #path3 est introuvable dans le SVG.");
                }
            } else {
                console.error("Impossible d'accéder au document SVG.");
            }
        });
    } else {
        console.error("L'élément avec l'ID 'monSvg' est introuvable.");
    }
});
