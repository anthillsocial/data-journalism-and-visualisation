const counters = document.querySelectorAll('.counter');
const speed = 300; // The lower the slower


let counterElement = document.getElementById("counter");


window.addEventListener('scroll', function(event){

  if(isInViewport(counterElement)){
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Slow and higher 
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = (count + inc).toFixed(3);
          // Call function every ms
          setTimeout(updateCount, 100);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
  
})

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    console.log(bounding.top);

    return (
        bounding.top < 200
    );
};