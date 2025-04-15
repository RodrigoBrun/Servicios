document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navbar a");
  
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY + 150;
  
      secciones.forEach(seccion => {
        if (
          scrollPos >= seccion.offsetTop &&
          scrollPos < seccion.offsetTop + seccion.offsetHeight
        ) {
          links.forEach(link => {
            link.classList.remove("activo");
            if (link.getAttribute("href") === `#${seccion.id}`) {
              link.classList.add("activo");
            }
          });
        }
      });
    });
  });

  


  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".acordeon .item");
  
    items.forEach(item => {
      const btn = item.querySelector(".acordeon-titulo");
  
      btn.addEventListener("click", () => {
        // Cerrar otros
        items.forEach(i => {
          if (i !== item) i.classList.remove("activo");
        });
  
        // Toggle actual
        item.classList.toggle("activo");
      });
    });
  });
  
  
