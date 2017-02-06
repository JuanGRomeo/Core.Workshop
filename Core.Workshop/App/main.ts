import axios from "axios";
import * as _ from "underscore";
import  { MeetupClient } from './services/MeetupClient';

const memberList = require('./templates/memberList.tmpl');

let logo = require("./images/usermessage.png");

let jsonbutton = document.getElementById('jsonbutton');
jsonbutton.addEventListener('click', ()=> {
    require.ensure([], require=> {
        let jsonconfig: any = require('./config/app.config.json');        
        console.log(jsonconfig.app);
    });
});

let loadData = document.getElementById('loaddata');
loadData.addEventListener('click', ()=> {
    MeetupClient.getEventAssistants('237364644').then( data => {
        console.log(data);
    });
});

var items = [
        {name:"Alexander"},
        {name:"Barklay"},
        {name:"Chester"},
        {name:"Domingo"},
        {name:"Edward"},
        {name:"..."},
        {name:"Yolando"},
        {name:"Zachary"}
    ];
 

document.getElementById("target").innerHTML = _.template(memberList as string)({items: items});





