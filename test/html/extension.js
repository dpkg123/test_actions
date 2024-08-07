game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"9-17人",editable: false,content:function (config,pack){
			lib.arenaReady.push(function(){
				// 完善9-17人国战模式其他-控制界面座位号翻译
				lib.translate.unknown8 = "九号位";
				lib.translate.unknown9 = "十号位";
				lib.translate.unknown10 = "十一号位";
				lib.translate.unknown11 = "十二号位";
				lib.translate.unknown12 = "十三号位";
				lib.translate.unknown13 = "十四号位";
				lib.translate.unknown14 = "十五号位";
				lib.translate.unknown15 = "十六号位";
				lib.translate.unknown16 = "十七号位";
				// 界面缩放
				lib.configMenu.appearence.config.ui_zoom={
					name:'界面缩放',
					unfrequent:true,
					init:'small',
					item:{
						normalw:'170%',
						normalv:'165%',
						normalu:'160%',
						normalt:'155%',
						normals:'150%',
						normalr:'145%',
						normalq:'140%',
						normalp:'135%',
						normala:'130%',
						normalb:'125%',
						normalc:'120%',
						normald:'115%',
						normale:'110%',
						normalf:'105%',
						normal:'100%',
						small:'95%',
						vsmall:'90%',
						normali:'85%',
						normalj:'80%',
						normalk:'75%',
						normall:'70%',
						normalm:'65%',
						normaln:'60%',
						normalo:'55%',
					},
					onclick:function(zoom){
						game.saveConfig('ui_zoom',zoom);
						switch(zoom){
							case 'normalw':zoom=1.7;break;
							case 'normalv':zoom=1.65;break;
							case 'normalu':zoom=1.6;break;
							case 'normalt':zoom=1.55;break;
							case 'normals':zoom=1.5;break;
							case 'normalr':zoom=1.45;break;
							case 'normalq':zoom=1.4;break;
							case 'normalp':zoom=1.35;break;
							case 'normala':zoom=1.3;break;
							case 'normalb':zoom=1.25;break;
							case 'normalc':zoom=1.2;break;
							case 'normald':zoom=1.15;break;
							case 'normale':zoom=1.1;break;
							case 'normalf':zoom=1.05;break;
							case 'small':zoom=0.95;break;
							case 'vsmall':zoom=0.9;break;
							case 'normali':zoom=0.85;break;
							case 'normalj':zoom=0.8;break;
							case 'normalk':zoom=0.75;break;
							case 'normall':zoom=0.7;break;
							case 'normalm':zoom=0.65;break;
							case 'normaln':zoom=0.6;break;
							case 'normalo':zoom=0.55;break;
							default:zoom=1;
						}
						game.documentZoom=game.deviceZoom*zoom;
						ui.updatez();
					}
				};
	 
				var zoom;
				switch(lib.config.ui_zoom){
					case 'normalw':zoom=1.7;break;
					case 'normalv':zoom=1.65;break;
					case 'normalu':zoom=1.6;break;
					case 'normalt':zoom=1.55;break;
					case 'normals':zoom=1.5;break;
					case 'normalr':zoom=1.45;break;
					case 'normalq':zoom=1.4;break;
					case 'normalp':zoom=1.35;break;
					case 'normala':zoom=1.3;break;
					case 'normalb':zoom=1.25;break;
					case 'normalc':zoom=1.2;break;
					case 'normald':zoom=1.15;break;
					case 'normale':zoom=1.1;break;
					case 'normalf':zoom=1.05;break;
					case 'small':zoom=0.95;break;
					case 'vsmall':zoom=0.9;break;
					case 'normali':zoom=0.85;break;
					case 'normalj':zoom=0.8;break;
					case 'normalk':zoom=0.75;break;
					case 'normall':zoom=0.7;break;
					case 'normalm':zoom=0.65;break;
					case 'normaln':zoom=0.6;break;
					case 'normalo':zoom=0.55;break;
					default:zoom=1;
				}
				game.documentZoom=game.deviceZoom*zoom;
				if(zoom!=1){
					ui.updatez();
				}
			});
			
			// 9-17人布局
			var style1=document.createElement('style');
			style1.innerHTML+="[data-number='9']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='2']{top:18px;left:auto;right:calc(14% - 18px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='3']{top:9px;left:auto;right:calc(27% - 19px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='4']{top:0px;left:auto;right:calc(40% - 16px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='5']{top:0px;left:calc(40% - 16px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='6']{top:9px;left:calc(27% - 19px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='7']{top:18px;left:calc(14% - 18px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='8']{top:72px;left:calc(2% - 30px);}";
			
			
			style1.innerHTML+="[data-number='10']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='2']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='3']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='4']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='5']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='6']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='7']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='8']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='9']{top:72px;left:calc(2% - 30px);}";
			
			
			style1.innerHTML+="[data-number='11']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='2']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='3']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='4']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='5']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='6']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='7']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='8']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='9']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='10']{top:72px;left:calc(2% - 30px);}";
			
			
			style1.innerHTML+="[data-number='12']>.player[data-position='1']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='2']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='3']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='4']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='5']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='6']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='7']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='8']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='9']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='10']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='11']{top:275px;left:calc(2% - 30px);}";
		
		
			style1.innerHTML+="[data-number='13']>.player[data-position='1']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='2']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='3']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='4']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='5']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='6']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='7']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='8']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='9']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='10']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='11']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='12']{top:275px;left:calc(2% - 30px);}";
		

			style1.innerHTML+="[data-number='14']>.player[data-position='1']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='2']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='3']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='4']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='5']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='6']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='7']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='8']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='9']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='10']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='11']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='12']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='13']{top:275px;left:calc(12% - 28px);}";
		
		
			style1.innerHTML+="[data-number='15']>.player[data-position='1']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='2']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='3']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='4']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='5']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='6']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='7']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='8']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='9']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='10']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='11']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='12']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='13']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='14']{top:275px;left:calc(12% - 28px);}";
		

			style1.innerHTML+="[data-number='16']>.player[data-position='1']{top:275px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='2']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='3']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='4']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='5']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='6']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='7']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='8']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='9']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='10']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='11']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='12']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='13']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='14']{top:275px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='15']{top:275px;left:calc(22% - 26px);}";

		
			style1.innerHTML+="[data-number='17']>.player[data-position='1']{top:275px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='2']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='3']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='4']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='5']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='6']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='7']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='8']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='9']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='10']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='11']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='12']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='13']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='14']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='15']{top:275px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='16']{top:275px;left:calc(22% - 26px);}";
			document.head.appendChild(style1);
     
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
				'17':'十七人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
				'14':'十四人',
				'15':'十五人',
				'16':'十六人',
				'17':'十七人',
			};
	
			if(config.nine9Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nine9Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nine9Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nine9Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			};
			if(config.ten10Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.ten10Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.ten10Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			};
			if(config.eleven11Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.eleven11Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.eleven11Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.eleven11Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			};
			if(config.twelve12Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelve12Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelve12Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			};
			if(config.thirteen13Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteen13Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteen13Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteen13Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			};
			if(config.fourteen14Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteen14Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteen14Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']); 
			};
			if(config.fifteen15Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteen15Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteen15Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteen15Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			};
			if(config.Sixteen16Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Sixteen16Man=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Sixteen16Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Sixteen16Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			};
			if(config.Seventeen17Man=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Seventeen17Man=='2'){
	   		lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Seventeen17Man=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.Seventeen17Man=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
			};

		},precontent:function (){
			
		},
		help:{
			
		},
		config:{
			ntsgxsm: {
				name:'<div class="hth_menu">▶更新说明（点击后展开）</div>',
				clear:true,
				onclick:function(){
					if(this.hth_more==undefined){
						var more=ui.create.div('.hth_more',
						'<div style="border: 0px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
						'本次魔改：棘手怀念摧毁（暂时没有得到原作者允许）<br>参考（搬运）：尛 苩.魔改的多人运动扩展等'+
						'<br>'+
						'<br>1. 使用方法：开启9-17人扩展，点击触屏按钮，选项-开始-身份/国战-游戏人数-八人以上。'+
						'<br><span style=\"color:red\">2. 关闭方法：点击触屏按钮，选项-开始-身份/国战-游戏人数-八人及以下，关闭本扩展。<br>注：不按此操作者，报错后无需重置无名杀！而是直接退出游戏，然后重新进入其他非身份和国战的游戏模式（如挑战模式），再执行正确的关闭操作。</span>'+
						'<br>3. 前版更新说明：此扩展代码从《新英魂之忍》《风华绝代》扩展参考并搬运；搬运者：太上大牛。'+
						'<br>'+
						'<br>棘手怀念摧毁（主要）更新内容'+
						'<br>- 完善使用方法和关闭方法教程说明。'+
						'<br>- 布局调整（配合棘手怀念摧毁的懒人包使用时，手机端建议70%界面缩放，电脑端建议100%界面缩放）。'+
						'<br>- 解决了由于切换界面返回后显示不正常，需重新调缩放比例的问题（后续一步到位懒人包更新无需将9-17人扩展的界面缩放功能搬入本体中，不用担心本体被其他扩展的界面缩放功能影响）。'+
						'<br>- 完善9-17人国战模式其他-控制界面座位号翻译。'+
						'<br>- 新增本【更新说明】折叠选项，可更方便地展开与折叠查看。'+
						'<br>- 其他魔改内容略。'+
						'<br>'
						);
						this.parentNode.insertBefore(more,this.nextSibling);
						this.hth_more=more;
						this.innerHTML='<div class="hth_menu">▼更新说明（点击后折叠）</div>';
					}
					else{
						this.parentNode.removeChild(this.hth_more);
						delete this.hth_more;
						this.innerHTML='<div class="hth_menu">▶更新说明（点击后展开）</div>';
					};
				},
			},
			"nine9Man":{"name":"九人场身份(90%)","init":"1","item":{"1":"三忠四反一内","2":"二忠四反二内","3":"四忠四反零内","4":"三忠五反零内"}},
			"ten10Man":{"name":"十人场身份(85%)","init":"1","item":{"1":"三忠四反二内","2":"三忠五反一内","3":"四忠五反零内"}},
			"eleven11Man":{"name":"十一人场身份(75%)","init":"1","item":{"1":"四忠五反一内","2":"三忠五反二内","3":"五忠五反零内","4":"四忠六反零内"}},
			"twelve12Man":{"name":"十二人场身份(75%)","init":"1","item":{"1":"四忠五反二内","2":"四忠六反一内","3":"五忠六反零内"}},
			"thirteen13Man":{"name":"十三人场身份(75%)","init":"1","item":{"1":"五忠六反一内","2":"四忠六反二内","3":"六忠六反零内","4":"五忠七反零内"}},
			"fourteen14Man":{"name":"十四人场身份(75%)","init":"1","item":{"1":"五忠六反二内","2":"五忠七反一内","3":"六忠七反零内"}},
			"fifteen15Man":{"name":"十五人场身份(75%)","init":"1","item":{"1":"六忠七反一内","2":"五忠七反二内","3":"七忠七反零内","4":"六忠八反零内"}},
			"Sixteen16Man":{"name":"十六人场身份(75%)","init":"1","item":{"1":"六忠七反二内","2":"六忠八反一内","3":"七忠八反零内","4":"五忠七反三内"}},
			"Seventeen17Man":{"name":"十七人场身份(75%)","init":"1","item":{"1":"五忠八反三内","2":"六忠八反二内","3":"四忠八反四内","4":"16反"}}
		},
		package:{
		    character:{
        		character:{
					
				},
       		 	translate:{
				 
        		},
   			},
    		card:{
        		card:{
					
        		},
       			translate:{
					
        		},
        	list:[],
   		 },
			skill:{
				skill:{
					
				},
			translate:{
				
			},
    },
		intro:"前往【设置→开始→身份→游戏人数】修改身份模式的游戏人数，最多17人。超过8人场请设置<span class='yellowtext'>缩小界面比例</span>，防止武将位置重叠，方法【设置→选项→外观→界面缩放】，默认100%，9人场推荐90%，10人场推荐85%，11-17人场推荐75%：",
		author:"尛 苩.魔改的多人运动扩展等<br>魔改：<span class='bluetext'>棘手怀念摧毁</span>",
		diskURL:"",
		forumURL:"",
		version:"",
	},
		files:{
			character:[
				
			],
			card:[
				
			],
			skill:[
				
			]
		}
	}
})