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

    newChange(title, content, users, category) {
        this.record.push(new Modification(title, content, users, category))
        return true
    }
}
