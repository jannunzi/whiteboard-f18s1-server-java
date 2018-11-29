
(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $selectBtn, $updateBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tbody = $(".wbdv-tbody");

        $createBtn = $("#createBtn");
        $updateBtn = $("#updateBtn");

        $createBtn.click(createUser);
    }
    function createUser() {

        var username = $usernameFld.val();
        $usernameFld.val("");

        var timestamp = (new Date()).getTime();

        var newUser = $userRowTemplate.clone();
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html(username);

        newUser
            .find(".wbdv-remove")
            .attr("id", timestamp)
            .click(deleteUser)

        $tbody.append(newUser);
    }
    function findAllUsers() {  }
    function findUserById() {  }
    function deleteUser(event) {
        var button = $(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        // console.log(tr);
        tr.remove();
    }
    function selectUser() {  }
    function updateUser() {  }
    function renderUser(user) {  }
    function renderUsers(users) {  }
})();
