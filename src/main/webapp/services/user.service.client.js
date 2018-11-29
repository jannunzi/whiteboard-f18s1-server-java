function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    var self = this;

    function createUser() {
        
    }
    function findAllUsers() {
        return [
            {username: 'alice'},
            {username: 'bob'},
            {username: 'charly'}
        ]
    }
    function findUserById() {
        
    }
    function deleteUser() {
        
    }
    function updateUser() {
        
    }
}