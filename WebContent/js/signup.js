function func(){    
	
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var phonenum=document.getElementById("phonenum").value;
    var passwrd=document.getElementById("passwrd").value;
    AWSCognito.config.region = 'eu-west-1'; //This is required to derive the endpoint
    var poolData = { UserPoolId : 'eu-west-1_8M0wO6VXT',
        ClientId : '1kgrrtgp659irhcigogqhkk03r'
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    var attributeList = [];
    
   /* var dataEmail = {
        Name : 'email',
        Value : mail
    };*/
    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : phonenum
    };
     var dataName = {
            Name : 'name',
            Value : name
        }; 
     var dataPassword = {
    	        Name : 'password',
    	        Value : passwrd
    	    };
    /*var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);*/
    var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
     var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);
 
   	/*attributeList.push(attributeEmail);*/
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);
    
 
    userPool.signUp(mail, passwrd, attributeList, null, function(err, result){
    	console.log("hi");
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
    var params = {
    		  UserPoolId: 'eu-west-1_8M0wO6VXT', /* required */
    		  Username: 'mail' /* required */
    		};
    		cognitoidentityserviceprovider.adminConfirmSignUp(params, function(err, data) {
    		  if (err) console.log(err, err.stack); // an error occurred
    		  else     console.log(data);           // successful response
    		});
}
