const touches = [...document.querySelectorAll(".button")];
const listKeyCodes = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector(".ecran");
document.addEventListener("keydown", (e) => {
  const valeurKey = e.keyCode.toString();
  calculer(valeurKey);
});
document.addEventListener("click", (e) => {
  const valeurKey = e.target.dataset.key;
  calculer(valeurKey);
});

const calculer = (valeurKey) => {
  if (listKeyCodes.includes(valeurKey)) {
    switch (valeurKey) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;

      default:
        const indexKeycode = listKeyCodes.indexOf(valeurKey);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.message);
});
