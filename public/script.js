async function windowsActions() {
  console.log('window loaded');

  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
  const form = document.querySelector('.userform');
  const search = document.querySelector('#search_value');
  const targetList = document.querySelector('.target-list');
  const request = await fetch(endpoint);
  const data = await request.json();
  


  function findMatches(wordToMatch, food) {
    const resultData =  food.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');   
        return place.name.match(regex) || place.city.match(regex);
    });
    return resultData
  }
  
  function displayMatches(event) {
    
    const matchesJSON = findMatches(event.target.value, data);
    let i = 0
    matchesJSON.forEach((item) => {
      console.log(i)
      i++; 
      
      const appendItem = document.createElement('li');
      appendItem.innerHTML = `<span class="name">${item.name}</span>` + ' ' + `<span class="category">${item.category}</span>` + ' ' + `<address><span class="address">${item.address_line_1}</span>` + ' ' + `<span class="address">${item.city}</span>` + ' ' + `<span class="address">${item.zip}</span></address>`
      targetList.append(appendItem); 
    });
    
  }
  
  search.addEventListener('keyup', (evt) => { displayMatches(evt); });

  }
  
  window.onload = windowsActions;
  
 