var attempt = 3; // Variable to count the number of attempts.

        // Below function Executes on click of the login button.
        function validate() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            
            if (email == "Formget" && password == "formget#123") {
                console.log("Login successfully");
                window.location = "success.html"; // Redirecting to another page.
                return false;
            } else {
                attempt--; // Decrementing by one.
                console.log("You have left " + attempt + " attempt;");

                // Disabling fields after 3 attempts.
                if (attempt == 0) {
                    document.getElementById("email").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("submit").disabled = true;
                    return false;
                }
            }
        }