/**
 * Projects view model
 */

var app = app || {};

app.Projects = (function () {
    'use strict'

    // Activities model
    var projectsModel = (function () {

        var projectModel = {

            id: 'Id',
            fields: {
                COMPANY: {
                    field: 'COMPANY',
                    defaultValue: ''
                },
                CreatedAt: {
                    field: 'CreatedAt',
                    defaultValue: new Date()
                },
                Picture: {
                    fields: 'Picture',
                    defaultValue: null
                },
                UserId: {
                    field: 'UserId',
                    defaultValue: null
                }
            },
            CreatedAtFormatted: function () {

                return app.helper.formatDate(this.get('CreatedAt'));
            },
            PictureUrl: function () {

                return app.helper.resolvePictureUrl(this.get('Picture'));
            },
            User: function () {

                var userId = this.get('UserId');

                var user = $.grep(app.Users.users(), function (e) {
                    return e.Id === userId;
                })[0];

                return user ? {
                    DisplayName: user.DisplayName,
                    PictureUrl: app.helper.resolveProfilePictureUrl(user.Picture)
                } : {
                    DisplayName: 'Anonymous',
                    PictureUrl: app.helper.resolveProfilePictureUrl()
                };
            },
            isVisible: function () {
                var currentUserId = app.Users.currentUser.data.Id;
                var userId = this.get('UserId');

                return currentUserId === userId;
            }
        };

        // Activities data source. The Backend Services dialect of the Kendo UI DataSource component
        // supports filtering, sorting, paging, and CRUD operations.
        var projectsDataSource = new kendo.data.DataSource({
            type: 'everlive',
            schema: {
                model: projectModel
            },
            transport: {
                // Required by Backend Services
                typeName: 'Projects'
            },
            change: function (e) {

                if (e.items && e.items.length > 0) {
                    $('#no-projects-span').hide();
                } else {
                    $('#no-projects-span').show();
                }
            },
            sort: { field: 'CreatedAt', dir: 'desc' }
        });

        return {
            projects: projectsDataSource
        };

    }());

    // Activities view model
    var projectsViewModel = (function () {

        // Navigate to activityView When some activity is selected
        var projectSelected = function (e) {

            app.mobileApp.navigate('views/projectView.html?uid=' + e.data.uid);
        };

        // Navigate to app home
        var navigateHome = function () {

            app.mobileApp.navigate('#welcome');
        };

        // Logout user
        var logout = function () {

            app.helper.logout()
            .then(navigateHome, function (err) {
                app.showError(err.message);
                navigateHome();
            });
        };

        return {
            projects: projectsModel.projects,
            projectSelected: projectSelected,
            logout: logout
        };

    }());

    return projectsViewModel;

}());
