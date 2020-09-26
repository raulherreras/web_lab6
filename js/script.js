$("#buttonAddItem").on("click", function(event) {
  event.preventDefault();
  
  var itemName = $("#inputItemName").val();
  console.log(itemName);
  
  $(".shoppingList").append(`<li class="shoppingItem"><p class="itemText">${itemName}</p>
  <button class="checkButton">Check</button>
  <button class="deleteButton">Delete</button></li>`);
});

$(".shoppingList").on("click", ".checkButton", function(event) {
  event.preventDefault();

  $(this).parent().toggleClass("itemChecked");
});

$(".shoppingList").on("click", ".deleteButton", function(event) {
  event.preventDefault();

  $(this).parent().remove();
});
