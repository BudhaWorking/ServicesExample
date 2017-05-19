app.provider('myProvider', function () {    //seperate file use
	var myObj={};
	myObj.name="Abhishek";
	myObj.last="shahi";
	myObj.getName= function(){
		return this.name+" "+this.last;
	}

	this.$get = function(){
		return myObj;
	}
})
app.config(['myProviderProvider', function(myProvider){
	console.log(myProvider.$get().name)
	console.log(myProvider.$get().getName())
}])