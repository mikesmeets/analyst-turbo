Template.IdeaBank.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if(err) {
                    console.log(err);
                }// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});

Template.imageView.helpers({
    images: function () {
        return Images.find(); // Where Images is an FS.Collection instance
    }
});