fetch("menu.json")

.then(response => response.json())

.then(menu => {


    const container = document.getElementById("menu");


    Object.entries(menu).forEach(([categoria,bebidas])=>{


        const section=document.createElement("section");

        section.className="category";


        section.innerHTML=`

            <h2 class="category-title">
                ${categoria}
            </h2>

            <div class="items"></div>

        `;


        const items=section.querySelector(".items");


        bebidas.forEach(bebida=>{


            const card=document.createElement("article");

            card.className="card";


            card.innerHTML=`

                <h3>${bebida.nombre}</h3>

                <p>
                    ${bebida.descripcion ?? ""}
                </p>


                ${
                    bebida.especial
                    ?
                    `<span class="badge">
                        Especial de la casa
                    </span>`
                    :
                    ""
                }

            `;


            items.appendChild(card);


        });


        container.appendChild(section);


    });


});