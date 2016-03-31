if(Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('dashboard');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/dashboard',{
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', {main: 'dashboard'});
    }
});

FlowRouter.route('/diligence-planner',{
    name: 'diligence-planner',
    action() {
        BlazeLayout.render('MainLayout', {main: 'DiligencePlanner'});
    }
});

FlowRouter.route('/idea-bank',{
    name: 'idea-bank',
    action() {
        BlazeLayout.render('MainLayout', {main: 'IdeaBank'});
    }
});