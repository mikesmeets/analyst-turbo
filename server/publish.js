Meteor.publish('diligenceItems', function() {
    return DiligenceItems.find({owner: this.userId});
});