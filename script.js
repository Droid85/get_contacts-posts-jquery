init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();

    ui.containerEl.click(onClickShowBtn)

    $.get(http.API + ENVIRONMENT.USERS.getUsers, function(data) {
        data.forEach(element => {
            ui.createUser(element.name, element.id)
        });
        return data
    })
    .done((data) => console.log('Users downloaded successful', data))
    .fail(() => console.log('ERROR! Users not downloaded!'))

    function onClickShowBtn(e) {
        if ($(e.target).hasClass('show-posts-btn')) {
            ui.clearPosts()
            let userId = e.target.id;
            $.get(http.API + ENVIRONMENT.USERS.getPosts + userId, function(data) {
                data.forEach(element => {
                    ui.createUserPosts(element.title, element.body)
                });
                return data
            })
            .done(() => console.log('Posts downloaded successful'))
            .fail(() => console.log('ERROR! Posts not downloaded!'))
        }
    }
}
