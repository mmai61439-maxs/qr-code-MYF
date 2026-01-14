function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    alert(`THE PLACE HAS BEEN RESERVED
    Name: ${name}
    Date: ${date}
    Time: ${time}
    Numper of People: ${people}`);
    
  
  }