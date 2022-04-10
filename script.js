function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal > 0){
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var final_amount = parseInt(principal) + parseInt(interest)
        var result = document.getElementById("result");
        result.innerHTML = `<pre>If you deposit <span style = "background-color: #FFFF00">${principal}</span>,\nat an interest rate of <span style = "background-color: #FFFF00">${rate}</span>.\nYou will receive an amount of <span style = "background-color: #FFFF00">${interest}</span>,\nin the year <span style = "background-color: #FFFF00">${year}</span> </pre>`;
    } else {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}        