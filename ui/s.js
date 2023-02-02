$(() => {
    window.addEventListener('message', (event) => {
        let e = event.data;

        if (e.action === "show") {
            $('.container').fadeIn(100);
        } else if (e.action === "hide") {
            $('.container').fadeOut(100);
        }

        if (e.action === "updateHUD"){
            $('.ProgressBarHealth').css('width', e.health + "%");
            $('.texto-porciento').text(Math.round(e.health) + "%");
        }
    });
});