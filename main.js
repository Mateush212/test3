const password=document.getElementById("password");
const meterInside=document.getElementById("meterInside");
const reg0=new RegExp('.{5,}');
const reg1=new RegExp('.{8,}');
const reg2=new RegExp('[a-z]+');
const reg3=new RegExp('[A-Z]+');
const reg4=new RegExp('[0-9]+');
const reg5=new RegExp('[^a-z0-9]+', 'i');
const regs=[reg0, reg1, reg2, reg3, reg4, reg5];
function checkPassword()
{
	passwordStrength=0;
	for(let i=0;i<regs.length;i++)
	{
		if(regs[i].test(password.value)) passwordStrength++;
	}
	switch(passwordStrength)
	{
		case 1: meterInside.style.backgroundColor="red";
		break;
		case 2: meterInside.style.backgroundColor="orange";
		break;
		case 3: meterInside.style.backgroundColor="yellow";
		break;
		case 4: meterInside.style.backgroundColor="dodgerblue";
		break;
		case 5: meterInside.style.backgroundColor="green";
		break;
		case 6: meterInside.style.backgroundColor="forestgreen";
		break;
	}
	passwordStrength*=100/regs.length;
	meterInside.style.width=passwordStrength+"%";
}
password.addEventListener("input", checkPassword);