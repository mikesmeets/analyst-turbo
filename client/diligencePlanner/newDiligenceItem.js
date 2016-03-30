Template.NewDiligenceItem.events({
    'submit form'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        var target = event.target;
        var item = {
            ticker: target.ticker.value,
            longOrShort: target.longOrShort.value,
            interest: target.interest.value,
            type: target.type.value,
            thesis: target.thesis.value,
            source: target.source.value,
            work: target.work.value
        };

        DiligenceItems.insert(item, function (error, result) {
            console.log(error);
            console.log(result);
        });

        target.reset();
    }
});