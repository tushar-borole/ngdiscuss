/*Author: Tushar Borole
Discription:It contain url depend on mock or development
Copyright:Karma Worldwide Inc. 2014*/

app.constant('APP_URL', {
    'development': {
        'loginuser': 'api/login',
        'registeruser': 'api/user',
        'loggedinuser': 'api/loggedInUser',
        'getblog': 'api/blog',
        'createblog':'api/blog',
         'getblogdetails':'api/blog/{{blogid}}',
        'createcomment':'api/blog/{{blogid}}/comment',
        'getcomment':'api/blog/{{blogid}}/comment',
        'facebookconnect':'auth/facebook'

    },
    'mock': {
        'loginuser': 'json/static/login.json',
        'loggedinuser': 'json/static/loggedin.json',
        'getmail': 'json/static/mailjson.json',
        'updatemail': 'json/static/updatemail.json',
        'createmail': 'json/static/createmail.json',
        'deletemail': 'json/static/deletemail.json',
        'getmailmodule': 'json/static/getmailmodule.json',
        'getrole': 'json/static/role.json'


    }
});
