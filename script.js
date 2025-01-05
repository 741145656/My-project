(function () {
    ('#about-me').click(function () {
      ('.modal').addClass('modal-active');
    });
    ('.modal-close-button').click(function () {
      ('.modal').removeClass('modal-active');
    });
  });
  ('.modal').mouseup(function (e) {
    let modalContent = (".modal-content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      (this).removeClass('modal-active');
    }
  });
