Template.DiligencePlanner.events({
    "click .toggle-button": function(event) {
        $(event.target).parents('.new-diligence-item-container').toggleClass('open');
    }
});