document.getElementById('submitBtn').addEventListener('click', function() {
    const message = document.getElementById('fanMessage').value;
    if (message.trim()) {
        alert('Thank you for your tribute!');
        document.getElementById('fanMessage').value = '';
    } else {
        alert('Please write a message first.');
    }
});
