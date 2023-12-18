function fetch()
{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(response => megjelent(response))
    .catch(hiba => console.log("PROBLEM"+hiba))
}
fetch()

function megjelent(response)
{
    response.foreach(response =>
        {
            `${response[0].userID}`
        });
        document.getElementById('keret').innerHTML;
}
