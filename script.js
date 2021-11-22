init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();

    ui.containerEl.click(onClickShowBtn)

    http.get(ENVIRONMENT.USERS.getUsers)
    .done((data) => data.forEach(element => {
        ui.createUser(element.name, element.id)
    }))
    .done(() => console.log('Users downloaded successful'))
    .fail(() => console.log('ERROR! Users not downloaded!'))

    function onClickShowBtn(e) {
        if ($(e.target).hasClass('show-posts-btn')) {
            ui.clearPosts()
            let userId = e.target.id;
            http.get(ENVIRONMENT.USERS.getPosts + userId)
            .done((data) => {
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
