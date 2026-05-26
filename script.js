function runCode() {
    let code = document.getElementById("code").value;
    let output = document.getElementById("output");
    
    output.innerText = "Running...";
    
    setTimeout(() => {
        // Console.log wale text ko pakdo
        let logs = [];
        let originalLog = console.log;
        
        console.log = function(text) {
            logs.push(text);
        };
        
        try {
            eval(code); // Code ko run karo
            output.innerText = logs.join('\n') || "Program executed successfully";
        } catch (err) {
            output.innerText = "Error: " + err.message;
        }
        
        console.log = originalLog; // Wapas normal kar do
    }, 500);
}