function func2(){
	var mail=document.getElementById("mail").value
	
	var poolData = { UserPoolId : 'eu-west-1_8M0wO6VXT',
        ClientId : '1kgrrtgp659irhcigogqhkk03r'
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
var userData = { 
        Username : mail,
        Pool : userPool
    };

    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
	
	cognitoUser.forgotPassword({
	    onSuccess: function (result) {
	        console.log('call result: ' + result);
	    },
	    onFailure: function(err) {
	        alert(err);
	    },
	    inputVerificationCode() {
	        var verificationCode = prompt('Please input verification code ' ,'');
	        var newPassword = prompt('Enter new password ' ,'');
	        cognitoUser.confirmPassword(verificationCode, newPassword, this);
	    }
	});
	
}