var output = [];
var count = 1;
var result = document.getElementById("result");
var run = document.getElementById("run")

run.addEventListener("click", function() {
    for (let i = 0 ; i < 100; i++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
        } else if (count % 3 === 0 ) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count);
        }
        count++;
        console.log(output);
        result.textContent = output.join("\, ");
    }
    run.disabled = true;
})
