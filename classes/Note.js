let note_id = 0

class Note {
    constructor(title, content, users, category) {
        note_id++
        this.id = note_id;
        this.title = title;
        this.content = content;
        this.users = users;
        this.category = category;
        this.record = [];
    }

    newChange(title, content, category) {
        this.record.push(new Modification(this.users, this.content, this.title, this.category))
        this.title = title;
        this.content = content;
        this.category = category;
        return true
    }

    addUser(id) {
        this.users.push(id)
    }

    deleteUser(id) {
        this.users.pop(filterUserByID(this, id))
    }
}
