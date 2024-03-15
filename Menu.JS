fetch ('menu.json')
//Quehace?Esta linea inicia la carga de archivo menu.json fetch es una funcion de JavaScritp que facilita la realizacion de solicitudes de red, como obtener datos de un archivo o un endpoint de API.
//Como funciona? fetch devuelve una promesa que, cuando se resuelve,te da acceso a la respuesta no es directameente los datos en formato JSON, sinoun objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
//Que hace?  Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el MediaStreamAudioDestinationNode.json() para convertir el cuerpo e la respusta en un objeto JavaScript (esto asume que el cuerpo de la respuesta esta en formato.JSO).
//Como funciona? el metodo.json()tambien devuelve una persona, la cual se resuelve con el contenido del cuerpo en formato JSON.
then(data=>)>
    const menuContainer =documnt.getElemtyById ('menu-contrainer');
    //Que hace? Aqui se procesan los datos JSON ya convertidos.Se obtiene una referencial acontenerlosdel menu en el HTML mediante getElemtById('menu-container'), y luego se itera sobrelos elemntos (categorias) del menu.
    data.items.forEach(categoria => {
        constcategoryTitle =document.createElement('h2');
        //Que hace? Aqui se crea un elemntoh2, se asigna el nombre de la categoria como su contenido de texto, y luego se anade este titulo al contenedor del menu/.
        categoryTitle.textContent = category,category;
        menuContainer.appendChild(categoryTitle);
        const table=document.createElementNS('table');
        //categoria. Ademas se prepara para el encabezado(tableHead) con las columnas parientes. Talebody
        const tableHead = <tr></tr>Foto</th></th>Descripcion</th></th>Precio</th></tr>;
        let tableBody ='';
        //Como funciona? Para cada categoria en los datos, se realizeb varios pasos crear un titulo para la categoria (se crea un elemento <h2> para la categoria. se establecesu contenido de textoal nombre la categoria(category.category), luego se agrega al contenedor del menu).
        //crea una tabla para los elementos de esas categorias: se genera una tabla por cada categoria (primero se define el encabezado de la tabla <ht>Foto</ht><th>Descripcion</th><th>Precio</tht>).

        category.items.forEach(item =>{
            category.items.forEach(item => {
                tableBody += `<tr>
                                <td><img src="${item.image}" alt="${item.name}"></td>
                                <td>${item.name} - ${item.description}</td>
                                <td>${item.price}</td>
                              </tr>`;
            });
        }); 
    });
            
        
