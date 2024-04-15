let modification_id = 1
date = Date()

class Modification {
    constructor(user_id, previous_content, previous_title, previous_category) {
        this.id = modification_id;
        modification_id++
        this.user_id = user_id;
        this.date = date;
        this.previous_content = previous_content;
        this.previous_title = previous_title;
        this.previous_category = previous_category;
    }
}