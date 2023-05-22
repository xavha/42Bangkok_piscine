$(document).ready(() => {
    const ft_list = $("#ft_list");
    const newButton = $("#new_button");

    newButton.click(function () {
        let txt = prompt("Please Enter TODO LIST :");
        const name = new Date().getTime();
        document.cookie = `${name}=${txt}`;
        let node = $("<div>").click(function () {
            const check = confirm("Do you want to delete");
            if (check) {
                node.remove();
                document.cookie = name + "=; expires=THU, 01 JAN 1970 00:00:00 UTC;";
            }
        });
        node.html(txt);
        ft_list.prepend(node);
    });

    const check = document.cookie;

    if (check.length > 0) {
        const cookie = check.split(";");
        cookie.forEach((element) => {
            let node = $("<div>").click(function () {
                const check = confirm("Do you want to delete");
                if (check) {
                    node.remove();
                    document.cookie =
                        element.split("=")[0] + "=; expires=THU, 01 JAN 1970 00:00:00 UTC;";
                }
            });
            node.html(element.split("=")[1]);
            ft_list.prepend(node);
        });
    }
});