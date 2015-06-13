/*Author: Tushar Borole
Discription:It contain url depend on mock or development
Copyright:Karma Worldwide Inc. 2014*/

app.constant('APP_URL', {
    'development': {
        'loginuser': 'api/login',
        'registeruser': 'api/user',
        'loggedinuser': 'api/v1/users/loggedInUser',
        'getblog': 'api/blog',
        'createblog':'api/blog',
         'getblogdetails':'api/blog/{{blogid}}',
        'createcomment':'api/blog/{{blogid}}/comment',
        'getcomment':'api/blog/{{blogid}}/comment'

    },
    'mock': {
        'loginuser': 'json/static/login.json',
        'loggedinuser': 'json/static/loggedin.json',
        'getmail': 'json/static/mailjson.json',
        'updatemail': 'json/static/updatemail.json',
        'createmail': 'json/static/createmail.json',
        'deletemail': 'json/static/deletemail.json',
        'getmailmodule': 'json/static/getmailmodule.json',
        'getrole': 'json/static/role.json',
        'invitemail': 'api/v1/users/inviteusers',
        'getuser': 'json/static/user.json',
        'mailcomponent': 'json/static/mailcomponent.json',
        'updatestatus': 'json/static/updatestatus.json',
        'companydetails': 'json/static/company.json',
        'updatecompanystatus': 'api/v1/companystatus.json',
        'projectdetails': 'json/static/project.json',
        'updateprojectstatus': 'json/static/projectstatus.json',
         'teamdetails': 'json/static/team.json',
        'updateteamstatus': 'json/static/teamstatus.json',
         'getcategory': 'json/static/category.json',
        'createcategory': 'json/static/createcategory.json',
        'deletecategory': 'json/static/deletecatgory.json',
        'updatecategory': 'json/static/updatecategory.json',
        'getsubcategory': 'json/static/subcategory.json',
         'ngodetails': 'json/static/ngo.json',
        'updatengostatus': 'json/static/ngostatus.json',
        'ngoproject':'json/static/ngoproject.json',
        'ngomember':'json/static/ngomenber.json',
         'getcountdashboard':'json/static/dashboardcount.json',
        'getngodashboard':'json/static/ngodashboard.json',
        'getcompanydashboard':'json/static/companydashboard.json',
        'getuserdashboard':'json/static/userdashboard.json',
        'getuserinvitations':'json/static/userinvitations.json',
        'updateinvite':'json/static/updateinvitations.json',
        'deleteinvite':'json/static/deleteinvitations.json',
        'getuserdetails':'json/static/userDetails.json',
        'deleteuser':'json/static/userdelete.json',
         'getregistration':'json/static/manageregistration.json',
        'deleteregistration':'',
        'updateregistration':'',
        'getregistrationdetail':'json/static/updateregistration.json',
        'resendinvitaion':'',
          'getpaymentinfo':'',
        'resendpaymentinvitaion':'',
        'getstatus':'json/static/registrationstatus.json',
        'getdocument':'',
        'updatedocument':'',
        'createdocument':'',
        'deletedocument':'',
        'updatemailimage':'',
        'updateuser':'json/static/updateuser.json',
        'imageupload':'imageupload'


    }
});
