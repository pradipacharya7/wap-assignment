window.onload=function()
		{
			var accountInfoList=[];
			var myModule=(function(){
				var createAccount=function(accType,accDeposit)
				{
				
					var accountType=accType;
					var deposit=accDeposit;
					

					accountInfoList.push(
						{
						accountType:accountType,
						accDeposit:accDeposit
						});
document.getElementById("textarea").value = '';
				for(var a of accountInfoList)
				{
					// document.getElementById("textarea").value=`Account Type:${a.accountType} Balance:${a.accDeposit}\n`;
					document.getElementById("textarea").value+="Account:"+a.accountType+" Balance: "+a.accDeposit+"\n";
				}
					
				}

				var setValues=function(accType,accDeposit)
				{
					

					createAccount(accType,accDeposit);
				}
				return{
					setValues:setValues
				}

						
				})();


				function main() {
				

				myModule.setValues(document.getElementById("accountType").value,document.getElementById("deposit").value);
				return false;

				}

				document.getElementById("createAccount").onsubmit=main;

		}
		