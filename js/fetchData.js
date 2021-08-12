fetch('https://api.rawg.io/api/games?key=3aba39671544403ab6743f20e4fb691d',{
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
})
      .then(response => response.json())
      .then(json => {
          const arrayDeJuegos = json.results;
          const loaderElement = document.getElementById("loader");
          const mainContanierElement = document.getElementById("main-container");
          const itemsContainerElement = document.getElementById("items-container");
            arrayDeJuegos.forEach(juego => {
                console.log(juego);
                
                //Item title
                let itemTitle = document.createElement('h3');
                itemTitle.innerHTML = juego.name;
                // //Item Description
                // let itemTitle = document.createElement('h1');
                // itemTitle.innerHTML = juego.name;


                //Item titles container
                let itemTitlesContainer = document.createElement('div')
                itemTitlesContainer.className = "item-title-container";
                itemTitlesContainer.appendChild(itemTitle);

                //Item Image
                let itemImage = document.createElement('img');
                itemImage.src = juego.background_image;
                itemImage.className = "image-item";

                //Item
                let itemElement = document.createElement('div');
                itemElement.className = "item";
                itemElement.appendChild(itemImage);
                itemElement.appendChild(itemTitlesContainer);
                
                //let itemElement = document.create`<div class="item"><img src="${juego.background_image}"><div class="item-title">${juego.name}</div></div>`;
                itemsContainerElement.appendChild(itemElement);
  
            });
            loaderElement.style.display = "none";
            mainContanierElement.style.display = "flex";
    })