const ft_list = document.getElementById("ft_list");
var newButton = document.getElementById("new_button");

newButton.addEventListener("click", function () {
    let txt = prompt("Please Enter TODO LIST :");
    const name = new Date().getTime();
    document.cookie = `${name}=${txt}`;
    let node = document.createElement("div");
    node.onclick = () => {
        const check = confirm("Do you want to delete");
        if (check) {
            node.remove();
            document.cookie = name + "=; expires=MON, 21 OCT 2002 00:00:00 UTC;";
        }
    };
    node.innerHTML = txt;
    ft_list.prepend(node);
});

const check = document.cookie;

if (check.length > 0) {
    const cookie = check.split(";");
    cookie.forEach((element) => {
        let node = document.createElement("div");
        node.onclick = () => {
            const check = confirm("Do you want to delete");
            if (check) {
                node.remove();
                document.cookie =
                    element.split("=")[0] + "=; expires=MON, 21 OCT 2002 00:00:00 UTC;";
            }
        };
        node.innerHTML = element.split("=")[1];
        ft_list.prepend(node);
    });
}