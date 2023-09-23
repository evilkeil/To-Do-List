import './assets/style.css';

const checkbox = document.getElementById('toggle');

const input = checkbox.value;

checkbox.addEventListener('change',function(e){
    if (checkbox.checked) {
        // Checkbox is checked
        console.log('Checkbox is checked');
        // You can perform additional actions here
    } else {
        // Checkbox is unchecked
        console.log('Checkbox is unchecked');
        // You can perform additional actions here
    }
})