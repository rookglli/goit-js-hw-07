const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function (category) {
  const categoriesTitle = category.querySelector("h2");
  const categoriesElements = category.querySelectorAll("ul li");

  console.log(`Category: ${categoriesTitle.textContent}`);
  console.log(`Elements: ${categoriesElements.length}`);
});
