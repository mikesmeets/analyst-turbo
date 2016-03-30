Template.DiligenceItems.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('diligenceItems');
    });
});

Template.DiligenceItems.helpers({
    diligenceItems: ()=> {
        return DiligenceItems.find({});
    },
    tableSettings: ()=> {
        return {
            fields: [
                { key: 'ticker', label: 'Ticker' },
                { key: 'longOrShort', label: 'Direction' },
                { key: 'interest', label: 'Interest' },
                { key: 'type', label: 'Type' },
                { key: 'thesis', label: 'Thesis' },
                { key: 'work', label: 'Work' },
                { key: 'workweek', label: 'Workweek'}
            ],
            filters: ['weekOfFilter']
        };
    }
});

Template.WeekOfFilter.created = function () {
    this.filter = new ReactiveTable.Filter('weekOfFilter',['workweek']);
};

Template.WeekOfFilter.events({
    'keyup .week-of-work-filter-input, input .week-of-work-filter-input': function(event, template) {
        var input = $(event.target).val();
        template.filter.set({"$in":[input]});
    }
});