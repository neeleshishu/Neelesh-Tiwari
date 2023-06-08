var draggingItem = null;

    function handleDragStart(event) {
      draggingItem = event.target;
      draggingItem.classList.add('dragging');
    }

    function handleDragOver(event) {
      event.preventDefault();
    }

    function handleDragEnter(event) {
      event.target.classList.add('drag-over');
    }

    function handleDragLeave(event) {
      event.target.classList.remove('drag-over');
    }

    function handleDrop(event) {
      event.preventDefault();
      event.target.classList.remove('drag-over');
      event.target.appendChild(draggingItem);
      draggingItem.classList.remove('dragging');
      draggingItem = null;
      showSuccessMessage();
    }

    function showSuccessMessage() {
      var successMessage = document.querySelector('.success-message');
      successMessage.textContent = 'Item dropped successfully!';
    }


    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');

    container1.addEventListener('dragstart', handleDragStart);
    container2.addEventListener('dragover', handleDragOver);
    container2.addEventListener('dragenter', handleDragEnter);
    container2.addEventListener('dragleave', handleDragLeave);
    container2.addEventListener('drop', handleDrop);