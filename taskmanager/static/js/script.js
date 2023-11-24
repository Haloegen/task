document.addEventListener('DOMContentLoaded', function () {
    // side nav installation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmmm, yyyy",
        i18n: { done: "Select" },
    });

    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);


    let display = document.querySelectorAll('.collapsible');
    M.Collapsible.init(display);
});