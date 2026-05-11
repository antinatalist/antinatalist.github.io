/*window.onclick = e => {
  console.log(e.target);  // to get the element
  console.log(e.target.tagName);  // to get the element tag name alone
} */

document.querySelector(".disableRightClick").addEventListener('contextmenu',  event => event.preventDefault());


//document.querySelector(".myVideo").play();

function sendEmail(){

  Email.send({
    SecureToken : "0e6130fe-9489-4343-8d10-1638675a23ab",
    To : 'waymarketingltd@gmail.com',
    From : 'waymarketingltd@gmail.com',
    Subject: `[The One's Spa] ${document.querySelector("#subject").value}`,
    Body : 
    `
    Name: ${document.querySelector("#name").value}<br><br>

    Email: ${document.querySelector("#email").value}<br><br>

    Phone: ${document.querySelector("#phone").value}<br><br>

    Message: ${document.querySelector("#message").value}
    `
  }).then(
    alert("Thank you. Your message has been sent successfully")
  );
}