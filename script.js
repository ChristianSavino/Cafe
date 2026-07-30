fetch("menu.json")
.then(r=>r.json())
.then(menu=>{

    const root=document.getElementById("menu");

    Object.entries(menu).forEach(([categoria,bebidas])=>{

        const section=document.createElement("section");

        section.className="category";

        section.innerHTML=`

            <div class="category-header">

                <div class="category-title">${categoria}</div>

                <div class="arrow">

                    <svg viewBox="0 0 24 24">

                        <path d="M7 10l5 5 5-5"/>

                    </svg>

                </div>

            </div>

            <div class="items"></div>

        `;

        const items=section.querySelector(".items");

        bebidas.forEach(b => {
            items.insertAdjacentHTML("beforeend", `
                <div class="item">
                    <h3>${b.nombre}</h3>
                    ${b.descripcion ? `<p>${b.descripcion}</p>` : ""}
                </div>
            `);
        });

        section.querySelector(".category-header").onclick = () => {
            const items = section.querySelector(".items");
            const isOpen = section.classList.toggle("open");
            items.style.maxHeight = isOpen ? items.scrollHeight + "px" : "0";
        };

        root.append(section);

    });

});