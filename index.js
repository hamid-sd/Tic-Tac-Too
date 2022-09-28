var loaders = document.getElementById("loaders");

setTimeout(()=>{
	loaders.style.opacity = '0';
	setTimeout(()=>{
		loaders.style.display = 'none';
	},700);
},4000);



var grs = document.getElementById("grs");
var xo = document.getElementById("x-o");
var x1 = document.getElementById("x1");
var x2= document.getElementById("x2");
var c1 = document.getElementById("c1");
var c2= document.getElementById("c2");
var xuo = "x";

xo.addEventListener("click", function () {
	if (xuo == "x") {
		grs.style.left = '75%';
		xuo = "o";
		x1.style.backgroundColor = '#a9bfca';
		x2.style.backgroundColor = '#a9bfca';
		c1.style.backgroundColor = '#11232d';
		c2.style.backgroundColor = '#a9bfca';
	} else {
		grs.style.left = '25%';
		xuo = "x";
		x1.style.backgroundColor = '#11232d';
		x2.style.backgroundColor = '#11232d';
		c1.style.backgroundColor = '#a9bfca';
		c2.style.backgroundColor = '#11232d';
	}
});
//////////////////////////////////

var trn = "x";
var bcc = document.getElementsByClassName("blc");
var imgs = document.getElementsByClassName("imgs");
var trnimg = document.getElementById("trnim");
let tab = [0,1,2,3,4,5,6,7,8];
var vs ;
var cpu= document.getElementById("cpu");
var amis= document.getElementById("amis");
var cont1= document.getElementById("cont1");
var xsx= document.getElementById("xsx");
var oso= document.getElementById("oso");
var retun= document.getElementById("retun");
var rest= document.getElementById("rest");
var fin = false;
var exc = false;

retun.addEventListener("click",function () {
	rest.style.display = 'flex';
	rest.style.opacity = '1';
} );

var yes= document.getElementById("yes");
var no= document.getElementById("no");
var xss= document.getElementById("xss");
var ss= document.getElementById("ss");
var oss= document.getElementById("oss");
var wx = 0;
var wo = 0;
var ww = 0;
var won1 = document.getElementById("won1");
var won2 = document.getElementById("won2");
var xox = document.getElementById("xox");
var ppp = document.getElementById("ppp");

yes.addEventListener("click",function () {
	rest.style.opacity = '0';
	wx = 0;
	wo = 0;
	ww = 0;
	xss.textContent = "0";
	ss.textContent = "0";
	oss.textContent = "0";
	setTimeout(function () {
		rest.style.display = 'none';
	},500);
	tab = [0,1,2,3,4,5,6,7,8];
	trn = "x";
	trnimg.src = "images/x.png";
	for (var i = 0; i < bcc.length; i++) {
		imgs[i].style.opacity = '0';	
	};
	setTimeout(function () {
		for (var i = 0; i < bcc.length; i++) {
			imgs[i].src = "#";
			bcc[i].disabled = false;
		};
	},100);
	if (xuo == "o") {
		setTimeout(function () {
			var t = Math.floor(Math.random() * tab.length);
			var z = tab[t];
			imgs[z].src = "images/x.png";
			imgs[z].style.opacity = '1';
			bcc[z].disabled = true;
			tab.splice(t,1);
			trn = "o";
			trnimg.src = "images/o.png";
		},1200);
	};
} );
no.addEventListener("click",function () {
	rest.style.opacity = '0';
	setTimeout(function () {
		rest.style.display = 'none';
	},500);
} );

cpu.addEventListener("click",function () {
	vs = "cpu";
	cont1.style.opacity = '0';
	setTimeout(function () {
		cont1.style.display = 'none';
		cont2.style.display = 'grid';
		cont2.style.opacity = '1';
	},500);
	if (xuo == "x") {
		xsx.textContent = "X(YOU)";
		oso.textContent = "O(CPU)";
	}else {
		xsx.textContent = "X(CPU)";
		oso.textContent = "O(YOU)";
		setTimeout(function () {
			var t = Math.floor(Math.random() * tab.length);
			var z = tab[t];
			imgs[z].src = "images/x.png";
			imgs[z].style.opacity = '1';
			bcc[z].disabled = true;
			tab.splice(t,1);
			trn = "o";
			trnimg.src = "images/o.png";
		},1200);
	}
});
amis.addEventListener("click",function () {
	vs = "amis";
	cont1.style.opacity = '0';
	setTimeout(function () {
		cont1.style.display = 'none';
		cont2.style.display = 'grid';
		cont2.style.opacity = '1';
	},500);
});
function finexec () {
	if (tab.length == 0 && fin == false && exc == false) {
		ppp.textContent = "NO ONE TAKES THE ROUND";
		xox.style.display = 'none';
		ppp.style.color = '#a9bfca';
		won1.textContent = "";
		fin = false;
		exc = true;
		setTimeout(function () {
			howon.style.display = 'flex';
			howon.style.opacity = '1';
		},1000);
	} 
}
function tst (x,y,z) {
	if (imgs[x].src == "file:///C:/Users/Dell/Desktop/defi/X%20O/images/x.png") {
		bcc[x].style.backgroundColor = '#31c4be';
		bcc[y].style.backgroundColor = '#31c4be';
		bcc[z].style.backgroundColor = '#31c4be';
		bcc[x].style.boxShadow = '0px 4px 0px #1d7673';
		bcc[y].style.boxShadow = '0px 4px 0px #1d7673';
		bcc[z].style.boxShadow = '0px 4px 0px #1d7673';
		imgs[x].src = "images/xg.png";
		imgs[y].src = "images/xg.png";
		imgs[z].src = "images/xg.png";
		fin = true;
		won1.textContent = "CPU WON!";
		xox.src = "images/x.png";
		ppp.style.color = '#31c4be';
		xox.style.display = 'block';
		ppp.textContent = "TAKES THE ROUND";
		setTimeout(function () {
			howon.style.display = 'flex';
			howon.style.opacity = '1';
		},1000);
	} else if (imgs[x].src == "file:///C:/Users/Dell/Desktop/defi/X%20O/images/o.png") {
		bcc[x].style.backgroundColor = '#f1b336';
		bcc[y].style.backgroundColor = '#f1b336';
		bcc[z].style.backgroundColor = '#f1b336';
		bcc[x].style.boxShadow = '0px 4px 0px #a77b23';
		bcc[y].style.boxShadow = '0px 4px 0px #a77b23';
		bcc[z].style.boxShadow = '0px 4px 0px #a77b23';
		imgs[x].src = "images/og.png";
		imgs[y].src = "images/og.png";
		imgs[z].src = "images/og.png";
		fin = true;
		won1.textContent = "CPU WON!";
		xox.src = "images/o.png";
		ppp.style.color = '#f1b336';
		xox.style.display = 'block';
		ppp.textContent = "TAKES THE ROUND";
		setTimeout(function () {
			howon.style.display = 'flex';
			howon.style.opacity = '1';
		},1000);
	};
}
function cputest () {
	if (vs == "cpu") {
		setTimeout(function () {
			if (xuo == "x" && trn == "o" && fin == false) {
				if (tab.length !== 0) {
					var t = Math.floor(Math.random() * tab.length);
					var z = tab[t];
					imgs[z].src = "images/o.png";
					imgs[z].style.opacity = '1';
					bcc[z].disabled = true;
					tab.splice(t,1);
					trn = "x";
					trnimg.src = "images/x.png";
				}
			} else if (xuo == "o" && trn == "x" && fin == false){
				var t = Math.floor(Math.random() * tab.length);
				var z = tab[t];
				imgs[z].src = "images/x.png";
				imgs[z].style.opacity = '1';
				bcc[z].disabled = true;
				tab.splice(t,1);
				trn = "o";
				trnimg.src = "images/o.png";
			}
			if ((imgs[0].src==imgs[1].src && imgs[1].src==imgs[2].src)) {
				tst (0,1,2);
			} else if ((imgs[3].src==imgs[4].src && imgs[4].src==imgs[5].src)) {
				tst (3,4,5);
			}else if ((imgs[6].src==imgs[7].src && imgs[7].src==imgs[8].src)) {
				tst (6,7,8);
			}else if ((imgs[0].src==imgs[3].src && imgs[3].src==imgs[6].src)) {
				tst (0,3,6);
			}else if ((imgs[1].src==imgs[4].src && imgs[4].src==imgs[7].src)) {
				tst (1,4,7);
			}else if ((imgs[2].src==imgs[5].src && imgs[5].src==imgs[8].src)) {
				tst (2,5,8);
			}else if ((imgs[0].src==imgs[4].src && imgs[4].src==imgs[8].src)) {
				tst (0,4,8);
			}else if ((imgs[2].src==imgs[4].src && imgs[4].src==imgs[6].src)) {
				tst (2,4,6);
			};
			finexec ();
		},800);
	};
};
function cpuplay (i) {
	if (vs == "cpu") {
		if (trn == xuo) {
			imgs[i].style.opacity = '1';
			bcc[i].disabled = true;
			tab.splice(tab.indexOf(i),1);
			if (xuo == "x") {
				imgs[i].src = "images/x.png";
				trn = "o";
				trnimg.src = "images/o.png";
			} else {
				imgs[i].src = "images/o.png";
				trn = "x";
				trnimg.src = "images/x.png";
			}
		}
	} else {
		imgs[i].style.opacity = '1';
		bcc[i].disabled = true;
		tab.splice(tab.indexOf(i),1);
		if (trn == "x") {
			imgs[i].src = "images/x.png";
			trn = "o";
			trnimg.src = "images/o.png";
		}else {
			imgs[i].src = "images/o.png";
			trn = "x";
			trnimg.src = "images/x.png";
		}
	} 
}
function youtext (x,y,z) {
	if (imgs[x].src == "file:///C:/Users/Dell/Desktop/defi/X%20O/images/x.png") {
		bcc[x].style.backgroundColor = '#31c4be';
		bcc[y].style.backgroundColor = '#31c4be';
		bcc[z].style.backgroundColor = '#31c4be';
		bcc[x].style.boxShadow = '0px 4px 0px #1d7673';
		bcc[y].style.boxShadow = '0px 4px 0px #1d7673';
		bcc[z].style.boxShadow = '0px 4px 0px #1d7673';
		imgs[x].src = "images/xg.png";
		imgs[y].src = "images/xg.png";
		imgs[z].src = "images/xg.png";
		fin = true;
		xox.style.display = 'block';
		ppp.textContent = "TAKES THE ROUND";
		if (vs == "cpu") {
			won1.textContent = "YOU WON!";
		} else {
			won1.textContent = "";
		}
		xox.src = "images/x.png";
		ppp.style.color = '#31c4be';
		setTimeout(function () {
			howon.style.display = 'flex';
			howon.style.opacity = '1';
		},1000);
	} else if (imgs[x].src == "file:///C:/Users/Dell/Desktop/defi/X%20O/images/o.png") {
		bcc[x].style.backgroundColor = '#f1b336';
		bcc[y].style.backgroundColor = '#f1b336';
		bcc[z].style.backgroundColor = '#f1b336';
		bcc[x].style.boxShadow = '0px 4px 0px #a77b23';
		bcc[y].style.boxShadow = '0px 4px 0px #a77b23';
		bcc[z].style.boxShadow = '0px 4px 0px #a77b23';
		imgs[x].src = "images/og.png";
		imgs[y].src = "images/og.png";
		imgs[z].src = "images/og.png";
		xox.style.display = 'block';
		ppp.textContent = "TAKES THE ROUND";
		fin = true;
		if (vs == "cpu") {
			won1.textContent = "YOU WON!";
		} else {
			won1.textContent = "";
		}
		xox.src = "images/o.png";
		ppp.style.color = '#f1b336';
		setTimeout(function () {
			howon.style.display = 'flex';
			howon.style.opacity = '1';
		},1000);
	}	
}
bcc[0].addEventListener("click",function () {
	cpuplay (0);
	if ((imgs[0].src==imgs[1].src && imgs[1].src==imgs[2].src)) {
		youtext (0,1,2);
	}else if ((imgs[0].src==imgs[3].src && imgs[3].src==imgs[6].src)) {
		youtext (0,3,6);
	}else if ((imgs[0].src==imgs[4].src && imgs[4].src==imgs[8].src)) {
		youtext (0,4,8);
	};
	cputest();
	finexec ();
});


bcc[1].addEventListener("click",function () {
	cpuplay (1);
	if ((imgs[0].src==imgs[1].src && imgs[1].src==imgs[2].src)) {
		youtext (0,1,2);
	}else if ((imgs[1].src==imgs[4].src && imgs[4].src==imgs[7].src)) {
		youtext (1,4,7);
	};
	cputest();
	finexec ();
});




bcc[2].addEventListener("click",function () {
	cpuplay (2);
	if ((imgs[0].src==imgs[1].src && imgs[1].src==imgs[2].src)) {
		youtext (0,1,2);
	}else if ((imgs[2].src==imgs[5].src && imgs[5].src==imgs[8].src)) {
		youtext (2,5,8);
	}else if ((imgs[2].src==imgs[4].src && imgs[4].src==imgs[6].src)) {
		youtext (2,4,6);
	};
	cputest();
	finexec ();
});

bcc[3].addEventListener("click",function () {
	cpuplay (3);
	if ((imgs[3].src==imgs[4].src && imgs[4].src==imgs[5].src)) {
		youtext (3,4,5);
	}else if ((imgs[0].src==imgs[3].src && imgs[3].src==imgs[6].src)) {
		youtext (0,3,6);
	};
	cputest();
	finexec ();
});

bcc[4].addEventListener("click",function () {
	cpuplay (4);
	if ((imgs[3].src==imgs[4].src && imgs[4].src==imgs[5].src)) {
		youtext (3,4,5);
	}else if ((imgs[1].src==imgs[4].src && imgs[4].src==imgs[7].src)) {
		youtext (1,4,7);
	}else if ((imgs[0].src==imgs[4].src && imgs[4].src==imgs[8].src)) {
		youtext (0,4,8);
	}else if ((imgs[2].src==imgs[4].src && imgs[4].src==imgs[6].src)) {
		youtext (2,4,6);
	};
	cputest();
	finexec ();
});
bcc[5].addEventListener("click",function () {
	cpuplay (5);
	if ((imgs[3].src==imgs[4].src && imgs[4].src==imgs[5].src)) {
		youtext (3,4,5);
	}else if ((imgs[2].src==imgs[5].src && imgs[5].src==imgs[8].src)){
		youtext (2,5,8);
	};
	cputest();
	finexec ();
});

bcc[6].addEventListener("click",function () {
	cpuplay (6);
	if ((imgs[0].src==imgs[3].src && imgs[3].src==imgs[6].src)) {
		youtext (0,3,6);
	}else if ((imgs[2].src==imgs[4].src && imgs[4].src==imgs[6].src)) {
		youtext (2,4,6);
	}else if ((imgs[8].src==imgs[7].src && imgs[7].src==imgs[6].src)) {
		youtext (6,7,8);
	};
	cputest();
	finexec ();
});

bcc[7].addEventListener("click",function () {
	cpuplay (7);
	if ((imgs[6].src==imgs[7].src && imgs[7].src==imgs[8].src)) {
		youtext (6,7,8);
	}else if ((imgs[1].src==imgs[4].src && imgs[4].src==imgs[7].src)) {
		youtext (1,4,7);
	};
	cputest();
	finexec ();
});

bcc[8].addEventListener("click",function () {
	cpuplay (8);
	if ((imgs[6].src==imgs[7].src && imgs[7].src==imgs[8].src)) {
		youtext (6,7,8);
	}else if ((imgs[2].src==imgs[5].src && imgs[5].src==imgs[8].src)) {
		youtext (2,5,8);
	}else if ((imgs[0].src==imgs[4].src && imgs[4].src==imgs[8].src)) {
		youtext (0,4,8);
	};
	cputest();
	finexec ();
});

var qit = document.getElementById("qit");
var nxt = document.getElementById("nxt");
var howon = document.getElementById("howon");

qit.addEventListener('click', function () {
	cont2.style.opacity = '0';
	howon.style.opacity = '0';
	tab = [0,1,2,3,4,5,6,7,8];
	fin = false;
	exc = false;
	setTimeout(function () {
		cont2.style.display = 'none';
		howon.style.display = 'none';
		cont1.style.display = 'block';
		cont1.style.opacity = '1';
		for (var i = 0; i < bcc.length; i++) {
			bcc[i].disabled = false;
			bcc[i].style.backgroundColor = '#1f3540';
			bcc[i].style.boxShadow = '0px 5px 0px #11232d';
			imgs[i].style.opacity = '0';	
			imgs[i].src = "#";
		};
		wx = 0;
		wo = 0;
		ww = 0;
		xss.textContent = "0";
		ss.textContent = "0";
		oss.textContent = "0";
		trn = "x";
		trnimg.src = "images/x.png";
	},500);
});
nxt.addEventListener('click', function () {
	howon.style.opacity = '0';
	tab = [0,1,2,3,4,5,6,7,8];
	trn = "x";
	trnimg.src = "images/x.png";
	fin = false;
	setTimeout(function () {
		howon.style.display = 'none';
		for (var i = 0; i < bcc.length; i++) {
			bcc[i].style.backgroundColor = '#1f3540';
			bcc[i].style.boxShadow = '0px 5px 0px #11232d';
			imgs[i].style.opacity = '0';	
		};
		setTimeout(function () {
			for (var i = 0; i < bcc.length; i++) {
				imgs[i].src = "#";
				bcc[i].disabled = false;
			}
		},100);
		ww++;
		ss.textContent = ww;
		if (exc == false) {
			if (xox.src == "file:///C:/Users/Dell/Desktop/defi/X%20O/images/x.png") {
				wx++;
				xss.textContent = wx;
			} else {
				wo++;
				oss.textContent = wo;
			}
		}else {
			exc = false;
		}
	},500);
	if (xuo == "o") {
		setTimeout(function () {
			var t = Math.floor(Math.random() * tab.length);
			var z = Number(tab[t]);
			imgs[z].src = "images/x.png";
			imgs[z].style.opacity = '1';
			bcc[z].disabled = true;
			tab.splice(t,1);
			trn = "o";
			trnimg.src = "images/o.png";
		},1200);
	};
});