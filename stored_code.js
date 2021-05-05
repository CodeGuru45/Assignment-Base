form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('submit fired', search.value);
    // eslint-disable-next-line camelcase
    food_list = findMatches(search.value.toUpperCase(), resultData);
    console.log(food_list[1]);
    // eslint-disable-next-line max-len
    //const filtered = data.filter((any) => any.name.toUpperCase() === search.value.toUpperCase());
    food_list.forEach((item) => {
      const appendItem = document.createElement('li');
      appendItem.innerHTML = `<span class="name">${item.name}</span>` + ' ' + `<span class="category">${item.category}</span>` + ' ' + `<address><span class="address">${item.address_line_1}</span>` + ' ' + `<span class="address">${item.city}</span>` + ' ' + `<span class="address">${item.zip}</span></address>`
      targetList.append(appendItem); 
    });
  });