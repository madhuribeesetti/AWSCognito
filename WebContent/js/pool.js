function func(){    
	AWSCognito.config.region = 'eu-west-1'; //This is required to derive the endpoint
    
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var phonenum=document.getElementById("phonenum").value;
    var passwrd=document.getElementById("passwrd").value;
    
    var poolData = { UserPoolId : 'eu-west-1_8M0wO6VXT',
        ClientId : '2m7783cql5htuk44gmnnjnis7v'
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    var attributeList = [];
    
    var dataEmail = {
        Name : 'email',
        Value : mail
    };
    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : phonenum
    };
    var dataName = {
            Name : 'name',
            Value : name
        };
    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
    var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    userPool.signUp('username', 'password', attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}