//selecting all inputs on the page
const inputs = document.querySelectorAll('.controls input'); 

//creating handleUpdate function
function handleUpdate() {//getting the values out of it
  const suffix = this.dataset.sizing || ''; //dataset - an object that will contain all the data attributes from that specific element/ sizing OR(||) nothing('')
  document.documentElement.style.setProperty(//updating the actual variable
    `--${this.name}`,
    this.value + suffix
  );
}

//looping using forEach()
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

