"use strict;"
window.qyImport(function (lib, game, ui, get, ai, _status, config) {

    if (config.qingyao_shoushatexiao&&lib.config['extension_特效测试_enable'] != true) {
        //此代码已经完全独立重写
        lib.skill._qyshousha_jisha = {
            trigger: {
                player: '_qyshousha_jisha',
            },
            charlotte: true,
            forced: true,
            popup: false,
            silent: true,
            priority: 2021,
            content: function () {
                if (player.storage._qyshousha_jisha2 == 1) {
                    //需要还原本局游戏只触发一次“一破”特效，添加此注释
                    //if(!_status.qyshousha_jisha){
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_yipo', 2500, {scale: 0.7}) : current.$fullscreenpop('一破·卧龙出山', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha1');
                    //_status.qyshousha_jisha=true;
                    //}
                }
                if (player.storage._qyshousha_jisha2 == 2) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_shuanglian', 2500, {scale: 0.7}) : current.$fullscreenpop('双连·一战成名', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha2');
                }
                if (player.storage._qyshousha_jisha2 == 3) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_sanlian', 2500, {scale: 0.7}) : current.$fullscreenpop('三连·举世皆惊', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha3');
                }
                if (player.storage._qyshousha_jisha2 == 4) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_silian', 2500, {scale: 0.7}) : current.$fullscreenpop('四连·天下无敌', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha4');
                }
                if (player.storage._qyshousha_jisha2 == 5) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_wulian', 2500, {scale: 0.7}) : current.$fullscreenpop('六连·诛天灭地', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha5');
                }
                if (player.storage._qyshousha_jisha2 == 6) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_liulian', 2500, {scale: 0.7}) : current.$fullscreenpop('六连·诛天灭地', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha6');
                }
                if (player.storage._qyshousha_jisha2 >= 7) {
                    JzwdPlayAnimDelay ? JzwdPlayAnimDelay('qy_qilian', 2500, {scale: 0.7}) : current.$fullscreenpop('七连·诛天灭地', 'fire', 'fire', 'avatar');
                    game.playqysstx('qyjstx_jisha7');
                }
            },
        }
        lib.skill._qyshousha_jisha2 = {
            trigger: {source: "dieBegin"},
            forced: true,
            charlotte: true,
            locked: true,
            popup: false,
            silent: true,
            unique: true,
            priority: Infinity,
            content: function () {
                if (!player.storage._qyshousha_jisha2) player.storage._qyshousha_jisha2 = 0;
                player.storage._qyshousha_jisha2++;
                player.markSkill('_qyshousha_jisha2');
                player.syncStorage('_qyshousha_jisha2');
                player.update();
                event.trigger('_qyshousha_jisha');
            },
            //需要标记的话添加以下注释
            /*marktext:"杀",
            intro:{
                name:'击杀人数',
                content:function (storage){
                    return '你已击杀'+storage+'名角色';
                },
            },*/
        }
        lib.skill._qy_miaoshouhuichun = {
            trigger: {player: 'qymiaoshouhuichun'},
            filter: function (event, player) {
                return true;
            },
            priority: 523,
            popup: false,
            silent: true,
            forced: true,
            content: function () {
                if (JzwdPlayAnimDelay) JzwdPlayAnimDelay("qy_miaoshouhuichun", 2500, {scale: 0.6});
                else {
                    player.$fullscreenpop('妙手回春', 'wood');
                    game.delay(2.5);
                }
                game.playqysstx('qy_miaoshouhuichun');
            },
        }
        lib.skill._qy_yishugaochao = {
            trigger: {player: 'qyyishugaochao'},
            filter: function (event, player) {
                return true;
            },
            priority: 523,
            forced: true,
            popup: false,
            silent: true,
            content: function () {
                if (JzwdPlayAnimDelay) JzwdPlayAnimDelay("qy_yishugaochao", 2500, {scale: 0.6});
                else {
                    player.$fullscreenpop('医术高超', 'wood');
                    game.delay(2.5);
                }
                game.playqysstx('qy_yishugaochao');
            },
        }
        lib.skill._qy_recovertrigger = {
            trigger: {player: ['recoverEnd', '清瑶recoverEnd']},
            filter: function (event, player) {
                return event.source != undefined;
            },
            direct: true,
            popup: false,
            silent: true,
            content: function () {
                if (trigger.source != player) {
                    if (trigger.source.storage.qy_miaoshouhuichun == undefined) {
                        trigger.source.storage.qy_miaoshouhuichun = 0;
                    }
                    if (trigger.source.storage.qy_miaoshouhuichun >= 3) {
                        delete trigger.source.storage.qy_miaoshouhuichun;
                        _status.event.trigger('qymiaoshouhuichun');
                    }
                }
                //else if(_status.currentPhase == player) {
                if (player.storage.qy_yishugaochao == undefined) {
                    player.storage.qy_yishugaochao = trigger.num;
                } else {
                    player.storage.qy_yishugaochao += trigger.num;
                }
                if (player.storage.qy_yishugaochao >= 3) {
                    delete player.storage.qy_yishugaochao;
                    _status.event.trigger('qyyishugaochao');
                }
                //}
            },
        };
        lib.skill._qy_recovertrigger2 = {
            trigger: {player: ['recoverBegin', '清瑶recoverBegin']},
            filter: function (event, player) {
                if (event.num <= -event.player.hp) return false;
                return event.source != undefined && player != event.source && player.isDying();
            },
            direct: true,
            popup: false,
            silent: true,
            lastDo: true,
            content: function () {
                if (trigger.source.storage.qy_miaoshouhuichun == undefined) {
                    trigger.source.storage.qy_miaoshouhuichun = 1;
                } else {
                    trigger.source.storage.qy_miaoshouhuichun += 1;
                }
            },
        };
        lib.skill._qy_deleteother = {
            trigger: {global: 'phaseAfter'},
            direct: true,
            popup: false,
            silent: true,
            content: function () {
                delete player.storage.qy_yishugaochao;
                //添加以下注释击杀特效仅统计一回合内
                //delete player.storage._qyshousha_jisha2;
            },
        };
        lib.skill._qy_onDead = {
            trigger: {
                player: 'dieBegin',
            },
            priority: 523,
            forced: true,
            silent: true,
            popup: false,
            content: function () {
                game.broadcastAll(function () {
                    game.playqysstx('qy_dead');
                });
            },
        };
        lib.skill._qy_onCause3Damage = {
            trigger: {
                source: ['damageBegin4', '清瑶DamageBegin4'],
            },
            forced: true,
            popup: false,
            silent: true,
            priority: -523,
            lastDo: true,
            filter: function (event, player) {
                return event.num == 3;
            },
            content: function () {
                game.broadcastAll(function () {
                    {
                        JzwdPlayAnimDelay ? JzwdPlayAnimDelay("qy_diankuangtulu", 2500, {scale: 0.6}) : player.$fullscreenpop('癫狂屠戮', 'fire', 'fire', 'avatar');
                        game.playqysstx('qy_diankuangtulu');
                    }
                });
            },
        };
        lib.skill._qy_onCause4Damage = {
            trigger: {
                source: ['damageBegin4', '清瑶DamageBegin4'],
            },
            forced: true,
            popup: false,
            silent: true,
            priority: -523,
            lastDo: true,
            filter: function (event, player) {
                return event.num >= 4;
            },
            content: function () {
                game.broadcastAll(function () {
                    {
                        JzwdPlayAnimDelay ? JzwdPlayAnimDelay("qy_wushuangwanjunqushou", 2500, {scale: 0.6}) : player.$fullscreenpop('无双·万军取首', 'fire', 'fire', 'avatar');
                        game.playqysstx('qy_wanjunqushou');
                    }
                });
            },
        };
    }

    if (config.qingyao_shoushapeiyin&&lib.config['extension_特效测试_enable'] != true) {
        if (lib.skill.qilin_skill) lib.skill.qilin_skill.audio = "ext:假装无敌纯:true";
        if (lib.skill.qibaodao2) lib.skill.qibaodao2.audio = "ext:假装无敌纯:true";
        if (lib.skill.lanyinjia) lib.skill.lanyinjia.audio = "ext:假装无敌纯:true";
        if (lib.skill.cixiong_skill) lib.skill.cixiong_skill.audio = "ext:假装无敌纯:true";
        lib.skill._qy_chongzhu = {
            trigger: {
                player: "_chongzhuBegin",
            },
            direct: true,
            popup: false,
            silent: true,
            priority: 0,
            content: function () {
                game.playqysstx('qy_chongzhu_' + (player.sex == 'female' ? 'female' : 'male'));
            },
        };
        var CAFst = lib.element.content.link.toString();
        var ins = function (str) {
            return str.replace(/game.playAudio\('effect','link'\);/g,
                `if(!player.isLinked()){
                            game['playAudio']('effect','link');
                        }else {
                            game.playqysstx('qy_tiesuo');
                        }`
            );
        };
        eval("lib.element.content.link=function(){" + CAFst.newFedit(ins) + "}");
        var CAFst = lib.element.content.damage.toString();
        var ins = function (str) {
            return str.replace(/game.playAudio\('effect','damage'\+\(num\>1\?'2'\:''\)\);/g,
                `if(event.card&&event.card.name=='shandian'){
                            game.playqysstx('qy_shandian');
                        }else if(['fire','thunder','ice','kami'].contains(event.nature)){
                            game.playqysstx('qy_damage_'+event.nature+(num>1?'2':''));
                        }else {
                            game.playqysstx('qy_damage'+(num>1?'2':''));
                        }`
            );
        };
        eval("lib.element.content.damage=function(){" + CAFst.newFedit(ins) + "}");
        var CAFst = lib.element.content.loseHp.toString();
        var ins = function (str) {
            return str.replace(/game.playAudio\('effect','loseHp'\);/g,
                `game.playqysstx('qy_loseHp');`
            );
        };
        eval("lib.element.content.loseHp=function(){" + CAFst.newFedit(ins) + "}");
    }

    if (config.qingyao_shoupaikeshi) {
        lib.skill._qingyao_shoupaikeshi = {
            locked: true,
            ai: {
                viewHandcard: true,
                skillTagFilter: function (player, tag, arg) {
                    if (game.me == arg) return false;
                    if (!game.me.getFriends().contains(arg)) return false;
                },
            },
        };
    }

    if (config.qingyao_guanfangshili) {
        //lib.group=['shen','wei','shu','wu','qun','jin','qingyao_xian'];
        Object.defineProperty(lib, 'group', {
            get: function () {
                return ['shen', 'wei', 'shu', 'wu', 'qun', 'jin'];
            },
            set: function () {
            },
        });
        lib.skill._qingyao_guanfangshili = {
            trigger: {
                global: 'gameStart',
                player: 'enterGame',
            },
            forced: true,
            popup: false,
            silent: true,
            priority: 523,
            filter: function (event, player) {
                var mode = get.mode();
                if (mode != 'guozhan') {
                    if (player.group == 'qingyao_xian') return false;
                    return !lib.group.contains(player.group);
                }
                if (mode == 'guozhan') {
                    if (lib.character[player.name1][1] == 'qingyao_xian') return false;
                    if (lib.character[player.name2][1] == 'qingyao_xian') return false;
                    if (lib.character[player.name1][1] == 'ye') return false;
                    if (lib.character[player.name2][1] == 'ye') return false;
                    return !lib.group.contains(lib.character[player.name1][1]) || !lib.group.contains(lib.character[player.name2][1]);
                }
            },
            content: function () {
                'step 0'
                //game.showIdentity(true);
                var list = lib.group.slice(1, 6);
                player.chooseControl(list).set('prompt', '请选择替换的势力').set('ai', function () {
                    return list.randomGet();
                });
                'step 1'
                var mode = get.mode();
                if (mode != 'guozhan') player.group = result.control;
                else {
                    lib.character[player.name1][1] = result.control;
                    lib.character[player.name2][1] = result.control;
                }
            },
        };
    }

    if (config.qingyao_AIxuanjiang) {
        lib.group.add('qingyao_xian');
        lib.translate.qingyao_xian = '仙';
        lib.translate.qingyao_xian2 = '仙';
        lib.groupnature.qingyao_xian = 'qingyao_xian';
        ui.create.groupControl = function (dialog) {
            return ui.create.control('wei', 'shu', 'wu', 'qun', 'jin', 'western', 'key', 'qingyao_xian', function (link, node) {
                if (link == '全部') {
                    dialog.currentcapt = '';
                    dialog.currentgroup = '';
                    for (var i = 0; i < dialog.buttons.length; i++) {
                        dialog.buttons[i].style.display = '';
                    }
                } else {
                    if (node.classList.contains('thundertext')) {
                        dialog.currentgroup = null;
                        dialog.currentgroupnode = null;
                        node.classList.remove('thundertext');
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                dialog.buttons[i].classList.add('nodisplay');
                            } else {
                                dialog.buttons[i].classList.remove('nodisplay');
                            }
                        }
                    } else {
                        if (dialog.currentgroupnode) {
                            dialog.currentgroupnode.classList.remove('thundertext');
                        }
                        dialog.currentgroup = link;
                        dialog.currentgroupnode = node;
                        node.classList.add('thundertext');
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (dialog.buttons[i].group != link ||
                                (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt))) {
                                dialog.buttons[i].classList.add('nodisplay');
                            } else {
                                dialog.buttons[i].classList.remove('nodisplay');
                            }
                        }
                    }
                }
            });
        };
        var createDialog = {
            characterDialog: function () {
                var filter = function (name) {
                    var info = lib.character[name];
                    //return info && info[1] === 'key';
                }, str, noclick, thisiscard, seperate, expandall, onlypack, heightset, precharacter, characterx;
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] === 'thisiscard') {
                        thisiscard = true;
                    } else if (arguments[i] === 'expandall') {
                        expandall = true;
                    } else if (arguments[i] === 'heightset') {
                        heightset = true;
                    } else if (arguments[i] == 'precharacter') {
                        precharacter = true;
                    } else if (arguments[i] == 'characterx') {
                        characterx = true;
                    } else if (typeof arguments[i] == 'string' && arguments[i].indexOf('onlypack:') == 0) {
                        onlypack = arguments[i].slice(9);
                    } else if (typeof arguments[i] == 'object' && typeof arguments[i].seperate == 'function') {
                        seperate = arguments[i].seperate;
                    } else if (typeof arguments[i] === 'string') {
                        str = arguments[i];
                    } else if (typeof arguments[i] === 'function') {
                        filter = arguments[i];
                    } else if (typeof arguments[i] == 'boolean') {
                        noclick = arguments[i];
                    }
                }
                var list = [];
                var dialog;
                var node = ui.create.div('.caption.pointerspan');
                if (get.is.phoneLayout()) {
                    node.style.fontSize = '30px';
                }
                var namecapt = [];
                var getCapt = function (str) {
                    var capt;
                    if (str.indexOf('_') == -1) {
                        capt = str[0];
                    } else {
                        capt = str[str.lastIndexOf('_') + 1];
                    }
                    capt = capt.toLowerCase();
                    if (!/[a-z]/i.test(capt)) {
                        capt = '自定义';
                    }
                    return capt;
                }
                if (thisiscard) {
                    for (var i in lib.card) {
                        if (!lib.translate[i + '_info']) continue;
                        if (filter && filter(i)) continue;
                        list.push(['', get.translation(lib.card[i].type), i]);
                        if (namecapt.indexOf(getCapt(i)) == -1) {
                            namecapt.push(getCapt(i));
                        }
                    }
                } else {
                    for (var i in lib.character) {
                        if (lib.character[i][4].contains('minskin')) continue;
                        if (lib.character[i][4].contains('boss') || lib.character[i][4].contains('hiddenboss')) {
                            if (lib.config.mode == 'boss') continue;
                            if (!lib.character[i][4].contains('bossallowed')) continue;
                        }

                        if (lib.character[i][4].contains('stonehidden')) continue;
                        if (lib.character[i][4].contains('unseen')) continue;
                        //if (lib.character[i][1] === 'key' || i.indexOf('key') === 0) continue;
                        if (lib.config.banned.contains(i)) continue;
                        if (lib.characterFilter[i] && !lib.characterFilter[i](get.mode())) continue;
                        if (filter && filter(i)) continue;
                        list.push(i);
                        if (namecapt.indexOf(getCapt(i)) == -1) {
                            namecapt.push(getCapt(i));
                        }
                    }
                }
                namecapt.sort(function (a, b) {
                    return a > b ? 1 : -1;
                });
                if (!thisiscard) {
                    namecapt.remove('自定义');
                    namecapt.push('newline');
                    for (var i in lib.characterDialogGroup) {
                        namecapt.push(i);
                    }
                }
                var newlined = false;
                var newlined2;
                var packsource;
                var clickCapt = function (e) {
                    if (_status.dragged) return;
                    if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
                        dialog.currentcapt2 = null;
                        dialog.currentcaptnode2.classList.remove('thundertext');
                        dialog.currentcaptnode2.inited = true;
                        dialog.currentcaptnode2 = null;
                    }
                    if (this.alphabet) {
                        if (this.classList.contains('thundertext')) {
                            dialog.currentcapt = null;
                            dialog.currentcaptnode = null;
                            this.classList.remove('thundertext');
                            if (this.touchlink) {
                                this.touchlink.classList.remove('active');
                            }
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    dialog.buttons[i].classList.remove('nodisplay');
                                }
                            }
                        } else {
                            if (dialog.currentcaptnode) {
                                dialog.currentcaptnode.classList.remove('thundertext');
                                if (dialog.currentcaptnode.touchlink) {
                                    dialog.currentcaptnode.touchlink.classList.remove('active');
                                }
                            }
                            dialog.currentcapt = this.link;
                            dialog.currentcaptnode = this;
                            this.classList.add('thundertext');
                            if (this.touchlink) {
                                this.touchlink.classList.add('active');
                            }
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    dialog.buttons[i].classList.remove('nodisplay');
                                }
                            }
                        }
                    } else {
                        if (newlined2) {
                            newlined2.style.display = 'none';
                            if (!packsource.onlypack) {
                                packsource.classList.remove('thundertext');
                                if (!get.is.phoneLayout() || !lib.config.filternode_button) {
                                    packsource.innerHTML = '武将包';
                                }
                            }
                        }
                        if (this.classList.contains('thundertext')) {
                            dialog.currentcapt2 = null;
                            dialog.currentcaptnode2 = null;
                            this.classList.remove('thundertext');
                            if (this.touchlink) {
                                this.touchlink.classList.remove('active');
                            }
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    dialog.buttons[i].classList.remove('nodisplay');
                                }
                            }
                        } else {
                            if (dialog.currentcaptnode2) {
                                dialog.currentcaptnode2.classList.remove('thundertext');
                                if (dialog.currentcaptnode2.touchlink) {
                                    dialog.currentcaptnode2.touchlink.classList.remove('active');
                                }
                            }
                            dialog.currentcapt2 = this.link;
                            dialog.currentcaptnode2 = this;
                            this.classList.add('thundertext');
                            if (this.touchlink) {
                                this.touchlink.classList.add('active');
                            } else if (this.parentNode == newlined2) {
                                packsource.innerHTML = this.innerHTML;
                                packsource.classList.add('thundertext');
                            }
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    if (dialog.buttons[i].activate) {
                                        dialog.buttons[i].activate();
                                    }
                                    dialog.buttons[i].classList.remove('nodisplay');
                                }
                            }
                        }
                    }
                    if (dialog.seperate) {
                        for (var i = 0; i < dialog.seperate.length; i++) {
                            if (!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')) {
                                dialog.seperate[i].style.display = 'none';
                                dialog.seperate[i].nextSibling.style.display = 'none';
                            } else {
                                dialog.seperate[i].style.display = '';
                                dialog.seperate[i].nextSibling.style.display = '';
                            }
                        }
                    }
                    if (filternode) {
                        if (filternode.querySelector('.active')) {
                            packsource.classList.add('thundertext');
                        } else {
                            packsource.classList.remove('thundertext');
                        }
                    }
                    if (e) e.stopPropagation();
                };
                for (i = 0; i < namecapt.length; i++) {
                    if (namecapt[i] == 'newline') {
                        newlined = document.createElement('div');
                        newlined.style.marginTop = '5px';
                        newlined.style.display = 'block';
                        // newlined.style.fontFamily='xinwei';
                        if (get.is.phoneLayout()) {
                            newlined.style.fontSize = '32px';
                        } else {
                            newlined.style.fontSize = '22px';
                        }
                        newlined.style.textAlign = 'center';
                        node.appendChild(newlined);
                    } else if (newlined) {
                        var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
                        span.style.margin = '3px';
                        span.style.width = 'auto';
                        span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
                        span.link = namecapt[i];
                        span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                        newlined.appendChild(span);
                        node[namecapt[i]] = span;
                        if (namecapt[i] == '收藏') {
                            span._nature = 'fire';
                        } else {
                            span._nature = 'wood';
                        }
                    } else {
                        var span = document.createElement('span');
                        span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
                        span.link = namecapt[i];
                        span.alphabet = true;
                        span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                        node.appendChild(span);
                    }
                }
                if (!thisiscard) {
                    var groups = ['wei', 'shu', 'wu', 'qun', 'jin', 'key', 'qingyao_xian'];
                    var bool1 = false;
                    var bool2 = false;
                    var bool3 = (get.mode() == 'guozhan' && _status.forceKey != true && get.config('onlyguozhan'));
                    var bool4 = (get.mode() != 'guozhan');
                    for (var i in lib.character) {
                        if (lib.character[i][1] == 'shen') {
                            bool1 = true;
                        }
                        if (bool3 || lib.character[i][1] == 'qingyao_xian') {
                            bool2 = true;
                        }
                        if (!bool4 && get.is.double(i)) bool4 = true;
                        if (bool1 && bool2 && bool4) break;
                    }
                    if (bool1) groups.add('shen');
                    if (bool2 && !bool3) groups.add('qingyao_xian');
                    if (bool4 && get.mode() == 'guozhan') groups.add('double');
                    var natures = ['water', 'soil', 'wood', 'metal'];
                    var span = document.createElement('span');
                    newlined.appendChild(span);
                    span.style.margin = '8px';
                    var clickGroup = function () {
                        if (_status.dragged) return;
                        if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
                            dialog.currentcapt2 = null;
                            dialog.currentcaptnode2.classList.remove('thundertext');
                            dialog.currentcaptnode2.inited = true;
                            dialog.currentcaptnode2 = null;
                        }
                        var node = this, link = this.link;
                        if (node.classList.contains('thundertext')) {
                            dialog.currentgroup = null;
                            dialog.currentgroupnode = null;
                            node.classList.remove('thundertext');
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    dialog.buttons[i].classList.remove('nodisplay');
                                }
                            }
                        } else {
                            if (dialog.currentgroupnode) {
                                dialog.currentgroupnode.classList.remove('thundertext');
                            }
                            dialog.currentgroup = link;
                            dialog.currentgroupnode = node;
                            node.classList.add('thundertext');
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                    dialog.buttons[i].classList.add('nodisplay');
                                } else if (dialog.currentgroup == 'double') {
                                    if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye') dialog.buttons[i].classList.remove('nodisplay');
                                    else dialog.buttons[i].classList.add('nodisplay');
                                } else {
                                    if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye' || dialog.buttons[i].group != dialog.currentgroup) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            }
                        }
                    };
                    for (var i = 0; i < groups.length; i++) {
                        var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
                        span.style.margin = '3px';
                        newlined.appendChild(span);
                        span.innerHTML = get.translation(groups[i]);
                        span.link = groups[i];
                        span._nature = natures[i];
                        span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickGroup);
                    }
                    var span = document.createElement('span');
                    newlined.appendChild(span);
                    span.style.margin = '8px';
                    packsource = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
                    packsource.style.margin = '3px';
                    newlined.appendChild(packsource);
                    var filternode = null;
                    var clickCaptNode = function (e) {
                        delete _status.filterCharacter;
                        ui.window.classList.remove('shortcutpaused');
                        filternode.delete();
                        filternode.classList.remove('shown');
                        clickCapt.call(this.link, e);
                    };
                    if (get.is.phoneLayout() && lib.config.filternode_button) {
                        newlined.style.marginTop = '';
                        packsource.innerHTML = '筛选';
                        filternode = ui.create.div('.popup-container.filter-character.modenopause');
                        ui.create.div(filternode);
                        filternode.listen(function (e) {
                            if (this.classList.contains('removing')) return;
                            delete _status.filterCharacter;
                            ui.window.classList.remove('shortcutpaused');
                            this.delete();
                            this.classList.remove('shown');
                            e.stopPropagation();
                        });
                        for (var i = 0; i < node.childElementCount; i++) {
                            if (node.childNodes[i].tagName.toLowerCase() == 'span') {
                                node.childNodes[i].style.display = 'none';
                                node.childNodes[i].touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large.capt', node.childNodes[i].innerHTML);
                                node.childNodes[i].touchlink.link = node.childNodes[i];
                            }
                        }
                        ui.create.node('br', filternode.firstChild);
                    } else {
                        if (onlypack) {
                            packsource.onlypack = true;
                            packsource.innerHTML = get.translation(onlypack + '_character_config');
                            packsource.style.display = 'none';
                            packsource.previousSibling.style.display = 'none';
                        } else {
                            packsource.innerHTML = '武将包';
                        }
                    }

                    newlined2 = document.createElement('div');
                    newlined2.style.marginTop = '5px';
                    newlined2.style.display = 'none';
                    newlined2.style.fontFamily = 'xinwei';
                    newlined2.classList.add('pointernode');
                    if (get.is.phoneLayout()) {
                        newlined2.style.fontSize = '32px';
                    } else {
                        newlined2.style.fontSize = '22px';
                    }
                    newlined2.style.textAlign = 'center';
                    node.appendChild(newlined2);

                    packsource.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                        if (packsource.onlypack) return;
                        if (_status.dragged) return;
                        if (get.is.phoneLayout() && lib.config.filternode_button && filternode) {
                            _status.filterCharacter = true;
                            ui.window.classList.add('shortcutpaused');
                            ui.window.appendChild(filternode);
                            ui.refresh(filternode);
                            filternode.classList.add('shown');
                            var dh = filternode.offsetHeight - filternode.firstChild.offsetHeight;
                            if (dh > 0) {
                                filternode.firstChild.style.top = (dh / 2) + 'px';
                            } else {
                                filternode.firstChild.style.top = '';
                            }
                        } else {
                            if (newlined2.style.display == 'none') {
                                newlined2.style.display = 'block';
                            } else {
                                newlined2.style.display = 'none';
                            }
                        }
                    });
                    var packlist = [];
                    for (var i = 0; i < lib.config.all.characters.length; i++) {
                        if (!lib.config.characters.contains(lib.config.all.characters[i])) continue;
                        packlist.push(lib.config.all.characters[i]);
                    }
                    for (var i in lib.characterPack) {
                        if (!lib.config.all.characters.contains(i)) {
                            packlist.push(i);
                        }
                    }
                    for (var i = 0; i < packlist.length; i++) {
                        var span = document.createElement('div');
                        span.style.display = 'inline-block';
                        span.style.width = 'auto';
                        span.style.margin = '5px';
                        if (get.is.phoneLayout()) {
                            span.style.fontSize = '32px';
                        } else {
                            span.style.fontSize = '22px';
                        }
                        span.innerHTML = lib.translate[packlist[i] + '_character_config'];
                        span.link = packlist[i];
                        span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                        newlined2.appendChild(span);
                        if (filternode && !onlypack) {
                            span.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large', span.innerHTML);
                            span.touchlink.link = span;
                        }
                    }
                }
                var groupSort;
                if (thisiscard) {
                    groupSort = function (name) {
                        var type = lib.card[name[2]].type;
                        if (lib.cardType[type]) {
                            return lib.cardType[type];
                        }
                        switch (type) {
                            case 'basic':
                                return 0;
                            case 'chess':
                                return 1.5;
                            case 'trick':
                                return 2;
                            case 'delay':
                                return 3;
                            case 'equip':
                                return 4;
                            case 'zhenfa':
                                return 5;
                            default:
                                return 6;
                        }
                    };
                } else {
                    var getGroup = function (name) {
                        var group = get.is.double(name, true);
                        if (group) return group[0];
                        return lib.character[name][1];
                    }
                    groupSort = function (name) {
                        if (!lib.character[name]) return 7;
                        var group = getGroup(name);
                        if (group == 'shen') return -1;
                        if (group == 'wei') return 0;
                        if (group == 'shu') return 1;
                        if (group == 'wu') return 2;
                        if (group == 'qun') return 3;
                        if (group == 'jin') return 4;
                        if (group == 'key') return -Infinity;
                        if (group === 'qingyao_xian') return 9;
                        if (group == 'western') return 6;
                        return 7;
                    }
                }
                list.sort(function (a, b) {
                    var del = groupSort(a) - groupSort(b);
                    if (del != 0) return del;
                    var aa = a, bb = b;
                    if (a.indexOf('_') != -1) {
                        a = a.slice(a.lastIndexOf('_') + 1);
                    }
                    if (b.indexOf('_') != -1) {
                        b = b.slice(b.lastIndexOf('_') + 1);
                    }
                    if (a != b) {
                        return a > b ? 1 : -1;
                    }
                    return aa > bb ? 1 : -1;
                });
                dialog = ui.create.dialog('hidden');
                dialog.classList.add('noupdate');
                dialog.classList.add('scroll1');
                dialog.classList.add('scroll2');
                dialog.classList.add('scroll3');
                dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                    _status.clicked2 = true;
                });
                if (heightset) {
                    dialog.style.height = ((game.layout == 'long2' || game.layout == 'nova') ? 380 : 350) + 'px';
                    dialog._scrollset = true;
                }
                dialog.getCurrentCapt = function (link, capt, noalph) {
                    var currentcapt = noalph ? this.currentcapt2 : this.currentcapt;
                    if (this.seperatelist && noalph) {
                        if (this.seperatelist[currentcapt].contains(link)) return capt;
                        return null;
                    }
                    if (lib.characterDialogGroup[currentcapt]) {
                        return lib.characterDialogGroup[currentcapt](link, capt);
                    }
                    if (lib.characterPack[currentcapt]) {
                        if (lib.characterPack[currentcapt][link]) {
                            return capt;
                        }
                        return null;
                    }
                    return this.currentcapt;
                }
                if (str) {
                    dialog.add(str);
                }
                dialog.add(node);
                if (thisiscard) {
                    if (seperate) {
                        seperate = seperate(list);
                        dialog.seperate = [];
                        dialog.seperatelist = seperate.list;
                        if (dialog.seperatelist) {
                            newlined = document.createElement('div');
                            newlined.style.marginTop = '5px';
                            newlined.style.display = 'block';
                            newlined.style.fontFamily = 'xinwei';
                            if (get.is.phoneLayout()) {
                                newlined.style.fontSize = '32px';
                            } else {
                                newlined.style.fontSize = '22px';
                            }
                            newlined.style.textAlign = 'center';
                            node.appendChild(newlined);
                            for (var i in dialog.seperatelist) {
                                var span = document.createElement('span');
                                span.style.margin = '3px';
                                span.innerHTML = i;
                                span.link = i;
                                span.seperate = true;
                                span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                                newlined.appendChild(span);
                            }
                        }
                        for (var i in seperate) {
                            if (i == 'list') continue;
                            var link = '';
                            var linkcontent = seperate[i];
                            if (i.indexOf('_link:') != -1) {
                                link = i.slice(i.indexOf('_link:') + 6);
                                i = i.slice(0, i.indexOf('_link:'));
                            }
                            var nodesep = dialog.add(i);
                            nodesep.link = link;
                            dialog.seperate.push(nodesep);
                            dialog.add([linkcontent, 'vcard'], noclick);
                        }
                    } else {
                        dialog.add([list, 'vcard'], noclick);
                    }
                } else {
                    if (precharacter) {
                        dialog.add([list, 'precharacter'], noclick);
                    } else if (characterx) {
                        dialog.add([list, 'characterx'], noclick);
                    } else {
                        dialog.add([list, 'character'], noclick);
                    }
                }
                dialog.add(ui.create.div('.placeholder'));
                for (i = 0; i < dialog.buttons.length; i++) {
                    if (thisiscard) {
                        dialog.buttons[i].capt = getCapt(dialog.buttons[i].link[2]);
                    } else {
                        dialog.buttons[i].group = lib.character[dialog.buttons[i].link][1];
                        dialog.buttons[i].capt = getCapt(dialog.buttons[i].link);
                    }
                }
                if (!expandall) {
                    if (!thisiscard && (lib.characterDialogGroup[lib.config.character_dialog_tool] ||
                        lib.config.character_dialog_tool == '自创')) {
                        clickCapt.call(node[lib.config.character_dialog_tool]);
                    }
                }
                return dialog;
            },
        };
        Object.assign(ui.create, createDialog);
        //换将dialog框
        lib.choosePlayer = {
            // 根据模式走不同的方法
            chooseCharacter: function (target) {
                var mode = lib.config.mode;
                if (mode === 'identity' || mode === 'doudizhu') return lib.choosePlayer.chooseCharacterShenFen.call(target);
                else if (mode === 'guozhan') return lib.choosePlayer.chooseCharacterGuoZhan.call(target);
            },
            // 身份模式
            chooseCharacterShenFen: function () {
                /*if (_status.mode == 'purple') {
                    game.chooseCharacterPurple();
                    return;
                }*/
                // 斗地主判断
                /*if (_status.mode == 'online') {
                    game.chooseCharacterZhidou();
                    return;
                }
                if (_status.mode == 'kaihei') {
                    game.chooseCharacterKaihei();
                    return;
                }
                if (_status.mode == 'huanle') {
                    game.chooseCharacterHuanle();
                    return;
                }
                if (_status.mode == 'binglin') {
                    game.chooseCharacterBinglin();
                    return;
                }*/
                var next = game.createEvent('chooseCharacter', false);
                next.target = this;
                next.player = game.me;
                next.filter = function (name) {
                    //if (lib.character[name][1] === 'key' || name.indexOf("key") === 0) return false;
                    return true;
                };
                next.showConfig = true;
                next.addPlayer = function (player) {
                    var list = lib.config.mode_config.identity.identity[game.players.length - 3].slice(0);
                    var list2 = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                    for (var i = 0; i < list.length; i++) list2.remove(list[i]);
                    player.identity = list2[0];
                    player.setIdentity('cai');
                };
                next.removePlayer = function () {
                    return game.players.randomGet(target, game.zhu);
                };
                next.setContent(function () {
                    "step 0"
                    ui.arena.classList.add('choose-character');
                    var i;
                    var list;
                    var list2 = [];
                    var list3 = [];
                    var list4 = [];
                    var identityList;
                    var chosen = lib.config.continue_name || [];
                    game.saveConfig('continue_name');
                    event.chosen = chosen;
                    if (_status.mode === 'zhong') {
                        event.zhongmode = true;
                        identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
                    } else {
                        identityList = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                        if (get.config('double_nei')) {
                            switch (get.playerNumber()) {
                                case 8:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 7:
                                    identityList.remove('zhong');
                                    identityList.push('nei');
                                    break;
                                case 6:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 5:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 4:
                                    identityList.remove('zhong');
                                    identityList.push('nei');
                                    break;
                                case 3:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                            }
                        }
                    }
                    var addSetting = function (dialog) {
                        dialog.add('选择身份').classList.add('add-setting');
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        var listi;
                        if (event.zhongmode) {
                            listi = ['random', 'zhu', 'mingzhong', 'zhong', 'nei', 'fan'];
                        } else {
                            listi = ['random', 'zhu', 'zhong', 'nei', 'fan'];
                        }
                        for (var i = 0; i < listi.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = listi[i];
                            if (td.link === target.identity) {
                                td.classList.add('bluebg');
                            }
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                if (game.zhu.name) {
                                    if (link != 'random') {
                                        _status.event.parent.fixedseat = get.distance(target, game.zhu, 'absolute');
                                    }
                                    game.zhu.uninit();
                                    delete game.zhu.isZhu;
                                    delete game.zhu.identityShown;
                                }
                                var current = this.parentNode.querySelector('.bluebg');
                                if (current) {
                                    current.classList.remove('bluebg');
                                }
                                current = seats.querySelector('.bluebg');
                                if (current) {
                                    current.classList.remove('bluebg');
                                }
                                if (link == 'random') {
                                    if (event.zhongmode) {
                                        link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
                                    } else {
                                        link = ['zhu', 'zhong', 'nei', 'fan'].randomGet();
                                    }
                                    for (var i = 0; i < this.parentNode.childElementCount; i++) {
                                        if (this.parentNode.childNodes[i].link == link) {
                                            this.parentNode.childNodes[i].classList.add('bluebg');
                                        }
                                    }
                                } else {
                                    this.classList.add('bluebg');
                                }
                                num = get.config('choice_' + link);
                                if (event.zhongmode) {
                                    num = 6;
                                    if (link == 'zhu' || link == 'nei' || link == 'mingzhong') {
                                        num = 8;
                                    }
                                }
                                _status.event.parent.swapnodialog = function (dialog, list) {
                                    var buttons = ui.create.div('.buttons');
                                    var node = dialog.buttons[0].parentNode;
                                    dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                                    dialog.content.insertBefore(buttons, node);
                                    buttons.animate('start');
                                    node.remove();
                                    game.uncheck();
                                    game.check();
                                    for (var i = 0; i < seats.childElementCount; i++) {
                                        if (get.distance(game.zhu, target, 'absolute') === seats.childNodes[i].link) {
                                            seats.childNodes[i].classList.add('bluebg');
                                        }
                                    }
                                }
                                _status.event = _status.event.parent;
                                _status.event.step = 0;
                                _status.event.identity = link;
                                if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
                                    seats.previousSibling.style.display = '';
                                    seats.style.display = '';
                                } else {
                                    seats.previousSibling.style.display = 'none';
                                    seats.style.display = 'none';
                                }
                                game.resume();
                            });
                        }
                        dialog.content.appendChild(table);
                        dialog.add('选择座位').classList.add('add-setting');
                        var seats = document.createElement('div');
                        seats.classList.add('add-setting');
                        seats.style.margin = '0';
                        seats.style.width = '100%';
                        seats.style.position = 'relative';
                        for (var i = 2; i <= game.players.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.innerHTML = get.cnNumber(i, true);
                            td.link = i - 1;
                            seats.appendChild(td);
                            if (get.distance(game.zhu, target, 'absolute') === i - 1) {
                                td.classList.add('bluebg');
                            }
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                if (get.distance(game.zhu, target, 'absolute') == this.link) return;
                                var current = this.parentNode.querySelector('.bluebg');
                                if (current) {
                                    current.classList.remove('bluebg');
                                }
                                this.classList.add('bluebg');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (get.distance(game.players[i], target, 'absolute') == this.link) {
                                        game.swapSeat(game.zhu, game.players[i], false);
                                        return;
                                    }
                                }
                            });
                        }
                        dialog.content.appendChild(seats);
                        if (target == game.zhu) {
                            seats.previousSibling.style.display = 'none';
                            seats.style.display = 'none';
                        }

                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                    };
                    var removeSetting = function () {
                        var dialog = _status.event.dialog;
                        if (dialog) {
                            dialog.style.height = '';
                            delete dialog._scrollset;
                            var list = Array.from(dialog.querySelectorAll('.add-setting'));
                            while (list.length) {
                                list.shift().remove();
                            }
                            ui.update();
                        }
                    };
                    event.list = [];
                    identityList.randomSort();
                    if (event.identity) {
                        identityList.remove(event.identity);
                        identityList.unshift(event.identity);
                        if (event.fixedseat) {
                            var zhuIdentity = (_status.mode == 'zhong') ? 'mingzhong' : 'zhu';
                            if (zhuIdentity != event.identity) {
                                identityList.remove(zhuIdentity);
                                identityList.splice(event.fixedseat, 0, zhuIdentity);
                            }
                            delete event.fixedseat;
                        }
                        delete event.identity;
                    } else if (_status.mode != 'zhong' && (!_status.brawl || !_status.brawl.identityShown)) {
                        var ban_identity = [];
                        ban_identity.push(get.config('ban_identity') || 'off');
                        if (ban_identity[0] != 'off') {
                            ban_identity.push(get.config('ban_identity2') || 'off');
                            if (ban_identity[1] != 'off') {
                                ban_identity.push(get.config('ban_identity3') || 'off');
                            }
                        }
                        ban_identity.remove('off');
                        if (ban_identity.length) {
                            var identityList2 = identityList.slice(0);
                            for (var i = 0; i < ban_identity.length; i++) {
                                while (identityList2.remove(ban_identity[i])) ;
                            }
                            ban_identity = identityList2.randomGet();
                            identityList.remove(ban_identity);
                            identityList.splice(game.players.indexOf(target), 0, ban_identity);
                        }
                    }
                    if (get.config('special_identity') && !event.zhongmode && game.players.length == 8) {
                        for (var i = 0; i < game.players.length; i++) {
                            delete game.players[i].special_identity;
                        }
                        event.special_identity = [];
                        var zhongs = game.filterPlayer(function (current) {
                            return current.identity == 'zhong';
                        });
                        var fans = game.filterPlayer(function (current) {
                            return current.identity == 'fan';
                        });
                        if (fans.length >= 1) {
                            fans.randomRemove().special_identity = 'identity_zeishou';
                            event.special_identity.push('identity_zeishou');
                        }
                        if (zhongs.length > 1) {
                            zhongs.randomRemove().special_identity = 'identity_dajiang';
                            zhongs.randomRemove().special_identity = 'identity_junshi';
                            event.special_identity.push('identity_dajiang');
                            event.special_identity.push('identity_junshi');
                        } else if (zhongs.length == 1) {
                            if (Math.random() < 0.5) {
                                zhongs.randomRemove().special_identity = 'identity_dajiang';
                                event.special_identity.push('identity_dajiang');
                            } else {
                                zhongs.randomRemove().special_identity = 'identity_junshi';
                                event.special_identity.push('identity_junshi');
                            }
                        }
                    }
                    if (!game.zhu) game.zhu = target;
                    else {
                        game.zhu.setIdentity();
                        game.zhu.identityShown = true;
                        game.zhu.isZhu = (game.zhu.identity == 'zhu');
                        game.zhu.node.identity.classList.remove('guessing');
                        /*target.setIdentity();
                        target.node.identity.classList.remove('guessing');*/
                    }
                    //选将框分配
                    for (i in lib.characterReplace) {
                        var ix = lib.characterReplace[i];
                        for (var j = 0; j < ix.length; j++) {
                            if (chosen.contains(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
                        }
                        if (ix.length) {
                            event.list.push(i);
                            list4.addArray(ix);
                            var bool = false;
                            for (var j of ix) {
                                if (lib.character[j][4] && lib.character[j][4].contains('zhu')) {
                                    bool = true;
                                    break;
                                }
                            }
                            (bool ? list2 : list3).push(i);
                        }
                    }
                    for (i in lib.character) {
                        if (list4.contains(i)) continue;
                        if (chosen.contains(i)) continue;
                        if (lib.filter.characterDisabled(i)) continue;

                        if (typeof event.filter === 'function' && event.filter(i) === false) continue;

                        event.list.push(i);
                        list4.push(i);
                        if (lib.character[i][4] && lib.character[i][4].contains('zhu')) {
                            list2.push(i);
                        } else {
                            list3.push(i);
                        }
                    }
                    list2.sort(lib.sort.character);
                    event.list.randomSort();
                    _status.characterlist = list4.slice(0).randomSort();
                    list3.randomSort();
                    if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                        _status.brawl.chooseCharacterFilter(event.list, list2, list3);
                    }
                    var num = get.config('choice_' + target.identity);
                    if (event.zhongmode) {
                        num = 6;
                        if (target.identity == 'zhu' || target.identity == 'nei' || target.identity == 'mingzhong') {
                            num = 8;
                        }
                    }
                    if (target === game.zhu && lib.config.mode !== "doudizhu") {
                        list = list2.concat(list3.slice(0, num));
                    } else {
                        list = list3.slice(0, 8);
                    }
                    // }
                    delete event.swapnochoose;
                    var dialog;
                    if (event.swapnodialog) {
                        dialog = ui.dialog;
                        event.swapnodialog(dialog, list);
                        delete event.swapnodialog;
                    } else {
                        var str = '选择角色';
                        if (_status.brawl && _status.brawl.chooseCharacterStr) {
                            str = _status.brawl.chooseCharacterStr;
                        }
                        dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
                        /*if(!_status.brawl||!_status.brawl.noAddSetting){
                            if(get.config('change_identity')){
                                addSetting(dialog);
                            }
                        }*/
                    }

                    var createSearchInput = function (dialog) {
                        var div = ui.create.div(dialog.content, 1, {
                            display: 'block',
                        });
                        var input = ui.create.node('input', div);
                        var select = ui.create.node('select', div);
                        var options = [{
                            text: '武将id',
                            value: 'id',
                            defaultSelected: false,
                        }, {
                            text: '武将名称',
                            value: 'name',
                            defaultSelected: true,
                        }];
                        options.forEach(value => {
                            var option = new Option(value.text, value.value, value.defaultSelected);
                            option.selected = value.defaultSelected;
                            select.appendChild(option);
                        });
                        select.onchange = function () {
                            input.placeholder = this.value === 'id' ? '按武将ID搜索' : '按武将名称搜索';
                        }
                        input.placeholder = '按武将名称搜索';
                        var toggleButtons = function () {
                            var mode = select.value;
                            var inputValue = this.value;
                            var buttons = Array.from(dialog.querySelectorAll('.button'))
                            buttons.forEach(value => {
                                var link = value.link;
                                var buttonName = link;
                                if (mode === 'name') buttonName = get.translation(link);
                                if (this.value === '') return value.classList.remove('nodisplay');
                                value.classList.toggle('nodisplay', buttonName.indexOf(inputValue) === -1);
                            });
                            return true;
                        }
                        input.onkeydown = function (event) {
                            event && event.stopPropagation();
                            if (event.keyCode === 13) this.oninput(event);
                        };
                        input.oninput = event => toggleButtons.call(input) && event.stopPropagation();
                        dialog.searchInput = input;
                        dialog.select = select;
                    }

                    createSearchInput(dialog);

                    dialog.searchInput.disabled = true;
                    dialog.searchInput.placeholder = '点击【自由选将】搜索';
                    dialog.select.disabled = true;

                    if (target.special_identity) {
                        dialog.setCaption('选择角色（' + get.translation(target.special_identity) + '）');
                        target.node.identity.firstChild.innerHTML = get.translation(target.special_identity + '_bg');
                    } else {
                        dialog.setCaption('选择角色');
                        //target.setIdentity();
                    }
                    if (!event.chosen.length) {
                        game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
                            if ((_status.brawl && _status.brawl.doubleCharacter) || (target == game.zhu && _status.mode == 'online')) return 2;
                            return get.config('double_character') ? 2 : 1
                        };
                    } else {
                        lib.init.onfree();
                    }
                    ui.create.cheat = function () {
                        _status.createControl = ui.cheat2;
                        ui.cheat = ui.create.control('更换', function () {
                            if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                return;
                            }
                            if (game.changeCoin) {
                                game.changeCoin(-3);
                            }
                            event.list.randomSort();
                            list2.sort(lib.sort.character);
                            list3.randomSort();
                            if (target === game.zhu && lib.config.mode !== "doudizhu") {
                                list = list2.concat(list3.slice(0, num));
                            } else {
                                list = list3.slice(0, 8);
                            }
                            var buttons = ui.create.div('.buttons');
                            var node = _status.event.dialog.buttons[0].parentNode;
                            _status.event.dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                            _status.event.dialog.content.insertBefore(buttons, node);
                            buttons.animate('start');
                            node.remove();
                            game.uncheck();
                            game.check();
                        });
                        delete _status.createControl;
                    };
                    if (lib.onfree) {
                        lib.onfree.push(function () {
                            event.dialogxx = ui.create.characterDialog('heightset');
                            if (ui.cheat2) {
                                ui.cheat2.animate('controlpressdownx', 500);
                                ui.cheat2.classList.remove('disabled');
                            }
                        });
                    } else {
                        event.dialogxx = ui.create.characterDialog('heightset');
                    }

                    createSearchInput(event.dialogxx);
                    /*自动改为全部*/
                    if (event.dialogxx.currentcaptnode2) {
                        if (lib.config.touchscreen) {
                            event.dialogxx.currentcaptnode2.dispatchEvent(new DragEvent('touchend', {
                                cancelable: true,
                                composed: true
                            }))
                        } else {
                            event.dialogxx.currentcaptnode2.click();
                        }
                    }
                    /*补充所有武将*/
                    var charactersKey = Object.keys(lib.character).removeArray(event.dialogxx.buttons.map(value => value.link)).filter(value => {
                        var character = lib.character[value];
                        if (!character || !character[4]) return false;
                        return !character[4].contains('unseen')
                    });
                    event.dialogxx.add([charactersKey, 'character']);


                    ui.create.cheat2 = function () {
                        ui.cheat2 = ui.create.control('自由选将', function () {
                            if (this.dialog == _status.event.dialog) {
                                if (game.changeCoin) {
                                    game.changeCoin(50);
                                }
                                this.dialog.close();
                                _status.event.dialog = this.backup;
                                this.backup.open();
                                delete this.backup;
                                game.uncheck();
                                game.check();
                                if (ui.cheat) {
                                    ui.cheat.animate('controlpressdownx', 500);
                                    ui.cheat.classList.remove('disabled');
                                }
                            } else {
                                if (game.changeCoin) {
                                    game.changeCoin(-10);
                                }
                                this.backup = _status.event.dialog;
                                _status.event.dialog.close();
                                _status.event.dialog = _status.event.parent.dialogxx;
                                this.dialog = _status.event.dialog;
                                this.dialog.open();
                                game.uncheck();
                                game.check();
                                if (ui.cheat) {
                                    ui.cheat.classList.add('disabled');
                                }
                            }
                        });
                        if (lib.onfree) {
                            ui.cheat2.classList.add('disabled');
                        }
                    }
                    if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                        if (!ui.cheat && get.config('change_choice'))
                            ui.create.cheat();
                        if (!ui.cheat2 && get.config('free_choose'))
                            ui.create.cheat2();
                    }
//                    event.reai = lib.qyDeepClone(target.ai);
                    "step 1"
                    if (_status.mode == 'online') event.cardPile = target.storage.doudizhu_cardPile;
                    if (ui.cheat) {
                        ui.cheat.close();
                        delete ui.cheat;
                    }
                    if (ui.cheat2) {
                        ui.cheat2.close();
                        delete ui.cheat2;
                    }
                    var chooseGroup = false;
                    if (event.chosen.length) {
                        if (lib.character[event.chosen[0]][1] == 'shen' && !lib.character[event.chosen[0]][4].contains('hiddenSkill')) {
                            chooseGroup = true;
                        }
                    } else if (event.modchosen) {
                        if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
                        else event.modchosen[1] = result.buttons[0].link;
                    } else if (result.buttons.length == 2) {
                        event.choosed = [result.buttons[0].link, result.buttons[1].link];
                        game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                        if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].contains('hiddenSkill')) {
                            chooseGroup = true;
                        }
                    } else {
                        event.choosed = [result.buttons[0].link];
                        if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].contains('hiddenSkill')) {
                            chooseGroup = true;
                        }
                        game.addRecentCharacter(result.buttons[0].link);
                    }
                    if (get.config('choose_group') && chooseGroup) {
                        var list = lib.group.slice(0);
                        list.remove('shen');
                        game.me.chooseControl(list).prompt = '请选择神武将的势力';
                    }
                    "step 2"
                    event.group = result.control || false;
                    if (event.chosen.length) {
                        lib.element.player.uninit.call(target);
                        lib.element.player.init.call(target, event.chosen[0], event.chosen[1]);
                    } else if (event.modchosen) {
                        lib.element.player.uninit.call(target);
                        lib.element.player.init.call(target, event.modchosen[0], event.modchosen[1]);
                    } else if (event.choosed.length == 2) {
                        lib.element.player.uninit.call(target);
                        lib.element.player.init.call(target, event.choosed[0], event.choosed[1]);
                    } else {
                        lib.element.player.uninit.call(target);
                        lib.element.player.init.call(target, event.choosed[0]);
                    }
                    event.list.remove(get.sourceCharacter(target.name1));
                    event.list.remove(get.sourceCharacter(target.name2));
                    if (target == game.zhu && _status.mode != 'purple') {
                        if (game.players.length > 4 || get.mode() == 'doudizhu') {
                            target.hp++;
                            target.maxHp++;
                            target.update();
                        }
                        if (get.mode() == 'identity') {
                            var enhance_zhu = false;
                            if (_status.connectMode) {
                                enhance_zhu = (_status.mode != 'zhong' && _status.mode != 'purple' && lib.configOL.enhance_zhu && get.population('fan') >= 3);
                            } else {
                                enhance_zhu = (_status.mode != 'zhong' && _status.mode != 'purple' && get.config('enhance_zhu') && get.population('fan') >= 3);
                            }
                            if (enhance_zhu) {
                                var skill;
                                switch (game.zhu.name) {
                                    case 'key_yuri':
                                        skill = 'buqu';
                                        break;
                                    case 'liubei':
                                        skill = 'jizhen';
                                        break;
                                    case 'dongzhuo':
                                        skill = 'hengzheng';
                                        break;
                                    case 'sunquan':
                                        skill = 'batu';
                                        break;
                                    case 'sp_zhangjiao':
                                        skill = 'tiangong';
                                        break;
                                    case 'liushan':
                                        skill = 'shengxi';
                                        break;
                                    case 'sunce':
                                        skill = 'ciqiu';
                                        break;
                                    case 're_sunben':
                                        skill = 'ciqiu';
                                        break;
                                    case 'yuanshao':
                                        skill = 'geju';
                                        break;
                                    case 're_caocao':
                                        skill = 'dangping';
                                        break;
                                    case 'caopi':
                                        skill = 'junxing';
                                        break;
                                    case 'liuxie':
                                        skill = 'moukui';
                                        break;
                                    default:
                                        skill = 'tianming';
                                        break;
                                }
                                game.broadcastAll(function (player, skill) {
                                    target.addSkill(skill);
                                    target.storage.enhance_zhu = skill;
                                }, game.zhu, skill);
                            }
                        }
                        if (get.mode() == 'doudizhu') {
                            if (['normal', 'huanle', 'kaihei'].contains(_status.mode)) {
                                var skill = ['feiyang', 'bahu'];
                                game.broadcastAll(function (player, skill) {
                                    target.addSkill(skill);
                                }, game.zhu, skill);
                            }
                            if (_status.mode == 'binglin') {
                                var skill = game.zhuSkill;
                                game.broadcastAll(function (player, skill) {
                                    target.addSkill(skill);
                                }, game.zhu, skill);
                            }
                        }
                    } else {
                        if (_status.mode == 'binglin') {
                            var skill = ['binglin_shaxue', 'binglin_neihong'];
                            game.broadcastAll(function (player, skill) {
                                target.addSkill(skill);
                            }, target, skill);
                        }
                    }
                    if (_status.mode == 'online') {
                        game.zhu.hp = 4;
                        game.zhu.maxHp = 4;
                        game.zhu.update();
                        target.storage.doudizhu_cardPile = event.cardPile;
                        target.markSkill('doudizhu_cardPile');
                    }
                    if (_status.mode == 'purple') {
                        if (target == game.rZhu || target == game.bZhu) {
                            target.hp++;
                            target.maxHp++;
                            target.update();
                        }
                    }
                    /*for(var i=0;i<game.players.length;i++){
                        if(game.players[i]!=game.zhu&&game.players[i]!=target){
                            event.list.randomSort();
                            event.ai(game.players[i],event.list.splice(0,get.config('choice_'+game.players[i].identity)),null,event.list)
                        }
                    }*/
                    "step 3"
                    if (event.reai) target.ai = lib.qyDeepClone(event.reai);
                    if (event.group) {
                        target.group = event.group;
                        target.node.name.dataset.nature = get.groupnature(target.group);
                        target.update();
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        _status.characterlist.remove(game.players[i].name);
                        _status.characterlist.remove(game.players[i].name1);
                        _status.characterlist.remove(game.players[i].name2);
                    }
                    "step 4"
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);

                    if (event.special_identity) {
                        for (var i = 0; i < event.special_identity.length; i++) {
                            game.zhu.addSkill(event.special_identity[i]);
                        }
                    }
                });
            },
            // 国战
            chooseCharacterGuoZhan: function () {
                var next = game.createEvent('chooseCharacter', false);
                next.showConfig = true;
                next.addPlayer = true;
                next.target = this;
                next.player = game.me;
                next.ai = function (player, list, back) {
                    if (_status.brawl && _status.brawl.chooseCharacterAi) {
                        if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
                            return;
                        }
                    }
                    var filterChoice = function (name1, name2) {
                        if (get.is.double(name1)) return false;
                        var group1 = lib.character[name1][1];
                        var group2 = lib.character[name2][1];
                        if (group1 == 'ye') return group2 != 'ye';
                        var double = get.is.double(name2, true);
                        if (double) return double.contains(group1);
                        return group1 == group2;
                    };
                    for (var i = 0; i < list.length - 1; i++) {
                        for (var j = i + 1; j < list.length; j++) {
                            if (filterChoice(list[i], list[j]) || filterChoice(list[j], list[i])) {
                                var mainx = list[i];
                                var vicex = list[j];
                                if (!filterChoice(mainx, vicex) || (filterChoice(vicex, mainx) && get.guozhanReverse(mainx, vicex))) {
                                    mainx = list[j];
                                    vicex = list[i];
                                }
                                player.init(mainx, vicex, false);
                                if (back) {
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                    for (var i = 0; i < list.length; i++) {
                                        back.push(list[i]);
                                    }
                                }
                                return;
                            }
                        }
                    }
                }
                next.setContent(function () {
                    "step 0"
                    ui.arena.classList.add('choose-character');
                    var addSetting = function (dialog) {
                        dialog.add('选择座位').classList.add('add-setting');
                        var seats = document.createElement('table');
                        seats.classList.add('add-setting');
                        seats.style.margin = '0';
                        seats.style.width = '100%';
                        seats.style.position = 'relative';
                        for (var i = 1; i <= game.players.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
                            td.link = i - 1;
                            seats.appendChild(td);
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                if (_status.cheat_seat) {
                                    _status.cheat_seat.classList.remove('bluebg');
                                    if (_status.cheat_seat == this) {
                                        delete _status.cheat_seat;
                                        return;
                                    }
                                }
                                this.classList.add('bluebg');
                                _status.cheat_seat = this;
                            });
                        }
                        dialog.content.appendChild(seats);
                        if (game.me == game.zhu) {
                            seats.previousSibling.style.display = 'none';
                            seats.style.display = 'none';
                        }
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                    };
                    var removeSetting = function () {
                        var dialog = _status.event.dialog;
                        if (dialog) {
                            dialog.style.height = '';
                            delete dialog._scrollset;
                            var list = Array.from(dialog.querySelectorAll('.add-setting'));
                            while (list.length) {
                                list.shift().remove();
                            }
                            ui.update();
                        }
                    };
                    event.addSetting = addSetting;
                    event.removeSetting = removeSetting;
                    var chosen = lib.config.continue_name || [];
                    game.saveConfig('continue_name');
                    event.chosen = chosen;
                    var i;
                    event.list = [];
                    for (i in lib.character) {
                        if (i.indexOf('gz_shibing') == 0) continue;
                        //if (i.indexOf('key') === 0) continue;
                        //if (lib.character[i][1] === 'key') continue;
                        if (chosen.contains(i)) continue;
                        if (lib.filter.characterDisabled(i)) continue;
                        if (get.config('onlyguozhan')) {
                            if (!lib.characterPack.mode_guozhan[i]) continue;
                            if (get.is.jun(i)) continue;
                        }
                        if (lib.character[i][4].contains('hiddenSkill')) continue;
                        if (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5)
                            event.list.push(i);

                    }
                    _status.characterlist = event.list.slice(0);
                    _status.yeidentity = [];
                    if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                        event.list = _status.brawl.chooseCharacterFilter(event.list);
                    }
                    event.list.randomSort();
                    // var list=event.list.splice(0,parseInt(get.config('choice_num')));
                    var list;
                    if (_status.brawl && _status.brawl.chooseCharacter) {
                        list = _status.brawl.chooseCharacter(event.list, game.me);
                    } else {
                        list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                    }
                    if (_status.auto) {
                        event.ai(game.me, list);
                        lib.init.onfree();
                    } else if (chosen.length) {
                        game.me.init(chosen[0], chosen[1], false);
                        lib.init.onfree();
                    } else {
                        var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
                        if (!_status.brawl || !_status.brawl.noAddSetting) {
                            if (get.config('change_identity')) {
                                addSetting(dialog);
                            }
                        }
                        var next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
                        next.filterButton = function (button) {
                            if (ui.dialog.buttons.length <= 10) {
                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                    if (ui.dialog.buttons[i] != button) {
                                        if (lib.element.player.perfectPair.call({
                                            name1: button.link, name2: ui.dialog.buttons[i].link
                                        })) {
                                            button.classList.add('glow2');
                                        }
                                    }
                                }
                            }
                            if (lib.character[button.link][4].contains('hiddenSkill')) return false;
                            if (ui.selected.buttons.length == 0) {
                                if (get.is.double(button.link)) return false;
                                if (lib.character[button.link][1] == 'ye') return true;
                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                    var double = get.is.double(ui.dialog.buttons[i].link, true);
                                    if (ui.dialog.buttons[i] != button && (lib.character[button.link][1] == lib.character[ui.dialog.buttons[i].link][1] || double && double.contains(lib.character[button.link][1]))) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                            if (!lib.character[button.link] || lib.character[button.link][1] == 'ye') return false;
                            if (get.is.double(ui.selected.buttons[0].link)) return false;
                            if (lib.character[ui.selected.buttons[0].link][1] == 'ye') return true;
                            if (get.is.double(button.link)) return get.is.double(button.link, true).contains(lib.character[ui.selected.buttons[0].link][1]);
                            return (lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1]);
                        };
                        next.switchToAuto = function () {
                            event.ai(game.me, list);
                            ui.arena.classList.remove('selecting');
                        };
                        var createCharacterDialog = function () {
                            event.dialogxx = ui.create.characterDialog('heightset', function (i) {
                                if (i.indexOf('gz_shibing') == 0) return true;
                                if (get.config('onlyguozhan')) {
                                    if (!lib.characterPack.mode_guozhan[i]) return true;
                                    if (get.is.jun(i)) return true;
                                }
                            }, get.config('onlyguozhanexpand') ? 'expandall' : undefined, get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined);
                            if (ui.cheat2) {
                                ui.cheat2.animate('controlpressdownx', 500);
                                ui.cheat2.classList.remove('disabled');
                            }
                        };
                        if (lib.onfree) {
                            lib.onfree.push(createCharacterDialog);
                        } else {
                            createCharacterDialog();
                        }
                        ui.create.cheat2 = function () {
                            ui.cheat2 = ui.create.control('自由选将', function () {
                                if (this.dialog == _status.event.dialog) {
                                    if (game.changeCoin) {
                                        game.changeCoin(50);
                                    }
                                    this.dialog.close();
                                    _status.event.dialog = this.backup;
                                    this.backup.open();
                                    delete this.backup;
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.animate('controlpressdownx', 500);
                                        ui.cheat.classList.remove('disabled');
                                    }
                                } else {
                                    if (game.changeCoin) {
                                        game.changeCoin(-10);
                                    }
                                    this.backup = _status.event.dialog;
                                    _status.event.dialog.close();
                                    _status.event.dialog = _status.event.parent.dialogxx;
                                    this.dialog = _status.event.dialog;
                                    this.dialog.open();
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.classList.add('disabled');
                                    }
                                }
                            });
                            if (lib.onfree) {
                                ui.cheat2.classList.add('disabled');
                            }
                        }
                        ui.create.cheat = function () {
                            _status.createControl = ui.cheat2;
                            ui.cheat = ui.create.control('更换', function () {
                                if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                    return;
                                }
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
                                }
                                event.list = event.list.concat(list);
                                event.list.randomSort();
                                // list=event.list.splice(0,parseInt(get.config('choice_num')));
                                list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                                var buttons = ui.create.div('.buttons');
                                var node = _status.event.dialog.buttons[0].parentNode;
                                _status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
                                _status.event.dialog.content.insertBefore(buttons, node);
                                buttons.animate('start');
                                node.remove();
                                game.uncheck();
                                game.check();
                            });
                            delete _status.createControl;
                        }
                        if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                            if (!ui.cheat && get.config('change_choice'))
                                ui.create.cheat();
                            if (!ui.cheat2 && get.config('free_choose'))
                                ui.create.cheat2();
                        }
                    }
                    "step 1"
                    if (ui.cheat) {
                        ui.cheat.close();
                        delete ui.cheat;
                    }
                    if (ui.cheat2) {
                        ui.cheat2.close();
                        delete ui.cheat2;
                    }
                    if (result.buttons) {
                        //lib.element.player.uninit.call(target);
                        lib.element.player.init.call(target, result.buttons[0].link, result.buttons[1].link, false);
                        game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                    }
                    target.setIdentity(target.group);
                    /*event.list.remove(game.me.name1);
                    event.list.remove(game.me.name2);
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i]!=game.me){
                            event.ai(game.players[i],game.getCharacterChoice(event.list,parseInt(get.config('choice_num'))),event.list);
                        }
                    }*/
                    target.classList.add('unseen');
                    target.classList.add('unseen2');
                    if (target != game.me) {
                        target.node.identity.firstChild.innerHTML = '猜';
                        target.node.identity.dataset.color = 'unknown';
                        target.node.identity.classList.add('guessing');
                    }
                    target.hiddenSkills = lib.character[target.name1][3].slice(0);
                    var hiddenSkills2 = lib.character[target.name2][3];
                    for (var j = 0; j < hiddenSkills2.length; j++) {
                        target.hiddenSkills.add(hiddenSkills2[j]);
                    }
                    for (var j = 0; j < target.hiddenSkills.length; j++) {
                        if (!lib.skill[target.hiddenSkills[j]]) {
                            target.hiddenSkills.splice(j--, 1);
                        }
                    }
                    target.group = 'unknown';
                    target.sex = 'unknown';
                    target.name1 = target.name;
                    target.name = 'unknown';
                    target.identity = 'unknown';
                    target.node.name.show();
                    target.node.name2.show();
                    target._group = lib.character[target.name1][1];
                    for (var j = 0; j < target.hiddenSkills.length; j++) {
                        target.addSkillTrigger(target.hiddenSkills[j], true);
                    }
                    /*for(var i=0;i<game.players.length;i++){
                        game.players[i].classList.add('unseen');
                        game.players[i].classList.add('unseen2');
                        _status.characterlist.remove(game.players[i].name);
                        _status.characterlist.remove(game.players[i].name2);
                        if(game.players[i]!=game.me){
                            game.players[i].node.identity.firstChild.innerHTML='猜';
                            game.players[i].node.identity.dataset.color='unknown';
                            game.players[i].node.identity.classList.add('guessing');
                        }
                        game.players[i].hiddenSkills=lib.character[game.players[i].name1][3].slice(0);
                        var hiddenSkills2=lib.character[game.players[i].name2][3];
                        for(var j=0;j<hiddenSkills2.length;j++){
                            game.players[i].hiddenSkills.add(hiddenSkills2[j]);
                        }
                        for(var j=0;j<game.players[i].hiddenSkills.length;j++){
                            if(!lib.skill[game.players[i].hiddenSkills[j]]){
                                game.players[i].hiddenSkills.splice(j--,1);
                            }
                        }
                        game.players[i].group='unknown';
                        game.players[i].sex='unknown';
                        game.players[i].name1=game.players[i].name;
                        game.players[i].name='unknown';
                        game.players[i].identity='unknown';
                        game.players[i].node.name.show();
                        game.players[i].node.name2.show();
                        game.players[i]._group=lib.character[game.players[i].name1][1];
                        for(var j=0;j<game.players[i].hiddenSkills.length;j++){
                            game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j],true);
                        }
                    }*/
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);
                });
            },
        };
        lib.skill._qingyao_AIxuanjiang = {
            trigger: {
                global: 'gameStart',
                player: 'enterGame',
            },
            forced: true,
            popup: false,
            silent: true,
            priority: 523,
            firstDo: true,
            filter: function (event, player) {
                return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
            },
            content: function () {
                'step 0'
                player.chooseTarget([1, 1], "请选择一名角色并改变其武将牌", lib.filter.all);
                'step 1'
                if (result.bool) {
                    event.target = result.targets[0];
                    lib.choosePlayer.chooseCharacter(event.target);
                } else event.finish();
                'step 2'
                event.goto(0);
            },
        };
    }

    // 替换手牌
    if (config.qingyao_replace_card) {
        lib.skill['_qy-replace-card'] = {
            trigger: {
                global: 'gameDrawAfter',
            },
            forecd: true,
            direct: true,
            forced: true,
            priority: 1534,
            firstDo: true,
            silent: true,
            popup: false,
            filter: function (event, player) {
                return player === game.me;
            },
            content: function () {
                'step 0'
                player.chooseTarget("定向手气卡：你可以选择一名角色替换其手牌。", lib.filter.all);
                'step 1'
                if (result.bool) {
                    event.target = result.targets[0];
                    const dialog = ui.create.dialog('hidden', 'forcebutton', '定向手气卡：你可以选择一名角色替换其手牌。');
                    dialog.classList.add('noupdate', 'fixed');
                    dialog.css({
                        height: '70%',
                        width: 'calc(100% - 95px)',
                        left: '50%',
                        top: isMobile ? '40%' : '30%',
                        transition: 'none',
                        transform: 'translate(-50%,-50%)',
                        animation: 'none',
                        backgroundSize: '100% 100%',
                        fontFamily: 'shousha',
                    });
                    dialog.classList.add('qy_card_selected')
                    dialog.style.setProperty('background-image', 'url("' + lib.assetURL + 'extension/假装无敌纯/images/replace_card_backronud.png")', 'important');
                    dialog.content.css({
                        'margin-top': '2%',
                    });
                    dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                        _status.clicked2 = true;
                    });

                    const namecapt = [], typeList = [], node = ui.create.div('.caption.pointerspan'),
                        getCapt = function (str) {
                            var capt;
                            if (str.indexOf('_') == -1) {
                                capt = str[0];
                            } else {
                                capt = str[str.lastIndexOf('_') + 1];
                            }
                            capt = capt.toLowerCase();
                            if (!/[a-z]/i.test(capt)) {
                                capt = '自定义';
                            }
                            return capt;
                        }, cardList = [], div = ui.create.div(dialog.content, 1, {
                            display: 'block',
                        }), input = ui.create.node('input', div), newlined2 = document.createElement('div'),
                        packsource = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin', '卡牌类型', {
                            margin: '3px',
                            display: 'inline-block',
                        });
                    input.placeholder = '请输入卡牌名称';
                    dialog.add(node);

                    event._reuslt = {
                        cancel: true,
                        player: [],
                        target: [],
                    };

                    var _event = event;
                    let restSelectButton = function () {
                        dialog.querySelectorAll('.qy_selected').forEach(current => {
                            current.classList.remove('qy_selected');
                        });
                        _event._reuslt = {
                            cancel: true,
                            player: [],
                            target: [],
                        }
                        _event.ok.hide();
                        targetCards = _event.target.get('h');
                    }

                    const replaceCards = function (sources, targets, isButton = false) {
                        for (let i = 0; i < sources.length; i++) {
                            let card1 = sources[i];
                            let card2 = targets[i];
                            let parentElement = card2.parentElement;
                            let index = Array.from(parentElement.childNodes).indexOf(card2);
                            card1.parentElement.replaceChild(card2, card1);
                            parentElement.insertBefore(card1, parentElement.childNodes[index]);
                        }
                        isButton ? restSelectButton() : ui.updatehl();
                    };

                    event.ok = ui.create.control('确定', function () {
                        let card1Links = event._reuslt.player.map(current => current.link);
                        let card2Links = event._reuslt.target.map(current => current.link);
                        replaceCards(card1Links, card2Links);

                        let card1 = event._reuslt.player;
                        let card2 = event._reuslt.target;
                        replaceCards(card1, card2, true);
                    });
                    event.ok.hide();

                    event.cancel = ui.create.control('取消该角色换牌', game.resume);

                    let seachButton;

                    const clickButton = function () {
                        if (!_status.event.isMine()) return;
                        this.classList.toggle('qy_selected');
                        // 开始自己的代码逻辑
                        if (targetCards.contains(this.link)) {
                            if (event._reuslt.player.contains(this)) {
                                event._reuslt.player.remove(this);
                            } else {
                                event._reuslt.player.add(this);
                            }
                        } else {
                            if (event._reuslt.target.contains(this)) {
                                event._reuslt.target.remove(this);
                            } else {
                                event._reuslt.target.add(this);
                            }
                        }
                        checkDataNum();

                        if (event._reuslt.player.length > 0 && event._reuslt.player.length === event._reuslt.target.length) {
                            event.ok.show();
                        } else {
                            event.ok.hide();
                        }
                    }

                    const checkDataNum = function () {
                        event._reuslt.player.forEach((current, index) => {
                            current.dataset.num = get.cnNumber(index + 1, true);
                        })
                        event._reuslt.target.forEach((current, index) => {
                            current.dataset.num = get.cnNumber(index + 1, true);
                        })
                    }

                    const createOpenCards = function (list, num = 10) {
                        dialog.add([list.slice(0, num), 'vcard']);
                        if (num > list.length) return false; // 展示完了就不添加展开按钮了

                        let buttons = dialog.querySelectorAll('.buttons');
                        const buttonsElement = buttons[buttons.length - 1];
                        const caption = ui.create.div(".caption");
                        const openElement = ui.create.div('.menubutton.highlight', '展开', {
                            width: '60%',
                            fontSize: '24px',
                            cursor: 'pointer',
                            display: 'inline-block',
                            textAlign: 'center',
                        }, function () {
                            const buttons = ui.create.buttons(list.slice(this.currentNum, this.currentNum + this.step), 'vcard', buttonsElement);
                            buttons.forEach(button => {
                                button.capt = getCapt(button.link.name);
                                button.addEventListener('click', clickButton, true);
                            });
                            dialog.buttons = dialog.buttons.concat(buttons);
                            this.currentNum += this.step;
                            if (this.currentNum > list.length) {
                                this.delete();
                                this.parentNode.delete();
                            }
                            seachButton();
                        }, caption);
                        openElement.step = num;
                        openElement.currentNum = num;
                        dialog.add(caption);
                    }

                    dialog.add('<span style="color:red;">「注」：若使用搜索或筛选功能找不到想要的牌，请尝试多次点击【展开】</span>');

                    dialog.add(`<div style="color: rgb(0, 255, 50);text-align: center;background-image: linear-gradient(to right, transparent 0%, rgba(255, 165, 0, 0.65) 10%, rgba(255, 165, 0, 0.65) 90%, transparent 100%);width: 90%;left: 50%;transform: translateX(-50%);">${get.translation(event.target)}的手牌</div>`);
                    let targetCards = event.target.get('h');
                    createOpenCards(targetCards);

                    game.players
                        .filter(current => current !== event.target)
                        .forEach(current => {
                            dialog.add(`<div style="text-align: center;background-image: linear-gradient(to right, transparent 0%, rgba(255, 165, 0, 0.65) 10%, rgba(255, 165, 0, 0.65) 90%, transparent 100%);width: 90%;left: 50%;transform: translateX(-50%);">${get.translation(current)}的手牌</div>`);
                            let cards = current.get('h');
                            createOpenCards(cards);
                            cardList.addArray(cards);
                        });
                    if (ui.cardPile && ui.cardPile.childElementCount > 0) {
                        dialog.add("<div style='text-align: center;background-image: linear-gradient(to right, transparent 0%, rgba(255, 165, 0, 0.65) 10%, rgba(255, 165, 0, 0.65) 90%, transparent 100%);width: 90%;left: 50%;transform: translateX(-50%);'>牌堆的牌</div>");
                        let cards = Array.from(ui.cardPile.childNodes);
                        // dialog.add([cards, 'vcard']);
                        createOpenCards(cards, 50);
                        cardList.addArray(cards);
                    }
                    if (ui.cardPile && ui.discardPile.childElementCount > 0) {
                        dialog.add("<div style='text-align: center;background-image: linear-gradient(to right, transparent 0%, rgba(255, 165, 0, 0.65) 10%, rgba(255, 165, 0, 0.65) 90%, transparent 100%);width: 90%;left: 50%;transform: translateX(-50%);'>弃牌堆的牌</div>");
                        let cards = Array.from(ui.discardPile.childNodes);
                        // dialog.add([cards, 'vcard']);
                        createOpenCards(cards, 50);
                        cardList.addArray(cards);
                    }
                    cardList.map(current => current.name)
                        .forEach(current => {
                            namecapt.add(getCapt(current));
                            typeList.add(get.type(current));
                        });

                    namecapt.sort();

                    dialog.isSuccess = function (button) {
                        let link = get.translation(button.name),
                            type = get.type(button),
                            capt = button.capt;
                        if (targetCards.contains(button.link)) return true;
                        if (input.value && link.indexOf(input.value) === -1) return false;
                        if (this.currentcapt && this.currentcapt !== capt) return false;
                        if (this.currenttype && this.currenttype !== type) return false;
                        return true;
                    }

                    input.oninput = function (e) {
                        e.stopPropagation();
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (dialog.isSuccess(dialog.buttons[i]))
                                dialog.buttons[i].classList.remove('nodisplay');
                            else
                                dialog.buttons[i].classList.add('nodisplay');
                        }
                    }
                    input.onkeydown = function (event) {
                        event && event.stopPropagation();
                        if (event.keyCode === 13) this.oninput(event);
                    };

                    seachButton = function () {
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (dialog.isSuccess(dialog.buttons[i])) {
                                dialog.buttons[i].classList.remove('nodisplay');
                            } else {
                                dialog.buttons[i].classList.add('nodisplay');
                            }
                        }
                    }
                    var clickCapt = function (e) {
                        if (_status.dragged) return;
                        if (this.classList.contains('thundertext')) {
                            dialog.currentcapt = null;
                            dialog.currentcaptnode = null;
                            this.classList.remove('thundertext');
                        } else {
                            if (dialog.currentcaptnode) {
                                dialog.currentcaptnode.classList.remove('thundertext');
                            }
                            dialog.currentcapt = this.link;
                            dialog.currentcaptnode = this;
                            this.classList.add('thundertext');
                        }
                        seachButton();
                        if (e) e.stopPropagation();
                    };
                    for (var i = 0; i < namecapt.length; i++) {
                        var span = document.createElement('span');
                        span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
                        span.link = namecapt[i];
                        span.className = 'tdnode pointerdiv shadowed reduce_radius reduce_margin';
                        span.alphabet = true;
                        span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                        node.appendChild(span);
                    }
                    node.appendChild(packsource);

                    const clickType = function (e) {
                        if (_status.dragged) return;
                        if (this.classList.contains('thundertext')) {
                            dialog.currenttype = null;
                            dialog.currenttypenode = null;
                            this.classList.remove('thundertext');
                            packsource.innerHTML = '卡牌类型';
                            packsource.classList.remove('thundertext');
                        } else {
                            if (dialog.currenttypenode) {
                                dialog.currenttypenode.classList.remove('thundertext');
                            }
                            dialog.currenttype = this.link;
                            dialog.currenttypenode = this;
                            this.classList.add('thundertext');
                            packsource.classList.add('thundertext');
                            packsource.innerHTML = get.translation(this.link);
                        }
                        this.parentNode.style.display = 'none';
                        seachButton();
                        if (e) e.stopPropagation();
                    }

                    typeList.forEach(current => {
                        ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin', get.translation(current), newlined2, {
                            display: 'inline-block',
                            width: 'auto',
                            margin: '5px',
                            fontSize: '22px',
                        }, clickType).link = current;
                    });
                    newlined2.style.marginTop = '5px';
                    newlined2.style.display = 'none';
                    newlined2.style.fontFamily = 'xinwei';
                    newlined2.classList.add('pointernode');
                    if (get.is.phoneLayout()) {
                        newlined2.style.fontSize = '32px';
                    } else {
                        newlined2.style.fontSize = '22px';
                    }
                    newlined2.style.textAlign = 'center';

                    node.appendChild(newlined2);

                    packsource.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                        if (_status.dragged) return;
                        if (newlined2.style.display == 'none') {
                            newlined2.style.display = 'block';
                        } else {
                            newlined2.style.display = 'none';
                        }
                    });

                    for (i = 0; i < dialog.buttons.length; i++) {
                        dialog.buttons[i].capt = getCapt(dialog.buttons[i].link.name);
                        dialog.buttons[i].addEventListener('click', clickButton, true);
                    }
                    // 重写打开方法
                    dialog.open = function () {
                        if (this.noopen) return;
                        for (var i = 0; i < ui.dialogs.length; i++) {
                            if (ui.dialogs[i] == this) {
                                this.show();
                                this.refocus();
                                ui.dialogs.remove(this);
                                ui.dialogs.unshift(this);
                                ui.update();
                                return this;
                            }
                            if (ui.dialogs[i].static) ui.dialogs[i].unfocus();
                            else ui.dialogs[i].hide();
                        }
                        ui.dialog = this;
                        ui.arena.appendChild(this);
                        ui.dialogs.unshift(this);
                        ui.update();
                        ui.refresh(this);
                    }
                    dialog.open();
                    /*player.chooseButton(dialog,2).set('filterButton',function(button,player){
                        if(!ui.selected.buttons.length) return true;
                        const card = button.link;
                        const buttonLink = ui.selected.buttons[0].link;
                        if(targetCards.contains(buttonLink)){
                            if(targetCards.contains(card)) return false;
                            return true;
                        }else return targetCards.contains(card);
                    })*/
                    // .set('closeDialog',false);
                    game.pause();

                    event.dialog = dialog;
                    // window.dialog = dialog;
                } else event.finish();
                'step 2'
                if (event.dialog) event.dialog.close();
                if (event.ok) event.ok.close();
                if (event.cancel) event.cancel.close();
                event.goto(0);
            },
        }
    }

    if (config.qingyao_shoupaishangxian) {
        var libUpdate = player=>{
            var numh = player.countCards('h');
            var nummh = player.getHandcardLimit();
            if (nummh == Infinity) nummh = '∞';
            player.node.count.innerHTML = numh + '/' + nummh;
        }
        if(Array.isArray(lib.element.player.updates)){
            lib.element.player.updates.unshift(libUpdate)
        }else{
            lib.element.player.updates = [libUpdate]
        }
    }

    if (config.qingyao_kongzhiduiyou) {
        lib.skill._qingyao_kongzhiduiyou = {
            firstDo: true,
            trigger: {
                global: 'gameStart',
                player: ['playercontrol', 'chooseToUseBegin', 'chooseToRespondBegin', 'chooseToDiscardBegin', 'chooseToCompareBegin', 'chooseButtonBegin', 'chooseCardBegin', 'chooseTargetBegin', 'chooseCardTargetBegin', 'chooseControlBegin', 'chooseBoolBegin', 'choosePlayerCardBegin', 'discardPlayerCardBegin', 'gainPlayerCardBegin']
            },
            forced: true,
            priority: 97,
            forceDie: true,
            popup: false,
            silent: true,
            mode: ['identity', 'guozhan', 'doudizhu'],
            filter: function (event, player, name) {
                if (name == 'gameStart') return true;
                if (player._trueMe) return false;
                if (!_status.kongzhiduiyou) return false;
                if (event.autochoose && event.autochoose()) return false;
                if (lib.filter.wuxieSwap(event)) return false;
                if (_status.auto) return false;
                //if(get.mode()=='boss') return player.side==game.boss.side;
                if (get.mode() == 'identity') {
                    if (get.translation(player.identity) != (get.translation(player.node.identity.dataset.color) || player.node.identity.firstChild.innerHTML)) return false;
                }
                if (get.mode() == 'guozhan') {
                    if (!player.node.identity.firstChild.innerHTML || player.node.identity.firstChild.innerHTML == '') return false;
                    if ((get.translation(lib.character[player.name1][5]) || get.translation(lib.character[player.name1][1])) != player.node.identity.firstChild.innerHTML) return false;
                }
                return game.me.getFriends().contains(player);
            },
            content: function () {
                'step 0'
                if (event.triggername == 'gameStart') {
                    _status.kongzhiduiyou = true;
                    return event.finish();
                }
                if (get.mode() == 'guozhan') {
                    game.me.group = (lib.character[player.name1][5] || lib.character[player.name1][1]);
                    game.me.node.identity.firstChild.innerHTML = get.translation(game.me.group);
                    //game.me.showCharacter(true);
                } else game.me.showIdentity(true);
                'step 1'
                game.swapPlayerAuto(player);
            },
        };
    }

    get.qyRateNum = function (name) {
        const rarity = game.getRarity(name);
        let num = 1;
        const rateCharacter = game.getExtensionConfig('假装无敌纯', 'rateCharacter') || {};
        if (rateCharacter[name]) num = rateCharacter[name];
        if (num !== 1) return num;
        switch (rarity) {
            case 'legend':
                num = 5;
                break;
            case 'epic':
                num = 4;
                break;
            case 'rare':
                num = 3;
                break;
            case 'junk':
                num = 2;
                break;
            default:
                num = 1;
                break;
        }
        return num;
    }
    if (config.qingyao_shoushaMVP) {
        "use strict;"
        _status.手杀MVP = function (sd) {
            if (_status.showShoushaMvp) return false;
            _status.showShoushaMvp = true;
            ui.dialogs[0] && ui.dialogs[0].hide();
            if (!sd) JzwdPlayAnimDelay && JzwdPlayAnimDelay("qy_sf_jiesuan_quanchangzuijia", {scale: 1.5});

            setTimeout(item => {
                var dialog = Array.from(ui.arena.querySelectorAll(".dialog"));
                dialog.forEach(value => value.hide());
                game.playqysstx('images/asqx.mp3');
                var players = game.players.slice(0);
                game.players = game.players.concat(game.dead);
                if (!_status.showShouSha局势) {
                    game.players.forEach(value => {
                        if (game.dead.contains(value)) {
                            value.局势分数 -= 20;
                        }
                        value.getEnemies().forEach(current => {
                            if (game.dead.contains(current) || current.isDead()) {
                                value.局势分数 += 5;
                            }
                        })
                        value.getFriends().forEach(current => {
                            if (current.isDead() || game.dead.contains(current))
                                value.局势分数 -= 5;
                        })
                    })
                }
                _status.showShouSha局势 = true;
                game.players = players;
                /**
                 * 冒泡排序
                 * @param arr
                 * @param len
                 */
                var sort = function (arr) {
                    var temp, len = arr.length;
                    var i, j;
                    for (i = 0; i < len - 1; i++) /* 外循环为排序趟数，len个数进行len-1趟 */
                        for (j = 0; j < len - 1 - i; j++) { /* 内循环为每趟比较的次数，第i趟比较len-i次 */
                            if (arr[j].mvpCount > arr[j + 1].mvpCount) { /* 相邻元素比较，若逆序则交换（升序为左大于右，降序反之） */
                                temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;
                            }
                        }
                    return arr;
                }
                var sorts = sort(game.players.concat(game.dead)).reverse();
                var player = sorts[0];
                var backgroundPopierContainer = ui.create.div('.popup-container', {
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 10
                }, ui.window);
                const click = event => {
                    if (event) event.stopPropagation();
                    popuperContainer.delete(200);
                    backgroundPopierContainer.delete(200);
                    ui.dialogs[0] && ui.dialogs[0].show();
                    _status.showShoushaMvp = false;
                    JzwdAnimation && JzwdAnimation.stopSpine2dAll();
                };
                var popuperContainer = ui.create.div('.popup-container', {zIndex: 103}, ui.window);
                popuperContainer.addEventListener('click', click);
                var skills = player.skills.filter(value => lib.skill[value].audio);
                skills.length && game.trySkillAudio(skills.randomGet(), player, true);
                if (!lib.config.extension_假装无敌纯_qingyao_toggle_MVP) {
                    var qycontainer = ui.create.div('.qy-mvp-container', popuperContainer);

                    var backgroundRight = ui.create.div('.qy-mvp-piaodai-right', qycontainer);
                    var container = ui.create.div('.qy-center-container', qycontainer);
                    var backgroundLeft = ui.create.div('.qy-mvp-piaodai-left', qycontainer);

                    var avatarbox = ui.create.div('.qy-mvp-avatarbox', container);
                    if (navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i) !== null) {
                        avatarbox.css({
                            height: '120%',
                            top: '-4%',
                        });
                    }
                    var avatarborder = ui.create.div('.qy-mvp-avatarborder', avatarbox);
                    avatarborder.dataset.name = get.translation(player.name);
                    avatarborder.setBackgroundImage(`extension/假装无敌纯/images/border_${player.group}.png`);
                    var image = new Image();
                    image.src = `${lib.assetURL}extension/假装无敌纯/images/border_${player.group}.png`;
                    image.onerror = function () {
                        avatarborder.setBackgroundImage(`extension/假装无敌纯/images/border_qun.png`);
                    }
                    var xing = ui.create.div(avatarbox, '.qy-mvp-xing');
                    if (navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i) !== null) {
                        avatarbox.css({
                            height: '120%',
                            top: '-4%',
                        });
                        xing.css({left: '28%'});
                    }
                    var num = get.qyRateNum(player.name);
                    for (var numKey = 0; numKey < num; numKey++)
                        ui.create.div('.item', xing);
                    var avatar = ui.create.div('.qy-mvp-avatar', avatarbox);
                    if (game.getExtensionConfig("假装无敌纯", "qingyao_outcrop")) {
                        avatar.css({
                            height: '58%',
                            top: '20%'
                        })
                    }
                    avatar.style.backgroundImage = player.node.avatar.style.backgroundImage;
                    var qyInfo = ui.create.div('.qy-mvp-qyInfo', container);
                    ui.create.div('.qy-mvp-title', qyInfo);
                    var qycenter = ui.create.div('.qy-mvp-center', qyInfo);
                    var qyIcon = ui.create.div('.qy-mvp-icon', qycenter);
                    let qyIconImage = game.getExtensionConfig('假装无敌纯', 'qyIconImage');
                    if (qyIconImage)
                        qyIcon.css({
                            backgroundImage: `url("${lib.assetURL}${qyIconImage}")`
                        });
                    var qyPlayerInfo = ui.create.div('.qy-player-info', qycenter);
                    ui.create.div(qyPlayerInfo, '.qy-mvp-name-title', '玩家名称');
                    var imgThat = ui.create.node('img.qyMvpMeTag', {
                        left: lib.config.touchscreen ? '50%' : undefined,
                        width: lib.config.touchscreen ? '47px' : undefined,
                        height: lib.config.touchscreen ? '35px' : undefined,
                    }, ui.create.div(qyPlayerInfo, '.qy-mvp-name-info', player === game.me ? lib.config.connect_nickname : get.translation(player.name)));
                    imgThat.setAttribute('src', lib.assetURL + 'extension/假装无敌纯/images/mvp_me_tag.png');
                    if (lib.config.touchscreen) {
                        imgThat.setAttribute('width', 47);
                        imgThat.setAttribute('hight', 35);
                    }
                    ui.create.div(qyPlayerInfo, '.qy-mvp-name-title', `技术分：${player.mvpCount || 0}`);
                    var qyScoreInfo = ui.create.div('.qy-mvp-scoreInfo', qyInfo);
                    var table = ui.create.node('table', qyScoreInfo, {width: "100%"});
                    var list = ['攻击分数', '治疗分数', '辅助分数', '局势分数', '惩罚扣分'];
                    list.forEach(value => {
                        var tr = ui.create.node('tr', table);
                        tr.style.colo = 'rgb(234, 138, 76)';
                        var td = ui.create.node('td', tr, value);
                        var num = (player[value] || 0);
                        var num2 = (sorts[1][value]);
                        td = ui.create.node('td', tr).innerHTML = num + (num - num2 >= 30 ? '(遥遥领先)' : '');
                    })
                } else {

                    /*
                    后面兴许会用到......;
                    JzwdPlayAnimDelay('qy_quanchangzuijia',{
                        scale: 0.7,
                        loop:true,
                        complete:function(track,position){
                            if (!position.setAnimat) {
                                position.setAnimat = true;
                                JzwdAnimation.setCurrentAction('play2')
                            }
                        }
                    });

                    * */

                    var config = [{
                        scale: 0.6, x: 470, loop: true, y: 330
                    }, {
                        scale: [1.3, 1.5], x: 550, loop: true
                    }];
                    if (lib.config.touchscreen) {
                        config = [{
                            scale: 0.6, x: 550, loop: true, y: 254
                        }, {
                            scale: [1.3, 1.5], x: 420, loop: true
                        }]
                    }
                    if (game.getExtensionConfig('假装无敌纯', 'qingyaoDynamicMvpEnable')) {
                        let qingyao_dynamic_x = game.getExtensionConfig('假装无敌纯', 'qingyao_dynamic_x');
                        if (qingyao_dynamic_x !== 0 && isFinite(qingyao_dynamic_x)) {
                            config[0].x += qingyao_dynamic_x;
                        }
                        let qingyao_dynamic_y = game.getExtensionConfig('假装无敌纯', 'qingyao_dynamic_y');
                        if (qingyao_dynamic_y !== 0 && isFinite(qingyao_dynamic_y)) {
                            config[0].y += qingyao_dynamic_y;
                        }
                    } else {
                        delete config[0].y;
                    }
                    JzwdPlayAnimDelay(['qy_quanchangzuijia', 'play2'], Object.assign(config[0], {
                        /*complete: function(track,position){
                            if(!position.isComplete){
                                position.isComplete = true;
                                click();
                            }
                        },*/
                    }));
                    var getUiZoom = (function () {
                        var zoom = lib.config.ui_zoom;
                        switch (zoom) {
                            case 'esmall':
                                zoom = 0.8;
                                break;
                            case 'vsmall':
                                zoom = 0.9;
                                break;
                            case 'small':
                                zoom = 0.93;
                                break;
                            case 'big':
                                zoom = 1.05;
                                break;
                            case 'vbig':
                                zoom = 1.1;
                                break;
                            case 'ebig':
                                zoom = 1.2;
                                break;
                            default:
                                zoom = 1;
                        }
                        return zoom;
                    }());
                    if (getUiZoom) popuperContainer.style.zoom = 2 - getUiZoom;
                    var avatar = ui.create.div('.qy-avatar', popuperContainer);
                    avatar.style.backgroundImage = player.node.avatar.style.backgroundImage;
                    if (game.getExtensionConfig("假装无敌纯", "qingyao_outcrop")) {
                        var isMobeil = navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i) === null;
                        avatar.css({
                            height: isMobeil ? '59vh' : '370px',
                            top: isMobeil ? '17.6vh' : '56px',
                        })
                    }
                    var avatarBorder = ui.create.div('.qy-avatar-border', popuperContainer);
                    avatarBorder.dataset.name = get.translation(player.name);
                    avatarBorder.setBackgroundImage(`extension/假装无敌纯/images/border_${player.group}.png`);
                    var image = new Image();
                    image.src = `${lib.assetURL}extension/假装无敌纯/images/border_${player.group}.png`;
                    image.onerror = function () {
                        avatarBorder.setBackgroundImage(`extension/假装无敌纯/images/border_qun.png`);
                    }
                    var xing = ui.create.div(avatarBorder, '.qy-mvp-border-xing');
                    var num = get.qyRateNum(player.name);
                    for (var numKey = 0; numKey < num; numKey++)
                        ui.create.div('.item', xing);
                    var rightInfo = ui.create.div('.qy-mvp-right-info', popuperContainer);
                    var rightContainer = ui.create.div('.qy-mvp-right-container', rightInfo, {
                        flex: 0.6,
                    });
                    var icon = ui.create.div('.qy-mvp-player-icon', rightContainer);
                    let qyIconImage = game.getExtensionConfig('假装无敌纯', 'qyIconImage');
                    if (qyIconImage)
                        icon.css({
                            backgroundImage: `url("${lib.assetURL}${qyIconImage}")`
                        });
                    var playerInfo = ui.create.div('.qy-mvp-player-info', rightContainer);
                    ui.create.div('.qy-mvp-name-title', '玩家名称', playerInfo);
                    var nickname = ui.create.div('.qy-mvp-player-nickname', playerInfo, player === game.me ? lib.config.connect_nickname : get.translation(player.name));
                    if (game.me === player) ui.create.node('img', nickname).src = lib.assetURL + 'extension/假装无敌纯/images/mvp_me_tag.png';
                    ui.create.div('.qy-mvp-player-technology', `技术分：${player.mvpCount}`, playerInfo);
                    var technology = ui.create.div('.qy-mvp-technology', rightInfo);
                    var table = ui.create.node('table', technology, {width: "100%"});
                    var list = ['攻击分数', '治疗分数', '辅助分数', '局势分数', '惩罚扣分'];
                    list.forEach(value => {
                        var tr = ui.create.node('tr', table);
                        tr.style.color = 'rgb(234, 138, 76)';
                        var td = ui.create.node('td', tr, value);
                        var num = (player[value] || 0);
                        var num2 = (sorts[1][value]);
                        td = ui.create.node('td', tr).innerHTML = num + (num - num2 >= 30 ? '(遥遥领先)' : '');
                    });
                }
            }, !sd && 1000 || 0);
        }
        "use strict;"
        lib.onover.push(resultbool => {
            ui.create.control("手杀MVP", _status.手杀MVP);
            _status.手杀MVP();
        });
        ['攻击分数', '治疗分数', '辅助分数', '惩罚扣分'].forEach(value => {
            HTMLDivElement.prototype[value] = 0;
        });
        HTMLDivElement.prototype.局势分数 = 100;
        Object.defineProperty(HTMLDivElement.prototype, 'mvpCount', {
            get: function () {
                return this.攻击分数 + this.治疗分数 + this.辅助分数 + this.局势分数 - this.惩罚扣分;
            },
            set: function () {
            },
        });
        lib.skill['_qy-mvp-effect1'] = {
            trigger: {
                player: 'useCard',
                source: ['damage', '清瑶Damage'],
            },
            direct: true,
            forced: true,
            firstDo: true,
            silent: true,
            popup: false,
            filter: function (event, player, name) {
                if (name === 'useCard') {
                    if (!event.card) return false;
                    if (get.tag({name: event.card.name}, 'damage')) return true;
                    if (event.card.name === 'wuxie') return true;
                    if (get.info(event.card).toself || get.type(event.card) !== 'trick') return false;
                    if (get.info(event.card).selectTarget === -1 || get.info(event.card).selectTarget > 1) return true;
                    return false;
                }
                if (event.player == event.source) return false;
                if (event.source.identity == 'nei') return true;
                return get.attitude(event.source, event.player) < 0;
            },
            content: function () {
                if (event.triggername === 'damage' || event.triggername === '清瑶Damage') {
                    if (get.attitude(trigger.source, trigger.player) < 0 || trigger.source.identity == 'nei') trigger.num > 5 ? trigger.source.攻击分数 += 15 : trigger.source.攻击分数 += 3 * trigger.num;
                } else if (trigger.card) {
                    if (get.tag({name: trigger.card.name}, 'damage'))
                        player.攻击分数 += 2
                    if (trigger.card.name === 'wuxie')
                        player.辅助分数 += 2;
                    if ((get.info(trigger.card).selectTarget === -1 || get.info(trigger.card).selectTarget > 1) && (!get.info(trigger.card).toself && get.type(trigger.card) === 'trick'))
                        player.辅助分数 += 1;
                }
            }
        }
        lib.skill['_qy-mvp-effect2'] = {
            trigger: {player: ['gainEnd', 'discardEnd']},
            direct: true,
            forced: true,
            firstDo: true,
            silent: true,
            popup: false,
            filter: function (event, player, name) {
                if (name === 'gainEnd') {
                    if (!event.source || event.source == player || !event.source.isIn()) return false;
                    //var evt=event.getl(event.source);
                    //if(!evt&&!evt.cards2&&evt.cards2.length===0) return false;
                    if (!event.cards || event.cards.length == 0) return false;
                    if (event.source.identity == 'nei') return true;
                    return event.player.getEnemies().contains(event.source);
                }
                if (name === 'discardEnd') {
                    if (!event.source || event.source == player || !event.source.isIn()) return false;
                    //var evt=event.getl(event.source);
                    //if(!evt&&!evt.cards2&&evt.cards2.length===0) return false;
                    if (!event.cards || event.cards.length == 0) return false;
                    if (event.source.identity == 'nei') return true;
                    return event.player.getEnemies().contains(event.source);
                }
            },
            content: function () {
                if (event.triggername == 'gainEnd') trigger.player.辅助分数 += 1 * trigger.cards.length;
                if (event.triggername == 'discardEnd') trigger.source.辅助分数 += 1 * trigger.cards.length;
            },
        }
        lib.skill['_qy-mvp-effect3'] = {
            trigger: {player: ['recoverEnd', '清瑶recoverEnd']},
            direct: true,
            forced: true,
            firstDo: true,
            silent: true,
            popup: false,
            filter: function (event, player) {
                if (!event.source || !event.source.isIn()) return false;
                if (event.source.identity == 'nei') return true;
                return event.player.getFriends().contains(event.source) || event.player == event.source;
            },
            content: function () {
                trigger.num > 5 ? trigger.source.治疗分数 += 10 : trigger.source.治疗分数 += 2 * trigger.num;
            },
        }
        lib.skill['_qy-mvp-effect4'] = {
            trigger: {source: 'dieBegin'},
            direct: true,
            forced: true,
            firstDo: true,
            silent: true,
            popup: false,
            filter: function (event, player) {
                return (event.source && event.source.isIn());
            },
            content: function () {
                if (trigger.player.getFriends().contains(trigger.source)) {
                    trigger.source.惩罚扣分 += 5;
                    if (trigger.source.identity == 'nei' && trigger.player.identity != 'zhu') {
                        trigger.source.惩罚扣分 -= 5;
                        trigger.source.攻击分数 += 3;
                    }
                }
                if (trigger.player.getEnemies().contains(trigger.source)) {
                    trigger.source.攻击分数 += 3;
                }
            },
        }
        lib.skill['_qy-mvp-effect5'] = {
            trigger: {
                player: "enterGame",
                global: ["roundStart", "gameStart"],
            },
            direct: true,
            forced: true,
            priority: Infinity,
            firstDo: true,
            silent: true,
            popup: false,
            content: function () {
                if (!_status._qy_mvp_effect5) {
                    try {
                        var changValue = false;
                        var input = ui.commandnode.link.querySelector("input");
                        var Opt = Object.getOwnPropertyDescriptor(input.__proto__, "value");
                        Object.defineProperty(input, 'value', {
                            get: function () {
                                var value = (Opt.get && Opt.get.call(this)) || '';
                                if (value === '') changValue = false;
                                else changValue = true
                                return value;
                            },
                            set: function (v) {
                                Opt.set.call(this, v);
                            },
                            configurable: true,
                        })
                        Array.from(ui.commandnode.parentElement.parentElement.querySelectorAll(".menubutton.round.highlight")).forEach(value => {
                            value.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function (event) {
                                if ('作' === value.innerText && this.classList.contains('glowing')) {
                                    game.me.惩罚扣分 += 3;
                                } else if ('执' === value.innerText && changValue) {
                                    game.me.惩罚扣分 += 3;
                                }
                            }, true);
                        })
                    } catch (e) {
                        console.error("作弊加载失败：", e)
                    }
                    _status._qy_mvp_effect5 = true;
                }
            },
        };
    }
    // 大将军开场动画
    lib.skill['_qy-mvp-general-opening'] = {
        trigger: {
            global: 'gameDrawAfter',
        },
        forecd: true,
        direct: true,
        forced: true,
        priority: -window.Infinity,
        lastDo: true,
        silent: true,
        popup: false,
        filter: function () {
            return game.getExtensionConfig('假装无敌纯', 'qingyao_general_opening') && arguments[1] === game.me;
        },
        content: function () {
            setTimeout(function () {
                JzwdPlayAnimDelay('qy_effect_youxikaishi', {scale: 0.5}, 2000);
            }, 300);
        },
    }

    if (!window.qy_decadeUI) window.qy_decadeUI = {
        element: {
            base: {
                removeSelf: function (milliseconds) {
                    var remove = this;
                    if (milliseconds) {
                        milliseconds = (typeof milliseconds == 'number') ? milliseconds : parseInt(milliseconds);
                        setTimeout(function () {
                            if (remove.parentNode) remove.parentNode.removeChild(remove);
                        }, milliseconds);
                        return;
                    }

                    if (remove.parentNode) remove.parentNode.removeChild(remove);
                    return;
                }
            },
            create: function (className, parentNode, tagName) {
                var tag = tagName == void 0 ? 'div' : tagName;
                var element = document.createElement(tag);
                element.view = {};
                for (var key in this.base) {
                    element[key] = this.base[key];
                }

                if (className)
                    element.className = className;

                if (parentNode)
                    parentNode.appendChild(element);

                return element;
            },
        },
        ResizeSensor: (function () {
            function ResizeSensor(element, callback, callFrame) {
                this.element = element;
                this.elementWidth = element.clientWidth || 1;
                this.elementHeight = element.clientHeight || 1;
                this.maximumWidth = 10000 * (this.elementWidth);
                this.maximumHeight = 10000 * (this.elementHeight);

                var expand = document.createElement('div');
                expand.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;z-index=-10000;overflow:hidden;visibility:hidden;transition:all 0s;';
                var shrink = expand.cloneNode(false);

                var expandChild = document.createElement('div');
                expandChild.style.cssText = 'transition: all 0s !important; animation: none !important;';
                var shrinkChild = expandChild.cloneNode(false);

                expandChild.style.width = this.maximumWidth + 'px';
                expandChild.style.height = this.maximumHeight + 'px';
                shrinkChild.style.width = '250%';
                shrinkChild.style.height = '250%';

                expand.appendChild(expandChild);
                shrink.appendChild(shrinkChild);
                element.appendChild(expand);
                element.appendChild(shrink);
                if (expand.offsetParent != element) {
                    element.style.position = 'relative';
                }

                expand.scrollTop = shrink.scrollTop = this.maximumHeight;
                expand.scrollLeft = shrink.scrollLeft = this.maximumWidth;

                var sensor = this;
                sensor.onscroll = function (e) {
                    sensor.newWidth = sensor.element.clientWidth || 1;
                    sensor.newHeight = sensor.element.clientHeight || 1;

                    if (sensor.newWidth != sensor.elementWidth || sensor.newHeight != sensor.elementHeight) {
                        sensor.elementWidth = sensor.newWidth;
                        sensor.elementHeight = sensor.newHeight;
                        if (callFrame == void 0 || callFrame) {
                            requestAnimationFrame(callback.bind(element));
                        } else {
                            callback.call(element, performance.now());
                        }
                    }

                    expand.scrollTop = shrink.scrollTop = sensor.maximumHeight;
                    expand.scrollLeft = shrink.scrollLeft = sensor.maximumWidth;
                };

                expand.addEventListener('scroll', sensor.onscroll);
                shrink.addEventListener('scroll', sensor.onscroll);
                sensor.expand = expand;
                sensor.shrink = shrink;
            }

            ResizeSensor.prototype.close = function () {
                this.expand.removeEventListener('scroll', this.onscroll);
                this.shrink.removeEventListener('scroll', this.onscroll);

                if (!this.element) {
                    this.element.removeChild(this.expand);
                    this.element.removeChild(this.shrink);
                }
            };

            return ResizeSensor;
        })(),
    }

    lib.reqXHR('animation.js')
        .then(xhr => {
            return Promise.resolve(eval(xhr.responseText)(lib, game, ui, get, ai, _status));
        }, error => {
            lib.JzwdLoadJSOnerror.push({file: 'animation.js', message: '文件不存在，请使用万能导入！'});
        })
        .then(function () {
            if (window.qy_decadeUI && window.qy_decadeUI.Animation) {
                Object.assign(window, {
                    JzwdAnimation: (function () {
                        var animation = new qy_decadeUI.Animation('extension/假装无敌纯/animation/', document.body, 'Jzwd-canvas-animation');
                        animation.check();
                        var fileInfoList = [
                            // 大将军开场特效
                            {name: 'qy_effect_youxikaishi'},
                            // MVP
                            {name: 'qy_quanchangzuijia'},
                            {name: 'qy_mvp'},
                            {
                                name: 'qy_sf_jiesuan_quanchangzuijia', complete: function () {
                                }
                            },
                            {name: 'qy_sf_jiesuan_wujiangchuxian2'},
                            {name: 'qy_avatarbox', fileType: 'json'},
                            // 连斩
                            {name: 'qy_SF_eff_lianzhan_lv2_zi'},
                            {name: 'qy_SF_eff_lianzhan_lv3_zi'},
                            {name: 'qy_SF_eff_lianzhan_lv4_zi'},
                            {name: 'qy_SF_eff_lianzhan_lv5_zi'},
                            {name: 'qy_SF_eff_lianzhan_lv6_zi'},
                            {name: 'qy_SF_eff_lianzhan_lv7_zi'},
                            // 击杀
                            {name: 'qy_yipo'},
                            {name: 'qy_shuanglian'},
                            {name: 'qy_sanlian'},
                            {name: 'qy_silian'},
                            {name: 'qy_wulian'},
                            {name: 'qy_liulian'},
                            {name: 'qy_qilian'},
                            // 伤害
                            {name: 'qy_diankuangtulu'},
                            {name: 'qy_wushuangwanjunqushou'},
                            // 治疗
                            {name: 'qy_miaoshouhuichun'},
                            {name: 'qy_yishugaochao'},
                            //大招
                            {name: 'qy_xiandingji'},
                            {name: 'qy_juexingji'},
                            {name: 'qy_shimingji'},
                            {name: 'qy_effect_xiandingji'},
                            {name: 'qy_effect_juexingji'},
                            {name: 'qy_effect_shimingji'},
                            // 铁索连环
                            {name: 'qy_tiesuolianhuan'},
                        ];
                        var fileList = fileInfoList.concat();
                        animation.spine2d.assetManager.loadBinary = function (path, success, error) {
                            if (success === void 0) {
                                success = null;
                            }
                            if (error === void 0) {
                                error = null;
                            }
                            path = this.pathPrefix + path;
                            this.toLoad++;
                            var fs = (window.require == void 0 ? void 0 : require('fs'));
                            if (fs) {
                                this.downloadBinary(path, data => {
                                    this.assets[path] = data;
                                    if (success) success(path, data);
                                    this.toLoad--;
                                    this.loaded++;
                                }, (state, response) => {
                                    this.errors[path] = "Couldn't load binary " + path + ": status " + status + ", " + response;
                                    if (error) error(path, "Couldn't load binary " + path + ": status " + status + ", " + response);
                                    this.toLoad--;
                                    this.loaded++;
                                });
                            } else {
                                var _this = this;
                                var onerror = () => {
                                    _this.errors[path] = "Couldn't load text " + path;
                                    if (error) error(path, "Couldn't load text " + path);
                                    console.log("Couldn't load text " + path);
                                    _this.toLoad--;
                                    _this.loaded++;
                                };
                                path = path.replace(this.pathPrefix, '')
                                window.resolveLocalFileSystemURL(lib.assetURL, entry => {
                                    entry.getFile(this.pathPrefix + path, {}, fileEntry => {
                                        fileEntry.file(file => {
                                            var reader = new FileReader();
                                            reader.onload = e => {
                                                var data = new Uint8Array(e.target.result);
                                                this.assets[path] = data;
                                                if (success) success(path, data);
                                                this.toLoad--;
                                                this.loaded++;
                                            };
                                            reader.onerror = onerror;
                                            reader.readAsArrayBuffer(file);
                                        }, onerror);
                                    }, onerror)
                                }, onerror);
                            }
                        };
                        animation.spine2d.assetManager.loadText = function (path, success, error) {
                            if (success === void 0) {
                                success = null;
                            }
                            if (error === void 0) {
                                error = null;
                            }
                            path = this.pathPrefix + path;
                            this.toLoad++;
                            var fs = (window.require == void 0 ? void 0 : require('fs'));
                            if (fs) {
                                this.downloadText(path, data => {
                                    this.assets[path] = data;
                                    if (success)
                                        success(path, data);
                                    this.toLoad--;
                                    this.loaded++;
                                }, (state, responseText) => {
                                    this.errors[path] = "Couldn't load text " + path + ": status " + status + ", " + responseText;
                                    if (error) error(path, "Couldn't load text " + path + ": status " + status + ", " + responseText);
                                    this.toLoad--;
                                    this.loaded++;
                                });
                            } else {
                                var _this = this;
                                var onerror = () => {
                                    _this.errors[path] = "Couldn't load text " + path;
                                    if (error) error(path, "Couldn't load text " + path);
                                    console.log("Couldn't load text " + path);
                                    _this.toLoad--;
                                    _this.loaded++;
                                };
                                path = path.replace(this.pathPrefix, '')
                                window.resolveLocalFileSystemURL(lib.assetURL, entry => {
                                    entry.getFile(this.pathPrefix + path, {}, fileEntry => {
                                        fileEntry.file(file => {
                                            var reader = new FileReader();
                                            reader.onload = e => {
                                                this.assets[path] = e.target.result;
                                                if (success) success(path, e.target.result);
                                                this.toLoad--;
                                                this.loaded++;
                                            };
                                            reader.onerror = onerror;
                                            reader.readAsText(file);
                                        }, onerror);
                                    }, onerror)
                                }, onerror);
                            }
                        };
                        animation.spine2d.assetManager.loadTexture = function (path, success, error) {
                            var _this = this;
                            if (success === void 0) {
                                success = null;
                            }
                            if (error === void 0) {
                                error = null;
                            }
                            path = this.pathPrefix + path;
                            this.toLoad++;
                            var img = new Image();
                            // img.crossOrigin = "anonymous";
                            img.onload = function (ev) {
                                var texture = _this.textureLoader(img);
                                _this.assets[path] = texture;
                                _this.toLoad--;
                                _this.loaded++;
                                if (success) success(path, img);
                            };
                            img.onerror = function (ev) {
                                _this.errors[path] = "Couldn't load image " + path;
                                _this.toLoad--;
                                _this.loaded++;
                                if (error) error(path, "Couldn't load image " + path);
                            };
                            img.src = lib.assetURL + path;
                        };
                        var read = function () {
                            if (fileList.length) {
                                var file = fileList.shift();
                                animation.loadSpine2d(file.name, file.fileType == void 0 ? 'skel' : file.fileType, function () {
                                    read();
                                    animation.prepSpine2d(this.name, file);
                                });
                            }
                        };
                        read();
                        read();
                        return animation;
                    })(),
                    JzwdPlayAnimDelay: function (name, time, position) {
                        if (typeof time === "number") game.delay(time / 1000);
                        else if (typeof time === 'object' && time !== null) position = time;
                        return JzwdAnimation.playSpine(name, position);
                    },
                })
            } else window.JzwdPlayAnimDelay = !!0;
        })

    lib.skill['_qy_tiesuo_suo'] = {
        trigger: {
            player: 'linkBefore',
        },
        filter: function (event, player) {
            var tiesuoConfig = game.getExtensionConfig('假装无敌纯', 'qingyao_tiesuo');
            player.classList.add('qyLink', tiesuoConfig);
            return event.player === player && tiesuoConfig;
        },
        forced: true,
        content: function () {
            player.classList.add('qyLinkHide');
            let config = ['qy_tiesuolianhuan', 'play5'];
            if (player.isLinked()) {
                let parent = _status.event.getParent('damage');
                if (parent.nature) {
                    if (parent.nature === 'fire') {
                        config[1] = 'play2';
                    } else if (parent.nature === 'thunder') {
                        config[1] = 'play3';
                    }
                } else {
                    config[1] = 'play5';
                }
            } else {
                config[1] = 'play1'
            }
            JzwdPlayAnimDelay(config, {
                parent: player,
                scale: 0.56,
                complete: function () {
                    player.classList.remove('qyLinkHide');
                },
            })
        },
    }

    "use strict";
    if (!window.zyile_dragZoom) {
        window.zyile_dragZoom = function zyile_dragZoom(element, body, Tran, XZ, isImp) {
            var disX = 0,
                disY = 0,
                area,
                contains = body || element.parentNode || document.body,
                isTouch = false, types = ['mousedown', 'mousemove', 'mouseup'], dragtouche,
                TranLeT = function (iT, iL, b) {
                    if (isNaN(iT) || isNaN(iL)) return;
                    if (!Tran) {
                        var translate = element._translate.slice(0);
                        if (b) translate = element._translate;
                        translate[0] += iL;
                        translate[1] += iT;
                        if (!XZ) {
                            if (translate[1] + element.offsetTop + element.offsetHeight > contains.offsetHeight) {
                                translate[1] = contains.offsetHeight - (element.offsetTop + element.offsetHeight);
                            } else if (translate[1] + element.offsetTop < 0) {
                                translate[1] = -element.offsetTop;
                            }
                            if (translate[0] + element.offsetLeft + element.offsetWidth > contains.offsetWidth) {
                                translate[0] = contains.offsetWidth - (element.offsetLeft + element.offsetWidth);
                            } else if (translate[0] + element.offsetLeft < 0) {
                                translate[0] = -element.offsetLeft;
                            }
                        }
                        if (!isImp)
                            element.style.transform = "translate3d(" + translate[0] + "px," + translate[1] + "px,0) scale(" + element._scale + ")";
                        else
                            element.style.setProperty('transform', "translate3d(" + translate[0] + "px," + translate[1] + "px,0) scale(" + element._scale + ")", 'important');
                    } else {
                        if (!XZ) {
                            if (iT + area[1] + element.offsetHeight > contains.offsetHeight) {
                                iT = contains.offsetHeight - (area[1] + element.offsetHeight);
                            } else if (iT + area[1] < 0) {
                                iT = -area[1];
                            }
                            if (iL + area[0] + element.offsetWidth > contains.offsetWidth) {
                                iL = contains.offsetWidth - (area[0] + element.offsetWidth);
                            } else if (iL + area[0] < 0) {
                                iL = -area[0];
                            }
                        }
                        if (!isImp)
                            element.css({
                                left: area[0] + iL + 'px',
                                top: area[1] + iT + 'px',
                            });
                        else
                            element.style.setProperty('left', area[0] + iL + 'px', 'important'), element.style.setProperty('top', area[1] + iT + 'px', 'important');
                    }
                };
            element._scale = 1,
                element.zooming = false,
                element.style.touchAction = "none";
            if (!element._translate) element._translate = [0, 0];
            if (isMobile) types = ['touchstart', "touchmove", 'touchend'];
            element['on' + types[0]] = event => {
                event.stopPropagation();
                if (element.classList.contains('dialog')) {
                    if (element.classList.contains('fixed') || element.classList.contains('popped')) return void 0;
                    if (event.target.finished) return void 0;
                    if (isMobile) if (event.touches.length <= 1) return undefined;
                } else if (event.target.finished || (element.content && element.content.contains(event.target))) return void 0;
                if (event.touches && event.touches[0]) event = event.touches[0];
                isTouch = true, area = [element.offsetLeft, element.offsetTop];
                disX = event.clientX / game.documentZoom;
                disY = event.clientY / game.documentZoom;
                document.addEventListener(types[1], windowmousemove, true);
                document.addEventListener(types[2], windowmouseup, true);
                element['on' + types[2]] = windowmouseup;
                element.dispatchEvent(new Event('zyile_move_Stat'));
            };
            var windowmousemove = function (event) {
                if (!isTouch) return false;
                event.preventDefault();
                event.stopPropagation();
                var event = event || window.event
                if (event.touches && event.touches[0]) event = event.touches[0], dragtouche = event;
                var iL = event.clientX / game.documentZoom - disX;
                var iT = event.clientY / game.documentZoom - disY;
                TranLeT(iT, iL);
                element.dispatchEvent(new Event('zyile_moving'));
                return false;
            };
            var windowmouseup = event => {
                if (!isTouch) return void 0;
                event.stopPropagation();
                event.preventDefault();
                document.removeEventListener(types[1], windowmousemove);
                document.removeEventListener(types[2], windowmouseup);
                element['on' + types[2]] = null;
                isTouch = false;
                if (dragtouche) event = dragtouche;
                var iL = event.clientX / game.documentZoom - disX;
                var iT = event.clientY / game.documentZoom - disY;
                TranLeT(iT, iL, true);
                dragtouche = null;
                var iiT = Math.abs(iL),
                    iiL = Math.abs(iT);
                if ((iiT < 10 && iiL < 10) || (isNaN(iiT) && isNaN(iiL))) element.dispatchEvent(new Event('endDang'));
                element.dispatchEvent(new Event('moveStop'));
            };
        };
    }
    // 强制开启开发者模式
    lib.cheat.i();

    // innerHTML 以html标签渲染
    // css css的属性
    // fixed 是否固定不可移动
    // endDang 点击按钮后没有移动（移动的距离与原位置较小）触发的事件
    // moveStop 每次移动所触发的事件
    // class 哪些class
    // memory 移动位置所保存的key
    // CustomName 自定义的ui[CustomName]
    // parent 父元素
    var CustomButtons = [
        // 界 按钮
        {
            innerHTML: '界',
            css: {
                left: '750px',
                top: '370px',
                transition: 'none',
                zIndex: 9,
            },
            fixed: false,
            endDang: function (event) {
                event.stopPropagation();
                lib.cheat.i();

                window.cheat = lib.cheat;
                window.game = game;
                window.ui = ui;
                window.get = get;
                window.ai = ai;
                window.lib = lib;
                window._status = _status;
                window.qyCachesMainWindow.show();
            },
            moveStop: function (event) {
                event.stopPropagation();
                var translate = this._translate.slice(0);
                lib.config.QyFrameButtonPosition = translate;
                game.saveConfig('QyFrameButtonPosition', translate);
            },
            memory: 'QyFrameButtonPosition',
            CustomName: 'QyFrameButton',
            class: '.menubutton.round.highlight.hidden',
        },
        //队友手牌
        {
            css: {
                left: '750px',
                top: '370px',
                transition: 'none',
                zIndex: 9,
            },
            endDang: function (event) {
                event.stopPropagation();
                if (!game.me || !_status.gameDrawed) return false;
                var container = ui.create.div('.popup-container', ui.window, function () {
                    dialog.close();
                    this.delete();
                });
                var dialog = ui.create.dialog('队友手牌');
                container.appendChild(dialog);
                var getFriends = game.me.getFriends();
                getFriends.map(player => {
                    var cards = player.getCards('h');
                    dialog.addText(`${get.translation(player.name1)}的手牌`, true);
                    dialog.addSmall([cards, 'vcard'])
                });
            },
            moveStop: function (event) {
                event.stopPropagation();
                var translate = this._translate.slice(0);
                lib.config.QyTeammateHandPosition = translate;
                game.saveConfig('QyTeammateHandPosition', translate);
            },
            memory: 'QyTeammateHandPosition',
            CustomName: 'QYTeammateHand',
            fixed: false,
            class: '.qyFriendsCards.hidden',
        },
        /*{
            innerHTML: '假',
            css: {
                left: '750px',
                top: '370px',
                transition: 'none',
                zIndex: 10,
            },
            fixed: false,
            Tran: true,
            endDang: function (event) {
                event.stopPropagation();
                let divs = this.divs;
                if(this.clicked) return ;
                this.clicked = true;
                setTimeout(()=>{
                    this.clicked = false;
                },400);
                let domRect = this.getBoundingClientRect();

                if (this.isOpen) {
                    this.style.transform = 'rotate(0)'
                    for (var i = 0; i < divs.length; i++) {
                        divs[i].style.transform = 'rotate(0) scale(1)'
                        divs[i].style.transition = '0.6s ' + (1 - i / divs.length)*.5 + 's'
                        divs[i].style.left = domRect.x + 'px'
                        divs[i].style.top = domRect.y + 'px';
                        divs[i].delete(1000);
                    }
                    return this.isOpen = !this.isOpen;
                }

                //计算菜单旋转出去的坐标
                const getLocation = function (r, deg) {
                    var x = Math.round(r * Math.sin(deg))
                    var y = Math.round(r * Math.cos(deg))
                    return {left: x, top: y}
                }

                let buttons = window.qyCachesMainWindow.buttons;
                if (buttons.length > 0) {
                    buttons.forEach(options => {
                        var value = Object.assign({
                            innerHTML: '',
                            css: {
                                left: domRect.x + 'px',
                                top: domRect.y + 'px',
                            },
                            parent: ui.window,
                            click: function (event) {
                                event.stopPropagation();
                            },
                            class: '',
                        }, options);
                        let divElement = ui.create.div(value.class, value.css, value.innerHTML, value.parent, value.click);
                        divs.push(divElement);
                        typeof value.after === 'function' && requestAnimationFrame(value.after.bind(divElement));
                    });
                    this.style.transform = 'rotate(-720deg) scale(1)'
                    for (let i = 0; i < divs.length; i++) {
                        divs[i].style.transition = '0.6s ease ' + (i / divs.length)*.5 + 's'
                        ui.refresh(divs[i]);
                        divs[i].style.transform = 'rotate(-720deg) scale(1)'
                        divs[i].style.left = domRect.x + getLocation(60, (4 + i) * 60 / 180 * Math.PI).left + 'px'
                        divs[i].style.top = domRect.y + getLocation(60, (4 + i) * 60 / 180 * Math.PI).top + 'px'
                    }
                }
                this.isOpen = !this.isOpen;
            },
            moveStop: function (event) {
                event.stopPropagation();
                var translate = this._translate.slice(0);
                lib.config.QyFrameButtonPosition = translate;
                game.saveConfig('QyFrameButtonPosition', translate);
            },
            memory: 'QyHomeElement',
            CustomName: 'QyHomeElementButton',
            class: '.menubutton.round.highlight.hidden',
            after: function () {
                this.isOpen = false;
                this.divs = [];
            },
        },*/
    ];

    if (config.qingyao_cundang === 'button') {
        CustomButtons.push({
            innerHTML: '复',
            css: {
                left: '750px',
                top: '370px',
                transition: 'none',
                zIndex: 9,
            },
            endDang: function (event) {
                event.stopPropagation();
                if (lib.skill._ymfuyuan.filter(_status.event, game.me)) {
                    let next = game.createEvent("ymfuyuan", false);
                    next.player = game.me;
                    next.setContent(lib.skill._ymfuyuan.content);
                    _status.paused = false;
                    game.loop();
                }
            },
            moveStop: function (event) {
                event.stopPropagation();
                var translate = this._translate.slice(0);
                lib.config.qyCunDangPosition = translate;
                game.saveConfig('qyCunDangPosition', translate);
            },
            memory: 'qyCunDangPosition',
            CustomName: 'qyCunDang',
            fixed: false,
            class: '.menubutton.round.highlight',
        })
    }

    CustomButtons.forEach(options => {
        var value = Object.assign({
            innerHTML: '',
            css: {},
            parent: document.body,
            fixed: true,
            endDang: function (event) {
            },
            moveStop: function (event) {
            },
            Tran: false,
            CustomName: 'QY' + Math.random().toString(16).slice(2),
            class: '',
        }, options);
        ui[value.CustomName] = ui.create.div(value.class, value.css, value.innerHTML, value.parent);
        var div = ui[value.CustomName];
        if (value.memory) {
            //移动到指定位置
            var translate = lib.config[value.memory] || [0, 0];
            div._translate = translate;
            div.style.transform = "translate(" + translate[0] + "px," + translate[1] + "px)";
        }
        if (!value.fixed) {
            //触发打开打开界面
            div.addEventListener('endDang', value.endDang, true);

            //保存按钮位置
            div.addEventListener('moveStop', value.moveStop, true);

            window.zyile_dragZoom(div, value.parent, value.Tran);
        }
        if (typeof value.after === 'function') {
            requestAnimationFrame(value.after.bind(div));
        }
    });
    lib.skill['_qy-mvp-flower-egg-shoe'] = {
        trigger: {
            global: 'gameStart',
        },
        direct: true,
        forced: true,
        priority: window.Infinity,
        lastDo: true,
        silent: true,
        popup: false,
        filter: function (a, b) {
            return b === game.me && game.getExtensionConfig('假装无敌纯', 'qingyao_mvp_flower_egg_shoe');
        },
        content: function () {
            let _swipeorigin = {
                clientX: 0,
                clientY: 0,
                time: get.utc(),
            };
            let types = isMobile ? ['touchstart', "touchmove", 'touchend'] : ['mousedown', 'mousemove', 'mouseup'],
                createButtonContaner = false;
            document.addEventListener(types[2], () => {
                document.querySelectorAll('.qyopennumber').forEach(current => current.remove());
            });
            let createButton = function (player) {
                let container = ui.create.div('.popup-container', {
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    'z-index': 999,
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-content': 'center',
                    'justify-items': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                }, player);
                container.addEventListener('touchstart', function (e) {
                    // 这都是什么阴间判断啊！！！
                    _status.click = true;
                    _status.longpressed = true;
                    _status.clickedplayer = true;
                    _status.dragged = true;
                }, true);

                const addHandler = function (element) {
                    let interval = null;
                    let startTime = void 0;
                    let num = 0;
                    let showNumber = null;
                    let endEval = false;

                    const handler = function handler() {
                        container.delete();
                        for (let i = 0; i < num; i++) {
                            setTimeout(() => {
                                game.me.throwEmotion(player, element.link)
                            }, 100 * i);
                        }
                        let link = null;
                        if (element.link === 'egg')
                            link = 'shoe';
                        else if (element.link === 'flower')
                            link = 'wine'

                        if (num > 5 && link) {
                            setTimeout(function () {
                                game.me.throwEmotion(player, link);
                            }, ++num * 100)
                        }


                        if (Math.random() < 0.5) {
                            const getRandom = function (min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            }
                            let random = getRandom(1, 10);
                            num += 10;
                            for (let i = 0; i < random; i++) {
                                setTimeout(function () {
                                    player.throwEmotion(game.me, element.link);
                                }, ++num * 100)
                            }
                        }
                    };
                    let clear = function clear() {
                        if (Date.now() - startTime < 200) num = 1
                        handler();
                        clearInterval(interval);
                        document.removeEventListener(types[2], end);
                        player.createButtonContaner = false;
                        interval = null;
                        showNumber.delete();
                        setTimeout(() => {
                            _status.click = false;
                            _status.longpressed = false;
                            _status.clickedplayer = false
                            _status.dragged = false;
                        }, 500);
                    };
                    let end = function (e) {
                        if (endEval) return false;
                        endEval = true;
                        e.stopPropagation();
                        clear();
                    };
                    element.addEventListener(types[0], function () {
                        _status.click = true;
                        _status.clickedplayer = true;
                        _status.dragged = true;
                        clearInterval(interval);
                        startTime = Date.now();
                        showNumber = ui.create.div('.popup-container.qyopennumber', document.body, 'X\t1', {
                            'display': 'flex',
                            'justify-content': 'center',
                            'align-items': 'center',
                            'font-size': '83px',
                            'font-family': 'huangcao',
                            'color': 'yellow',
                            'text-shadow': 'black 0 0 1px, black 0 0 2px, black 0 0 5px, black 0 0 10px, black 0 0 10px',
                            'pointer-events': 'none',
                        });
                        interval = setInterval(() => {
                            showNumber.innerHTML = ('X\t' + (++num))
                        }, 200);
                        document.addEventListener(types[2], end);
                    }, true);
                    element.addEventListener(types[2], end, true);

                }

                let links = {'flower': '鲜花', 'egg': '鸡蛋', 'shoe': '拖鞋', 'wine': '酒杯'};
                for (let link in links) {
                    let div = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin', links[link], container);
                    div.link = link;
                    addHandler(div);
                }

                player.createButtonContaner = true;
            }
            var start = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (this.createButtonContaner) return false;
                this.start = true;
                // 如果是手机的话，那么获取第一个手指按上去的事件
                if (e.touches && e.touches[0]) e = e.touches[0];
                _swipeorigin = {
                    clientX: e.clientX,
                    clientY: e.clientY,
                    time: get.utc(),
                    event: e,
                }
                document.addEventListener(types[2], end.bind(this), true);
            }, move = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (e.touches && e.touches[0]) e = e.touches[0];
                _swipeorigin.event = e;
            }, end = function (e) {
                // e.stopPropagation();
                // e.preventDefault();
                if (!this.start) return this.start = false;
                this.start = false;
                document.removeEventListener(types[2], end.bind(this), true);
                let dx = _swipeorigin.event.clientX / game.documentZoom - _swipeorigin.clientX / game.documentZoom;
                let dy = _swipeorigin.event.clientY / game.documentZoom - _swipeorigin.clientY / game.documentZoom;
                if (get.utc() - _swipeorigin.time < 1000) {
                    if (Math.abs(dx) < 100 && (dy < -100 || dy > 100)) {
                        createButton(this);
                    }
                }
            };
            game.players.forEach(current => {
                current.addEventListener(types[0], start);
                current.addEventListener(types[1], move);
                current.addEventListener(types[2], end);
            });
        },
    }

    "use strict";
    lib.arenaReady.unshift(item => {
        lib.cheat.i();
        if (config.frameButton) {
            ui.QyFrameButton.show();
            // ui.QyHomeElementButton.show();
        }
        if (config.qingyao_shoupaikeshi) {
            ui.QYTeammateHand.show();
        }

        const limitSkillAnimation = function (player, type, font) {
            game.pause2();
            var options = {
                qy_juexingji: {
                    x: isMobile ? 480 : 420,
                    y: isMobile ? 250 : 300,
                    scale: 0.9,
                },
                qy_xiandingji: {
                    x: isMobile ? 500 : 440,
                    y: isMobile ? 240 : 310,
                    scale: 0.9,
                },
                qy_shimingji: {
                    x: isMobile ? 500 : 440,
                    y: isMobile ? 240 : 310,
                    scale: 0.9,
                },
            }
            var container, isComplete = false;
            let config = options[type],
                backConfig = {
                    complete: function () {
                        if (isComplete) return;
                        JzwdAnimation.stopSpine2dAll();
                        container.delete();
                        game.resume2();
                    },
                    x: isMobile ? 558 : 478,
                    y: isMobile ? 218 : 288,
//                    scale: 0.99,
//修改方法:x是左右位置，y是上下位置，值越大位置越向右/上。
//手机用户修改冒号前的数值，非手机用户修改冒号后面的值。推荐用MT管理器
//每次修改保存并退出后打开游戏检查边框位置。
//scale是缩放大小，默认为1。
//3919至3933行为边框后方圆形发光背景图的位置。
//qy_juexingji是觉醒技，qy_xiandingji限定技，qy_shimingji使命技。
//修改后可备份此文件避免卸载重装后丢失。
//  两道斜杠//之后的文字代码会被隐藏并失效。
                };
            const {
                extension_假装无敌纯_qingyao_limited_x,
                extension_假装无敌纯_qingyao_limited_y,
                extension_假装无敌纯_qingyao_limited_back_x,
                extension_假装无敌纯_qingyao_limited_back_y,
                extension_假装无敌纯_qingyao_awaken_x,
                extension_假装无敌纯_qingyao_awaken_y,
                extension_假装无敌纯_qingyao_awaken_back_x,
                extension_假装无敌纯_qingyao_awaken_back_y,
                extension_假装无敌纯_qingyao_limited_enable,
                extension_假装无敌纯_qingyao_awaken_enable
            } = lib.config;
            let x = 0, y = 0;
            if (['qy_juexingji', 'qy_shimingji'].contains(type)) {
                if (extension_假装无敌纯_qingyao_awaken_enable) {
                    if (isFinite(extension_假装无敌纯_qingyao_awaken_x)) x = extension_假装无敌纯_qingyao_awaken_x;
                    if (isFinite(extension_假装无敌纯_qingyao_awaken_y)) y = extension_假装无敌纯_qingyao_awaken_y;
                    if (isFinite(extension_假装无敌纯_qingyao_awaken_back_x)) backConfig.x += extension_假装无敌纯_qingyao_awaken_back_x;
                    if (isFinite(extension_假装无敌纯_qingyao_awaken_back_y) && extension_假装无敌纯_qingyao_awaken_back_y != 0) backConfig.y = extension_假装无敌纯_qingyao_awaken_back_y;
                }
            } else {
                if (extension_假装无敌纯_qingyao_limited_enable) {
                    if (isFinite(extension_假装无敌纯_qingyao_limited_x)) x = extension_假装无敌纯_qingyao_limited_x;
                    if (isFinite(extension_假装无敌纯_qingyao_limited_y)) y = extension_假装无敌纯_qingyao_limited_y;
                    if (isFinite(extension_假装无敌纯_qingyao_limited_back_x)) backConfig.x += extension_假装无敌纯_qingyao_limited_back_x;
                    if (isFinite(extension_假装无敌纯_qingyao_limited_back_y) && extension_假装无敌纯_qingyao_limited_back_y != 0) backConfig.y = extension_假装无敌纯_qingyao_limited_back_y;
                }
            }

            config.x += x;
            config.y += y;
            JzwdPlayAnimDelay(type, config);

            JzwdPlayAnimDelay('qy_effect_'+type.replace('qy_', ''), backConfig);
            window.setTimeout(() => {
                container = ui.create.div(document.body, '.popup-container', {zIndex: 103}, () => {
                    container.delete();
                    isComplete = true;
                    JzwdAnimation.stopSpine2dAll();
                    game.resume2();
                });
                var getUiZoom = (function () {
                    var zoom = lib.config.ui_zoom;
                    switch (zoom) {
                        case 'esmall':
                            zoom = 0.8;
                            break;
                        case 'vsmall':
                            zoom = 0.9;
                            break;
                        case 'small':
                            zoom = 0.93;
                            break;
                        case 'big':
                            zoom = 1.05;
                            break;
                        case 'vbig':
                            zoom = 1.1;
                            break;
                        case 'ebig':
                            zoom = 1.2;
                            break;
                        default:
                            zoom = 1;
                    }
                    return zoom;
                }());
                if (getUiZoom) container.style.zoom = 2 - getUiZoom;
                const limitAvatar = ui.create.div(container, '.qy-limit-avatar');
                if (getUiZoom === 0.8 && isMobile) limitAvatar.css({
                    left: '390px',
                    top: '125px',
                    height: '275px'
                })
                limitAvatar.setBackground(player && player.name || 'qy_qyqingyaoxuying', 'character');
                if (game.getExtensionConfig('假装无敌纯', 'qingyao_outcrop')) {
                    limitAvatar.css({
                        height: isMobile ? '290px' : '46%',
                        top: isMobile ? '100px' : '25%;',
                    });
                    if (getUiZoom === 0.8 && isMobile) limitAvatar.css({
                        width: '176px',
                        left: '388px',
                        top: '105px',
                        height: '296px'
                    })
                }
                ui.create.div(container, '.qy-juexingji-xiandingji-font', {
                    'background-image': type === 'qy_juexingji' ? 'linear-gradient(180deg, #ebd2fb 16%, #8d64af 60%)' : type === 'qy_xiandingji' ? 'linear-gradient(180deg, #fcfc70 16%, #c68b2c 60%)' : 'linear-gradient(rgb(253, 217, 116) 16%, rgb(198, 65, 44) 71%)',
                }, font);
            }, 150);
        }
        lib.limitSkillAnimation = limitSkillAnimation;

        if (lib.config.extension_假装无敌纯_qingyao_shousha_limit) {
            setTimeout(() => {
                Object.keys(lib.skill).filter(value => {
                    const skill = lib.skill[value]
                    if (!skill || !lib.translate[value]
                        || !lib.translate[value + '_info']) return false;
                    return !!(skill.limited || skill.juexingji || skill.dutySkill);
                }).forEach(item => {
                    var lockSkillAnimation = function (value){
                        lib.skill[value].skillAnimation = false;
                        Object.defineProperty(lib.animate.skill, value,  {
                            get: function () {
                                return function () {
                                    var type = "qy_shimingji";
                                    if (lib.skill[value].hasOwnProperty("limited")) {
                                        type = "qy_xiandingji";
                                    }else if(lib.skill[value].hasOwnProperty("juexingji")){
                                        type = "qy_juexingji";
                                    }
                                    limitSkillAnimation(this, type, lib.translate[value], 2000)
                                }
                            },
                            set: function () {
                            },
                            enumerable: true,
                            configurable: false,
                        });
                    }
                    if(lib.skill[item].dutySkill){
                        if(lib.skill[item].group){
                            [item].concat(lib.skill[item].group)
                                .filter(value=> lib.skill[value].skillAnimation === true)
                                .forEach(value => {
                                lib.skill[value].shimingji = true;
                                lockSkillAnimation(value)
                            })
                        }
                    }else{
                        lockSkillAnimation(item)
                    }
                })
            }, 1500)
        }


/*
        setTimeout(function uiCommandnode() {
            if (!ui.commandnode) return setTimeout(uiCommandnode, 1e3)
            let linkElement = ui.commandnode.parentElement.firstElementChild.link
            let gameUpdateButton = Array.from(linkElement.querySelectorAll('button')).filter(item => item.textContent === '检查游戏更新')[0]
            let button = ui.create.div('.qy-button', '渡劫更新')
            let rebutton = ui.create.div('.qy-button', '渡劫更新素材')
            let buttonResources = Array.from(linkElement.querySelectorAll('button')).filter(item => item.textContent === '检查素材更新')[0]
            gameUpdateButton.parentElement.replaceChild(button, gameUpdateButton)
            buttonResources.parentElement.replaceChild(rebutton, buttonResources)
            button.link = 'checkUpdateForBody'
            rebutton.link = 'checkUpdateForResources'
            rebutton.onclick = button.onclick = function(event) {
                event.stopPropagation()
                window.qyCachesMainWindow.show()
                // 渡劫更新
                window.qyCachesMainWindow.postMessage({
                    type: 'router',
                    data: {
                        path: '/noname/downloadFile'
                    }
                })
                setTimeout(() => {
                    window.qyCachesMainWindow.postMessage({
                        type: 'methods',
                        data: this.link
                    })
                }, 800)

            }
        }, 1000)
*/
        
    });
    "use strict";
    lib.qyResizeOpen = function (option) {
        return new Promise(resolve => {
            // 初始化
            let options = {
                value: 0,
                min: -Infinity,
                max: Infinity,
                speed: 1,
                events: {
                    keydown: [function (event) {
                        event.stopPropagation();
                    }],
                    input: [function (event) {
                        if (this.value > options.max) {
                            this.value = options.max;
                        }
                        if (this.value < options.min) {
                            this.value = options.min;
                        }

                        if (this.value >= options.max) {
                            this.right.classList.add('is-disabled');
                        } else {
                            this.right.classList.remove('is-disabled');
                        }

                        if (this.value <= options.min) {
                            this.left.classList.add('is-disabled');
                        } else {
                            this.left.classList.remove('is-disabled');
                        }
                    }],
                },
            };
            if (typeof option === 'object' && option != null) {
                if (option.events) {
                    for (let i in option.events) {
                        if (options.events[i]) options.events[i] = options.events[i].concat(option.events[i]);
                        else options.events[i] = [].concat(option.events[i]);
                    }
                }
                delete option.events;
                if (option.max && isNaN(Number(option.max))) delete option.max;
                if (option.min && isNaN(Number(option.min))) delete option.min;
                Object.assign(options, option);
            }
            let container = ui.create.div(document.body, {
                padding: '20px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'none',
            }, '.qy-input-number-container');
            ui.create.div('', {
                cssText: `left: 50%;
                        position: relative;
                        line-height: 20px;
                        color: #409eff;
                        transform: translateX(-50%);
                        `
            }, options.label, container);
            let qyInputNumber = ui.create.div(container, '.qy-input-number');
            qyInputNumber.ondragstart = event => event.preventDefault();
            let qySpanLeft = ui.create.node('span.qy-input-number__decrease', '-', qyInputNumber);
            let qySpanRight = ui.create.node('span.qy-input-number__increase', '+', qyInputNumber);
            qySpanLeft.addEventListener('click', function (event) {
                event.stopPropagation();
                if (this.classList.contains('is-disabled')) return;
                input.value = Number(input.value).sub(Number(options.speed));
                options.events.input.forEach(val => val.call(input));
            });
            qySpanRight.addEventListener('click', function (event) {
                event.stopPropagation();
                if (this.classList.contains('is-disabled')) return;
                input.value = Number(input.value).add(Number(options.speed));
                options.events.input.forEach(val => val.call(input));
            });
            let qyInput = ui.create.div('.qy-input', qyInputNumber);
            let input = ui.create.node('input', qyInput)
            input.type = 'number';
            input.max = options.max;
            input.min = options.min;
            input.value = options.value;
            input.left = qySpanLeft;
            input.right = qySpanRight;
            // 绑定事件
            for (let i in options.events) {
                if (typeof options.events[i] == 'function') input.addEventListener(i, options.events[i].bind(input), true);
                else options.events[i].forEach(val => input.addEventListener(i, val.bind(input), true));
            }
            ui.create.div(container, '.qy-button.qy-button--primary', {
                position: 'relative',
                margin: '8px'
            }, '<span>确认</span>').addEventListener('click', event => {
                container.remove();
                setTimeout(() => resolve(input.value), 300);
            })
            ui.create.div(container, '.qy-button', {
                position: 'relative',
                margin: '8px'
            }, '<span>取消</span>').addEventListener('click', event => {
                container.remove();
            });
            container.style.zIndex = 999;
            setTimeout(() => {
                [].forEach.call(container.querySelectorAll("*"), val => val.finished = true);
                window.zyile_dragZoom(container, document.body, true, true, true);
            }, 300);
        })
    };

    if (game.getExtensionConfig('假装无敌纯', 'resizeLeftFontSize') !== void 0) {
        window.resizeLeftFontSize = parent.document.createElement('style');
        window.document.head.appendChild(parent.resizeLeftFontSize);
        window.resizeLeftFontSize.innerHTML = `
                .qy-mvp-avatarborder::before{
                    font-size: ${game.getExtensionConfig('假装无敌纯', 'resizeLeftFontSize')}vw !important;
                }`;
    }
    if (game.getExtensionConfig('假装无敌纯', 'resizeLeftFontPosition') !== void 0) {
        window.resizeLeftFontPosition = parent.document.createElement('style');
        window.document.head.appendChild(parent.resizeLeftFontPosition);
        window.resizeLeftFontPosition.innerHTML = `
                  .qy-mvp-avatarborder::before{
                      left: ${game.getExtensionConfig('假装无敌纯', 'resizeLeftFontPosition')}% !important;
                  }`;
    }
    if (game.getExtensionConfig('假装无敌纯', 'resizeRightFontPosition') !== void 0) {
        window.resizeRightFontPosition = parent.document.createElement('style');
        window.document.head.appendChild(parent.resizeRightFontPosition);
        window.resizeRightFontPosition.innerHTML = `
                .qy-mvp-scoreInfo{
                    left: ${game.getExtensionConfig('假装无敌纯', 'resizeRightFontPosition')}vw;
                }`;
    }
    if (game.getExtensionConfig('假装无敌纯', 'resizePlayerNameFont') !== void 0) {
        window.resizePlayerNameFont = parent.document.createElement('style');
        window.document.head.appendChild(parent.resizePlayerNameFont);
        window.resizePlayerNameFont.innerHTML = `
                .qy-player-info .qy-mvp-name-info{
                      font-size: ${game.getExtensionConfig('假装无敌纯', 'resizePlayerNameFont')}vw !important;
                }`;
    }
    if (game.getExtensionConfig('假装无敌纯', 'resizeRightFont') !== void 0) {
        window.resizeRightFont = document.createElement('style');
        document.head.appendChild(window.resizeRightFont);
        window.resizeRightFont.innerHTML = `
                .qy-mvp-scoreInfo *{
                    font-size: ${game.getExtensionConfig('假装无敌纯', 'resizeRightFont')}vw;
                }
                .qy-player-info * {
                    font-size: ${game.getExtensionConfig('假装无敌纯', 'resizeRightFont')}vw;
                }`;
    }
    if (game.getExtensionConfig('假装无敌纯', 'rePositionXing') !== void 0) {
        window.rePositionXing = document.createElement('style');
        document.head.appendChild(window.rePositionXing);
        window.rePositionXing.innerHTML = `
                .qy-mvp-xing {
                    left: ${game.getExtensionConfig('假装无敌纯', 'rePositionXing')}%;
                }`;
    }

    if (game.getExtensionConfig('假装无敌纯', 'qingyaoDynamicMvpEnable')) {
        if (game.getExtensionConfig('假装无敌纯', 'resizeDynamicRightFont') !== void 0) {
            window.resizeDynamicRightFont = document.createElement('style');
            document.head.appendChild(window.resizeDynamicRightFont);
            window.resizeDynamicRightFont.innerHTML = `
                .qy-mvp-technology *{
                    font-size: ${game.getExtensionConfig('假装无敌纯', 'resizeDynamicRightFont')}vw;
                }`;
        }
        if (game.getExtensionConfig('假装无敌纯', 'resizeDynamicLeftXing') !== void 0) {
            if (!parent.resizeDynamicLeftXing) {
                parent.resizeDynamicLeftXing = parent.document.createElement('style');
                parent.document.head.appendChild(parent.resizeDynamicLeftXing);
            }
            parent.resizeDynamicLeftXing.innerHTML = `
            .qy-mvp-border-xing{
                left: ${game.getExtensionConfig('假装无敌纯', 'resizeDynamicLeftXing')}px;
            }`;
        }
    }

    if (config.qingyao_cundang && config.qingyao_cundang !== 'false') {
        lib.skill._ymlunhun = {
            trigger: {
                global: 'roundStart'
            },
            slient: true,
            popup: false,
            firstDo: true,
            forced: true,
            direct: true,
            init: function (player) {
                window.qingyao_history = [];
            },
            filter: function (event, player) {
                return player === game.me;
            },
            content: function () {
                // 手牌，装备牌，判定牌，遍历场上所有人的属性，
                if (!window.qingyao_history) window.qingyao_history = [];

                let history = [];

                // 记录_status的数组
                history.statusKeys = {}
                Object.keys(_status)
                    .filter(item => Array.isArray(_status[item]))
                    .forEach(key => {
                        history.statusKeys[key] = lib.qyDeepClone(_status[key]);
                    });
                // 遍历全场人的属性
                const players = game.players.concat(game.dead);
                for (let i of players) {
                    let deepClone = lib.qyDeepClone(i, window.undefined, true);
                    deepClone.h = i.getCards('h');
                    deepClone.s = i.getCards('s');
                    deepClone.e = i.getCards('e');/*get.cardsInfo(i.get('e').map(item=>{return {name: item[2],number: item[1],suit: item[0],nature: item[3],}}));*/
                    deepClone.j = i.getCards('j');
                    deepClone.x = i.getCards('x');
                    deepClone.gaintag = {};
                    for (var j = 0; j < i.getCards('x').length; j++) {
                        deepClone.gaintag[j] = i.getCards('x')[j].gaintag;
                    }
                    // 记录卡牌storage
                    deepClone.equipCardStorage = {};
                    // 记录卡牌的值为Array属性
                    deepClone.equipCardArray = {};
                    for (let equipCard of deepClone.e) {
                        // 记录下卡牌的storage
                        deepClone.equipCardStorage[equipCard.name] = lib.qyDeepClone(equipCard.storage);
                        deepClone.equipCardArray[equipCard.name] = {};
                        Object.keys(equipCard)
                            .filter(item => Array.isArray(equipCard[item]))
                            .forEach(item => {
                                deepClone.equipCardArray[equipCard.name][item] = equipCard[item].slice(0);
                            })
                    }
                    /**
                     for(var j=0;j<i.getCards('e').length;j++){
                        for(var k in i.getCards('e')[j]){
                            if(Array.isArray(i.getCards('e')[j][k])){
                                if(!deepClone[i.getCards('e')[j].name]) deepClone[i.getCards('e')[j].name]={};
                                deepClone[i.getCards('e')[j].name][k]=i.getCards('e')[j][k];
                            }
                        }
                    }
                     */
                    deepClone.keys = Object.keys(i);
                    deepClone.qyState = i.getState();
                    history.push(deepClone);
                }
                setTimeout(function () {
                    history.arena = ui.arena.cloneNode(true);
                    history.arena.querySelectorAll('audio').forEach(item => item.remove());
                    history.arena.css({
                        zoom: 0.6,
                        position: 'relative',
                        width: '85%',
                        height: '500px',
                        left: 0,
                        backgroundSize: '100% 100%',
                        backgroundImage: `url(${lib.assetURL}extension/假装无敌纯/images/back.jpeg)`,
                    })
                }, 200);

                history.hookmap = lib.qyDeepClone(lib.hookmap);
                history.hook = lib.qyDeepClone(lib.hook);
                // 牌堆的牌
                history.cardPile = Array.from(ui.cardPile.childNodes).slice(0);
                // 弃牌堆的牌
                history.discardPile = Array.from(ui.discardPile.childNodes).slice(0);
                // 当前的轮数
                history.roundNumber = game.roundNumber;
                history.phaseNumber = game.phaseNumber;
                // 当前轮数的角色是谁，到时候好恢复
                history.roundStart = _status.roundStart;
                // 存储游戏的State
                if (game.getState) history.qyGetState = lib.qyDeepClone(game.getState());
                window.qingyao_history.push(history);
            },
        };
        lib.skill._ymfuyuan = {
            enable: "phaseUse",
            filter: function (event, player) {
                return window.qingyao_history && window.qingyao_history.length > 0 && game.me === player;
            },
            popup: false,
            log: false,
            content: function () {
                'step 0'
                const dialog = ui.create.dialog('forcebutton');
                dialog.addText('请选择要复原的轮数');
                event.dialog = dialog;
                dialog.css({
                    all: 'inherit',
                });

                dialog.classList.add('noupdate', 'fixed', 'qy_card_selected', 'qy_round_fuyuan');
                dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                    _status.clicked2 = true;
                });

                event.selected = null;
                let _event = event;
                event.reuslt = {
                    bool: false,
                };
                event.ok = ui.create.control('确定', function () {
                    _event.reuslt = {
                        bool: true,
                        links: _event.selected.link
                    }
                    dialog.close();
                    game.resume();
                }).hide().css({zIndex: 500});
                event.ok.parentElement.css({
                    zIndex: 500,
                })
                event.cancel = ui.create.control('取消复原', game.resume).css({zIndex: 500});
                let list = window.qingyao_history;
                let div = ui.create.div({
                    all: 'inherit',
                }, '', '点击轮数显示预览图');

                for (var i = 0; i < list.length; i++) {
                    let arena = list[i].arena;
                    let node = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin', `第${i + 1}轮`);
                    if (get.is.phoneLayout()) {
                        node.style.fontSize = '30px';
                    }
                    node.addEventListener(window.isMobile ? 'touchend' : 'click', function () {
                        if (_event.selected === this) {
                            _event.selected.classList.remove('thundertext')
                            _event.selected = undefined;
                            _event.ok.hide();
                            div.innerHTML = '点击轮数显示预览图';
                            return;
                        }
                        if (_event.selected) _event.selected.classList.remove('thundertext');
                        _event.selected = this;
                        this.classList.add('thundertext');
                        //dialog.replaceChild(this.arena, div);
                        div.innerHTML = '';
                        div.appendChild(this.link.arena);
                        _event.ok.show();
                    });
                    dialog.add(node);
                    node.link = list[i];
                    list[i].i = i;
                }
                dialog.add(ui.create.div('.placeholder'));
                dialog.add(div);
                document.body.appendChild(dialog);

                game.pause();
                game.countChoose();
                'step 1'
                event.ok.parentElement.style.zIndex = undefined;
                if (event.ok) event.ok.close();
                if (event.dialog) event.dialog.close();
                if (event.cancel) event.cancel.close();
                if (event.reuslt.bool) {
                    var historyLinks = event.reuslt.links;

                    ui.cardPile.innerHTML = '';
                    ui.discardPile.innerHTML = '';
                    historyLinks.cardPile.forEach(item => ui.cardPile.appendChild(item));
                    historyLinks.discardPile.forEach(item => ui.discardPile.appendChild(item));

                    function restStatus(current, history) {
                        // 循环可遍历得属性
                        for (let i of Object.keys(current)) {
                            // 如果当时没有这个属性，就给他删掉
                            if (!history.keys.contains(i)) {
                                delete current[i];
                                continue;
                            }
                            // 如果有这个属性，那就加上去
                            if (history[i])
                                current[i] = history[i];
                        }
                        // delete history.keys;

                        if (history.qyState['unseen']) current.classList.add('unseen');
                        else current.classList.remove('unseen');
                        if (history.qyState['unseen2']) current.classList.add('unseen2');
                        else current.classList.remove('unseen2');
                        ['hp', 'maxHp', 'nickname', 'sex', 'group', 'name', 'name1', 'name2',
                            'hujia', 'side', 'identityShown', 'idenity'].forEach(item => current[item] = history.qyState[item]);
                        current.storage._disableJudge = history.qyState['disableJudge'];
                        current.storage.disableEquip = history.qyState['disableEquip'];
                        current.dataset.position = history.qyState['position'];
                        current.node.identity.innerHTML = history.qyState['identityNode'][0];
                        current.node.identity.dataset.color = history.qyState['identityNode'][1];
                        if (history.qyState['mode']) {
                            if (history.qyState['mode'].unseen == true) current.classList.add('unseen');
                            else current.classList.remove('unseen');
                            if (history.qyState['mode'].unseen2 == true) current.classList.add('unseen2');
                            else current.classList.remove('unseen2');
                        }
                        current.updateMarks();
                    }

                    function cardRegion(current, data) {
                        // 先清空牌
                        current.node.handcards1.innerHTML = '';
                        current.node.handcards2.innerHTML = '';
                        current.node.equips.innerHTML = '';
                        current.node.judges.innerHTML = '';

                        if (current.node.expansions)
                            current.node.expansions.innerHTML = '';

                        // 获得手牌
                        current.directgain(data.h);
                        current.directgain(data.s);
                        // 贴上判定牌;
                        data.j.forEach(item => {
                            if (item.viewAs != item.name && item.viewAs) {
                                lib.element.player.addJudge.call(current, {name: item.viewAs}, item)._triggered = null
                            } else {
                                lib.element.player.addJudge.call(current, item, [item])._triggered = null
                            }
                        });
                        // 装上装备牌
                        data.e.forEach(item => {
                            let equipCardArray = data.equipCardArray[item.name];
                            let equipCardStorage = data.equipCardStorage[item.name];
                            if (equipCardArray) {
                                for (let i in equipCardArray)
                                    item[i] = equipCardArray[i];
                            }
                            if (equipCardStorage) {
                                for (let i in equipCardStorage)
                                    item.storage[i] = equipCardStorage[i];
                            }
                            let onEquip = lib.card[item.name].onEquip;
                            if (onEquip) {
                                lib.card[item.name].restEquip = Array.isArray(onEquip) ? onEquip.slice(0) : onEquip;
                                lib.card[item.name].onEquip = function () {
                                    lib.card[card.name].onEquip = lib.card[card.name].restEquip;
                                    delete lib.card[card.name].restEquip;
                                }
                            }
                            lib.element.player.equip.call(current, item)._triggered = null;
                        });
                        //复原武将牌上的牌
                        for (var i = 0; i < data.x.length; i++) {
                            current.addToExpansion(data.x[i], 'nodelay', current).gaintag.addArray(data.gaintag[i])._triggered = null;
                        }
                    }

                    for (let history of event.reuslt.links) {
                        let current = game.playerMap[history.playerid];
                        if (history.qyState['dead']) lib.element.player.die.call(current)._triggered = null;
                        else lib.element.player.revive.call(current, false);
                        lib.element.player.init.call(current, history.qyState['name1'], history.qyState['name2']);
                        var next = lib.element.player.link.call(current, !!history.qyState['linked']);
                        if (next) next._triggered = null;
                        var next = lib.element.player.turnOver.call(current, !!history.qyState['turnedover']);
                        if (next) next._triggered = null;
                        cardRegion(current, history);
                        for (var i = 0; i < current.getCards('hs').length; i++) {
                            current.getCards('hs')[i].gaintag = history.qyState['gaintag'][i];
                        }
                        for (var i = 0; i < current.getCards('j').length; i++) {
                            current.getCards('j')[i].viewAs = history.qyState['views'][i];
                        }
                        restStatus(current, history);
                        current.update();
                        current.updateMarks();
                    }
                    // 恢复之前记录的_status的数组
                    for (let i in historyLinks.statusKeys) {
                        _status[i] = historyLinks.statusKeys[i];
                    }
                    game.arrangePlayers();
                    lib.hook = historyLinks.hook;
                    lib.hookmap = historyLinks.hookmap;

                    game.roundNumber = historyLinks.roundNumber - 1;
                    game.phaseNumber = historyLinks.phaseNumber;
                    game.updateRoundNumber();
                    if (game.getState) game.updateState(historyLinks.qyGetState);
                } else event.finish()
                'step 2'
                var historyLinks = event.reuslt.links;
                while (_status.event.name != 'phaseLoop') {
                    _status.event = _status.event.parent;
                }
                _status.event.step = 0
                _status.event.player = historyLinks.roundStart;
                _status.paused = false;
                _status.roundStart = historyLinks.roundStart;
                window.qingyao_history.length = historyLinks.i;
            },
        };
        lib.translate['_ymlunhun'] = '轮回';
        lib.translate['_ymfuyuan'] = '复原';
        if (config.qingyao_cundang === 'button') {
            delete lib.skill._ymfuyuan.enable;
        }
    }
    // 统计牌堆
    if (config.qingyao_card_statistics) {
        lib.arenaReady.push(function () {
            ui.create.system('统计牌堆', function () {
                if (!_status.gameStarted) return;
                game.pause2();

                const cardsInfo = game.players.map(item => item.get('h')).flat(window.Infinity)
                    .concat(...ui.cardPile.childNodes)
                    .concat(...ui.discardPile.childNodes)
                    .map(item => ({
                        name: item.name,
                        suit: item.suit,
                        number: item.number,
                        nature: get.translation(item.nature),
                        color: get.color(item),
                        type: get.translation(get.type(item), 'trick'),
                        translate: lib.translate[item.name],
                        link: item,
                    }));
                let cardStatistics = {
                    杀: {
                        num: 0,
                        type: '基本',
                    },
                    火杀: {
                        num: 0,
                        type: '基本',
                    },
                    雷杀: {
                        num: 0,
                        type: '基本',
                    },
                    红杀: {
                        num: 0,
                        type: '基本',
                    },
                    黑杀: {
                        num: 0,
                        type: '基本',
                    },
                    '黑桃2~9': {
                        num: 0,
                        type: '花色',
                    },
                }
                let typeList = ['点数', '花色'];
                for (let card of cardsInfo) {
                    typeList.add(card.type);
                    // 统计卡牌名
                    if (!cardStatistics[card.translate])
                        cardStatistics[card.translate] = {
                            num: 0,
                            type: card.type,
                        }
                    // 统计花色
                    if (!cardStatistics[get.translation(card.suit)])
                        cardStatistics[get.translation(card.suit)] = {
                            num: 0,
                            type: '花色',
                        }
                    // 统计点数
                    if (!cardStatistics[card.number])
                        cardStatistics[card.number] = {
                            num: 0,
                            type: '点数',
                        }

                    if (ui.cardPile.contains(card.link)) {
                        cardStatistics[card.translate].num++;
                        cardStatistics[get.translation(card.suit)].num++;
                        cardStatistics[card.number].num++;

                        if (card.name === 'sha') {
                            if (card.color === 'black') {
                                cardStatistics['黑杀'].num++;
                                if (card.suit === 'spade' && card.number <= 9 && card.number >= 2) cardStatistics['黑桃2~9'].num++;
                            } else if (card.color === 'red') {
                                cardStatistics['红杀'].num++;
                            }
                        }

                    }


                    if (card.nature) {
                        if (!cardStatistics[card.nature + card.translate])
                            cardStatistics[card.nature + card.translate] = {
                                num: 0,
                                type: card.type,
                            }
                        if (ui.cardPile.contains(card.link)) {
                            cardStatistics[card.nature + card.translate].num++;
                        }
                    }
                }

                let popupContainer = ui.create.div('.popup-container', ui.window, {
                    zIndex: 10,
                    background: 'rgb(0,0,0,.3)',
                }, function () {
                    this.delete(500);
                    game.resume2();
                });
                let statistics = ui.create.div('.card-statistics', '卡牌计数器', popupContainer);
                let statisticsTitle = ui.create.div('.card-statistics-title', statistics);
                let statisticsContent = ui.create.div('.card-statistics-content', statistics);

                typeList.forEach(item => {
                    ui.create.div(statisticsTitle, '', item);
                    statisticsContent[item] = ui.create.div(statisticsContent, '');
                });

                for (let i in cardStatistics) {
                    let items = ui.create.div('.items');
                    let item = ui.create.div('.item', i, items);
                    let num = ui.create.div('.item-num', `X${cardStatistics[i].num}`, items);
                    statisticsContent[cardStatistics[i].type].appendChild(items);
                }

            }, true, true);
        })
    }
})


window.qyCachesMainWindow = {
    src: 'extension/假装无敌纯/dist/index.html?openRouter=',
    mainWindow: null,
    getMain(index = 0) {
        if (!this.mainWindow) this.mainWindow = this.open(this.src);
        return this.mainWindow[index];
    },
    // 缓存加载
    open(src = this.src) {
        let div = document.createElement('div');
        let divStyle = {
            'z-index': 100,
            'background': 'white',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'left': '0px',
            'top': '0px',
        };
        Object.assign(div.style,divStyle);
        div.hide();
        document.body.appendChild(div);

        let iframe = document.createElement('iframe');
        let frameElementStyle = {
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px',
            position: 'fixed',
            border: 'none',
        }
        Object.assign(iframe.style,frameElementStyle);
        div.appendChild(iframe);

        let assetURL = '';
        if(window.lib && window.lib.assetURL) assetURL = lib.assetURL
        else if(window.cordova && window.cordova.file.externalApplicationStorageDirectory) assetURL = window.cordova.file.externalApplicationStorageDirectory
        iframe.src = `${assetURL}${src}`;
        let divElement = document.createElement('div');
        divElement.style.cssText = `position: fixed; display: flex; justify-content: center; align-items: center; width: 40px; height: 40px; border-radius: 100%; font-size: 36px; line-height: 40px; font-family: xinwei; bottom: 2px; right: 2px; background: rgba(0, 0, 0, 0.4); color: white; text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 3px 10px; padding: 5px; cursor: pointer;`
        divElement.textContent = '隐';
        divElement.onclick = () => div.hide();
        div.appendChild(divElement);
        return [div, iframe, iframe.contentWindow];
    },
    show() {
        // 自己给自己通信，哈哈哈
        window.postMessage({
            type: 'requestGlobalParameter'
        },"*");
        return this.getMain().show();
    },
    hide() {
        return this.getMain().hide();
    },
    postMessage(data) {
        this.getMain(2).postMessage(data,"*");
    },

}

setTimeout(function () {
    window.qyCachesMainWindow.getMain();
}, 200);
