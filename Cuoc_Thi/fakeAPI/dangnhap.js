let dataEmail;
let password;
document.getElementById("email").addEventListener("input", function (email) {
    dataEmail = email.target.value
});
document.getElementById("pass").addEventListener("input", function (pass) {
    password = pass.target.value
});
document.getElementById("loginBTN").addEventListener("click", (e) => {
    e.preventDefault()
    if (dataEmail === undefined) {
        alert(false)
        return;
    }
    if (password === undefined) {
        alert(password)
        return;
    }
    async function fetchUsers() {
        try {
            const response = await fetch('https://681d893bf74de1d219b01204.mockapi.io/api/user/users');

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            data.forEach(element => {
                if(element.password !== password){
                    console.log(password + " Khac voi " + element.password)
                    return
                }else{
                    console.log(true)
                    window.location.href='https://www.youtube.com/watch?v=HXkh7EOqcQ4&list=RDxPGxTQqsS8o&index=11'
                    return
                }
            });
        } catch (error) {
            console.log("Lỗi khi fetch dữ liệu:", error);
        }
    }

    // Gọi hàm
    fetchUsers();

})