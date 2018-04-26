function func1(){ 
	
	var searchmail= document.getElementById("searchmail").value;	
	var searchpass=document.getElementById("searchpass").value;
	
	//authenticate User
	var poolData = { UserPoolId : 'eu-west-1_8M0wO6VXT',
	        ClientId : '1kgrrtgp659irhcigogqhkk03r'
	    };
	    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = { 
            Username : searchmail,
            Pool : userPool
        };

        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

        var authenticationData = {
            Username : searchmail,
            Password : searchpass
        };

        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                alert('authentication successful!')
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                /*Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
                console.log('idToken + ' + result.idToken.jwtToken);
            },

            onFailure: function(err) {
                alert(err);
            },
        });
	
	
	//retrieve attribute
	/*cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        for (i = 0; i < result.length; i++) {
            console.log('attribute' + result[i].getName() + ' has value ' + result[i].getValue());
        }
    });*/
	
}