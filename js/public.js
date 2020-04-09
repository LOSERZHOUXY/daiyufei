var flag = true;
			document.getElementById('scollBtn').onclick=function(){
			if(flag){
				/* document.getElementsByTagName('div')[0].style.overflow="scroll"; */
				document.documentElement.style.overflowY = 'hidden'; 
				flag=false;
				
			}else{
				/* document.getElementsByTagName('div')[0].style.overflow="scroll"; */
				document.documentElement.style.overflowY = 'scroll'; 
				flag=true;
			}
			}