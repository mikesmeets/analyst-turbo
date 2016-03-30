DiligenceItems = new Mongo.Collection('diligenceItems');

DiligenceItems.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

DiligenceItemsSchema = new SimpleSchema({
    ticker: {
        type: String,
        label: "Ticker"
    },
    longOrShort: {
        type: String,
        label: "Long or Short"
    },
    interest: {
        type: String,
        label: "Interest Level"
    },
    type: {
        type: String,
        label: "Work Type"
    },
    thesis: {
        type: String,
        label: "Thesis"
    },
    source: {
        type: String,
        label: "Source"
    },
    work: {
        type: String,
        label: "Work"
    },
    owner: {
        type: String,
        label: "Owner",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    },
    workweek: {
        type: String,
        label: "Workweek",
        autoValue: function() {
            var date = new Date();
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            var week1 = new Date(date.getFullYear(), 0, 4);
            var curWeek = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
            return (date.getFullYear() + '-W'+curWeek);
        },
        autoform: {
            type: 'hidden'
        }
    }
});

DiligenceItems.attachSchema(DiligenceItemsSchema);