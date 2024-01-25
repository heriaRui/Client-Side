
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addWishButton');
    const wishList = document.getElementById('wishList');
    const newWishInput = document.getElementById('newWish');

    addButton.addEventListener('click', function() {
        const wishText = newWishInput.value;
        if (wishText === '') {
            alert('Please enter a wish!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = wishText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            wishList.removeChild(li);
        };

        li.appendChild(deleteButton);
        wishList.appendChild(li);

        newWishInput.value = ''; 
    });
});

