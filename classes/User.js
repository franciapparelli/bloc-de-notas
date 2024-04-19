let user_id = 2

class User {
    constructor(name, password) {
        this.id = user_id;
        user_id++
        this.name = name;
        this.password = password;
    }
}
