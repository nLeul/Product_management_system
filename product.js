window.onload = function () {
    const loginTemplate = `       email : <input id="email" type="text"><br>
Password :<input id="password" type="text"><br>
User :<select id="userType">
<option value="admin">Admin</option>
<option value="customer">Customer</option>
</select><br>
<input id="loginBtn" type="button" value="Login"><br>`;

    const adminTemplate = `    Product Id: <input id="productId" type="text"><br>
product Name: <input id="productName" type="text"><br>
Product Type : <input id="productType" type="text"><br>
<input id="addProduct" type="button" value="Add Product">
<input id="adminLogoutBtn" type="button" value="Logout"><br>`;

    const custumerTemplate = ` <table class="table">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
</table>
<input id="CustlogoutBtn" type="button" value="Logout">`;
    
    function render(template, node) {
        node.innerHTML = template;
    };
 


    const outlet = document.getElementById("outlet");
    outlet.innerHTML = loginTemplate;
    function mainLogin() {
    

        const login = document.getElementById("loginBtn");
        login.addEventListener("click", fetchUsers)

        async function fetchUsers() {
            const response = await fetch("user.json");
            const myJson = await response.json();
            // console.log(myJson);
            const adminEmail = myJson.admin[0].email;
            const adminPass = myJson.admin[0].password;
            const customerEmail = myJson.user[0].email;
            const customerPass = myJson.user[0].password;
            // console.log(customerEmail);
            // console.log(customerPass);

            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const userType = document.getElementById("userType");
            if (emailInput.value == adminEmail && passwordInput.value == adminPass && userType.value == "admin") {
                render(adminTemplate, outlet)
            }


            if (emailInput.value == customerEmail && passwordInput.value == customerPass && userType.value == "customer") {
                render(custumerTemplate, outlet)
            }

        }
     
    }
    mainLogin();

    function adminLogout() {

        let adminLogout = document.getElementById("adminLogoutBtn");
        adminLogout.addEventListener("click", logout);
        function logout() {
            render(loginTemplate, adminLogout)

        }
        console.log("hi ")
    }
    adminLogout();
}