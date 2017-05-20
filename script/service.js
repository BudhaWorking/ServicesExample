app.service('customerServices', function(){

		var Sony={
			name: 'Sony',
			product: 'Mobile',
			model: 'Xspiria',
			modelNo: '101xer',
			price: '20000' 

		}
		this.getSonyDetails=function(){
			return Sony;
		}
})